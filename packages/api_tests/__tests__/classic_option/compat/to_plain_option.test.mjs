import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
    compatToClassicOption,
    compatToPlainOption,
} from 'option-t/ClassicOption';
import {
    createSome,
    createNone,
    isSome,
    isNone,
    unwrapSome as unwrapOption,
} from 'option-t/PlainOption/Option';

test(`input is Plain's Some`, (t) => {
    const expected = Math.random();
    const input = createSome(expected);
    const actual = compatToClassicOption(input);

    t.true(actual.isSome, 'isSome');
    t.is(actual.unwrap(), expected, 'inner value');
});

test(`input is Plain's None`, (t) => {
    const input = createNone();
    const actual = compatToClassicOption(input);

    t.false(actual.isSome);
});

test(`input is Classic's Some`, (t) => {
    const expected = Math.random();
    const input = createClassicSome(expected);
    const actual = compatToPlainOption(input);

    t.true(isSome(actual), 'isSome');
    t.is(unwrapOption(actual), expected, 'inner value');
});

test(`input is Classic's None`, (t) => {
    const input = createClassicNone();
    const actual = compatToPlainOption(input);

    t.true(isNone(actual));
});
