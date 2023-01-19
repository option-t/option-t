import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.js';

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

test('Ok<T>', function (t) {
    const result = createOk(EXPECTED_OK);
    t.throws(
        () => {
            result.unwrapErr();
        },
        {
            instanceOf: TypeError,
            message: 'called `unwrapErr()` on a `Ok` value',
        }
    );
});

test('Err<E>', function (t) {
    const ok = createErr(EXPECTED_ERR);
    t.is(ok.unwrapErr(), EXPECTED_ERR, 'should be expected value');
});
