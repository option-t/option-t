import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.mjs';

test('Ok<T>', function (t) {
    t.plan(2);

    const EXPECTED = Symbol('EXPECTED');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    let acutual = null;
    const op = function () {
        t.fail('the `op` callback should not be called');
        return NOT_EXPECTED;
    };

    t.not(acutual, EXPECTED);

    const result = createOk(EXPECTED);
    acutual = result.unwrapOrElse(op);

    t.is(acutual, EXPECTED, 'the returned is expected');
});

test('Err<E>', function (t) {
    t.plan(5);

    const ORIGINAL = Symbol('ORIGINAL');
    const EXPECTED = Symbol('EXPECTED');

    let argument = null;
    let acutual = null;
    const op = function (v) {
        argument = v;
        t.pass();
        return EXPECTED;
    };

    t.not(argument, ORIGINAL);
    t.not(acutual, EXPECTED);

    const result = createErr(ORIGINAL);
    acutual = result.unwrapOrElse(op);

    t.is(argument, ORIGINAL, 'the argument of `op` is expeced');
    t.is(acutual, EXPECTED, 'the returned is expected');
});
