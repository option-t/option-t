import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.js';

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

test('Ok<T>', (t) => {
    const ok = createOk(EXPECTED_OK);
    t.is(ok.unwrap(), EXPECTED_OK);
});

test('Err<E>', (t) => {
    t.throws(
        () => {
            const err = createErr(EXPECTED_ERR);
            err.unwrap();
        },
        {
            instanceOf: TypeError,
            message: 'called `unwrap()` on a `Err` value',
        }
    );
});
