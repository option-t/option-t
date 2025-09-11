import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    createOk,
    createErr,
    unwrapErr as unwrapErrFromResult,
    unwrapErr,
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

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.unwrapErr, unwrapErr);
    t.is(PlainResultNamespace.unwrapErr, unwrapErr);
    t.is(PlainResultCompatV54.unwrapErr, unwrapErr);
});
