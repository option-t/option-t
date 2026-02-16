import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/classic_result';

test('Ok<T>', function (t) {
    t.plan(4);

    const ORIGIN = Symbol('ORIGIN');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    let opIsCalled = false;
    const op = function () {
        opIsCalled = true;
        t.fail();
        return NOT_EXPECTED;
    };

    t.not(opIsCalled, true);

    const original = createClassicOk(ORIGIN);
    const result = original.mapErr(op);

    t.is(result.isOk(), true, 'the returned value should be `Ok<T, F>');
    t.is(opIsCalled, false, 'the `op` callback should not be called');
    t.is(result.unwrap(), ORIGIN, 'the returned value should wrap the expected value');
});

test('Err<E>', function (t) {
    t.plan(5);

    const ORIGIN = Symbol('ORIGIN');
    const EXPECTED = Symbol('EXPECTED');

    let argument = null;
    const op = function (v) {
        argument = v;
        t.pass();
        return EXPECTED;
    };

    t.not(argument, ORIGIN);

    const original = createClassicErr(ORIGIN);
    const result = original.mapErr(op);

    t.is(result.isErr(), true, 'the returned value should be `Err<T, F>');
    t.is(argument, ORIGIN, 'the argument of `op` callback is expected');
    t.is(result.unwrapErr(), EXPECTED, 'the returned value should wrap the expected value');
});
