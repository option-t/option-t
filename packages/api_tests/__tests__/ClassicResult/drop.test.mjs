import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/esm/ClassicResult';

const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok<T>', (t) => {
    let ok;
    t.notThrows(() => {
        ok = createClassicOk(EXPECTED_OK);
        ok.drop();
    }, 'is callable');

    t.true(Object.isFrozen(ok), 'should be freezed');
    t.is(ok.unwrap(), null, 'should be freed');
});

test('Err<E>', (t) => {
    let err;
    t.notThrows(() => {
        err = createClassicErr(EXPECTED_ERR);
        err.drop();
    }, 'is callable');

    t.true(Object.isFrozen(err), 'should be freezed');
    t.is(err.unwrapErr(), null, 'should be freed');
});
