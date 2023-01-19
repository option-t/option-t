import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.js';

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

test('Ok<T>', function (t) {
    const ok = createOk(EXPECTED_OK);
    t.is(ok.err().isNone, true, 'return `None<E>`');
});

test('Err<E>', function (t) {
    const err = createErr(EXPECTED_ERR);

    t.is(err.err().isSome, true, 'return `Some<E>`');
    t.is(err.err().unwrap(), EXPECTED_ERR, 'the inner value is expected');
});
