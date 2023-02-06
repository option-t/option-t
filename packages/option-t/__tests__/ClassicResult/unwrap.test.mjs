import test from 'ava';

import { createClassicOk, createClassicErr } from '../../__dist/esm/ClassicResult/ClassicResult.js';

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

test('Ok<T>', (t) => {
    const ok = createClassicOk(EXPECTED_OK);
    t.is(ok.unwrap(), EXPECTED_OK);
});

test('Err<E>', (t) => {
    t.throws(
        () => {
            const err = createClassicErr(EXPECTED_ERR);
            err.unwrap();
        },
        {
            instanceOf: TypeError,
            message: 'called `unwrap()` on a `Err` value',
        }
    );
});
