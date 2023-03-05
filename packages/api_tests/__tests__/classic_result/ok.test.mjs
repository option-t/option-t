import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/esm/ClassicResult';
const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok<T>', (t) => {
    const ok = createClassicOk(EXPECTED_OK);

    t.true(ok.ok().isSome, 'return `Some<T>`');
    t.is(ok.ok().unwrap(), EXPECTED_OK, 'the inner value is expected');
});

test('Err<E>', (t) => {
    const err = createClassicErr(EXPECTED_ERR);
    t.true(err.ok().isNone, 'return `None<T>`');
});
