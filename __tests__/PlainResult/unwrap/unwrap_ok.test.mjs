import test from 'ava';

import { createOk, createErr } from '../../../__dist/esm/PlainResult/Result.mjs';
import { unwrapFromResult } from '../../../__dist/esm/PlainResult/unwrap.mjs';

const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok', (t) => {
    const input = createOk(EXPECTED_OK);
    t.is(unwrapFromResult(input), EXPECTED_OK);
});

test('Err', (t) => {
    t.throws(
        () => {
            const input = createErr(EXPECTED_ERR);
            unwrapFromResult(input);
        },
        {
            instanceOf: TypeError,
            message: 'called with `Err`',
        }
    );
});
