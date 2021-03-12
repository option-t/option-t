import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.mjs';

const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok<T>', (t) => {
    let ok;
    t.notThrows(() => {
        ok = createOk(EXPECTED_OK);
        ok.drop();
    }, 'is callable');

    t.true(Object.isFrozen(ok), 'should be freezed');
    t.is(ok.unwrap(), null, 'should be freed');
});

test('Err<E>', (t) => {
    let err;
    t.notThrows(() => {
        err = createErr(EXPECTED_ERR);
        err.drop();
    }, 'is callable');

    t.true(Object.isFrozen(err), 'should be freezed');
    t.is(err.unwrapErr(), null, 'should be freed');
});
