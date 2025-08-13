import test from 'ava';

import { andForResult } from 'option-t/plain_result/and';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';

test('a=Ok, b=Ok', (t) => {
    const EXPECTED = Symbol('expected');
    const NOT_EXPECTED = Symbol('not expected');

    const a = createOk(NOT_EXPECTED);
    const b = createOk(EXPECTED);

    const actual = andForResult(a, b);

    t.is(actual, b, 'should return b');
    t.true(isOk(actual), 'should be Ok');
    t.is(unwrapOk(actual), EXPECTED, 'should be the inner value');
});

test('a=Ok, b=Err', (t) => {
    const EXPECTED = Symbol('expected');
    const NOT_EXPECTED = Symbol('not expected');

    const a = createOk(NOT_EXPECTED);
    const b = createErr(EXPECTED);

    const actual = andForResult(a, b);

    t.is(actual, b, 'should return b');
    t.true(isErr(actual), 'should be Err');
    t.is(unwrapErr(actual), EXPECTED, 'should be the inner value');
});

test('a=Err, b=Ok', (t) => {
    const EXPECTED = Symbol('expected');
    const NOT_EXPECTED = Symbol('not expected');

    const a = createErr(EXPECTED);
    const b = createOk(NOT_EXPECTED);

    const actual = andForResult(a, b);

    t.is(actual, a, 'should return a');
    t.true(isErr(actual), 'should be Err');
    t.is(unwrapErr(actual), EXPECTED, 'should be the inner value');
});

test('a=Err, b=Err', (t) => {
    const EXPECTED = Symbol('expected');
    const NOT_EXPECTED = Symbol('not expected');

    const a = createErr(EXPECTED);
    const b = createErr(NOT_EXPECTED);

    const actual = andForResult(a, b);

    t.is(actual, a, 'should return a');
    t.true(isErr(actual), 'should be Err');
    t.is(unwrapErr(actual), EXPECTED, 'should be the inner value');
});
