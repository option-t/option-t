import test from 'ava';

import {
    createOk,
    createErr,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';

const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok', (t) => {
    t.throws(
        () => {
            const input = createOk(EXPECTED_OK);
            unwrapErrFromResult(input);
        },
        {
            instanceOf: TypeError,
            message: 'called with `Ok`',
        },
    );
});

test('Err', (t) => {
    const input = createErr(EXPECTED_ERR);
    t.is(unwrapErrFromResult(input), EXPECTED_ERR);
});
