import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr, unwrapOk } from 'option-t/plain_result/result';

const EXPECTED_OK = Symbol('expected_ok');
const EXPECTED_ERR = Symbol('expected_err');

test('Ok', (t) => {
    const input = createOk(EXPECTED_OK);
    t.is(unwrapOk(input), EXPECTED_OK);
});

test('Err', (t) => {
    t.throws(
        () => {
            const input = createErr(EXPECTED_ERR);
            unwrapOk(input);
        },
        {
            instanceOf: TypeError,
            message: 'called with `Err`',
        },
    );
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.unwrapOk, unwrapOk);
    t.is(PlainResultNamespace.unwrapOk, unwrapOk);
    t.is(PlainResultCompatV54.unwrapOk, unwrapOk);
});
