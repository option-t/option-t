import test from 'ava';

import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/esm/PlainResult/Result';
import {
    createClassicOk,
    createClassicErr,
    compatToClassicResult,
    compatToPlainResult,
} from 'option-t/esm/ClassicResult';

test(`input is Plain's Ok`, (t) => {
    const expected = Math.random();
    const input = createOk(expected);
    const actual = compatToClassicResult(input);

    t.true(actual.isOk(), 'isOk()');
    t.is(actual.unwrap(), expected, 'inner value');
});

test(`input is Plain's Err`, (t) => {
    const expected = Math.random();
    const input = createErr(expected);
    const actual = compatToClassicResult(input);

    t.false(actual.isOk(), 'isOk()');
    t.is(actual.unwrapErr(), expected, 'inner value');
});

test(`input is Classic's Ok`, (t) => {
    const expected = Math.random();
    const input = createClassicOk(expected);
    const actual = compatToPlainResult(input);

    t.true(isOk(actual), 'isOk');
    t.is(unwrapOkFromResult(actual), expected, 'inner value');
});

test(`input is Classic's Err`, (t) => {
    const expected = Math.random();
    const input = createClassicErr(expected);
    const actual = compatToPlainResult(input);

    t.true(isErr(actual), 'isErr');
    t.is(unwrapErrFromResult(actual), expected, 'inner value');
});
