import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.mjs';

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

test('Ok<T>', function (t) {
    const ok = createOk(EXPECTED_OK);
    t.is(ok.expect('not expected message'), EXPECTED_OK);
});

test('Err<E>', function (t) {
    const UNEXPECTED = 100;

    t.throws(
        () => {
            const err = createErr(UNEXPECTED);
            err.expect(EXPECTED_ERR);
        },
        {
            instanceOf: TypeError,
            message: EXPECTED_ERR,
        }
    );
});
