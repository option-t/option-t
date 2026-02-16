import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/classic_result';

test('Ok<T>', (t) => {
    t.plan(6);

    const ORIGIN = Symbol('ORIGIN');
    const EXPECTED = Symbol('EXPECTED');

    let argument = null;
    let result = null;

    const op = function (v) {
        argument = v;
        t.pass();
        return EXPECTED;
    };

    t.not(argument, ORIGIN);
    t.not(result, EXPECTED);

    const original = createClassicOk(ORIGIN);
    result = original.map(op);

    t.is(result.isOk(), true, 'the returned value should be `Ok<U, E>');
    t.is(argument, ORIGIN, 'the argument of `op` should be the expected value');
    t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
});

test('Err<E>', (t) => {
    t.plan(3);

    const ORIGIN = Symbol('ORIGIN');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    const op = function () {
        t.fail();
        return NOT_EXPECTED;
    };

    t.not(ORIGIN, NOT_EXPECTED);

    const original = createClassicErr(ORIGIN);
    const result = original.map(op);

    t.true(result.isErr(), 'the returned value should be `Err<U, E>');
    t.is(result.unwrapErr(), ORIGIN, 'the returned value should wrap the expected value');
});
