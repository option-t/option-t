import test from 'ava';

import { createOk, createErr, unwrapOk as unwrapOkFromResult } from 'option-t/plain_result/result';

const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok', (t) => {
    const input = createOk(EXPECTED_OK);
    t.is(unwrapOkFromResult(input), EXPECTED_OK);
});

test('Err', (t) => {
    t.throws(
        () => {
            const input = createErr(EXPECTED_ERR);
            unwrapOkFromResult(input);
        },
        {
            instanceOf: TypeError,
            message: 'called with `Err`',
        },
    );
});
