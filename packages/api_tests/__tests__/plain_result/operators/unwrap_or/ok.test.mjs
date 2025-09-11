import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr } from 'option-t/plain_result/result';
import { unwrapOrForResult } from 'option-t/plain_result/unwrap_or';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = unwrapOrForResult(input, DEFAULT_VAL);
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = unwrapOrForResult(input, DEFAULT_VAL);
    t.is(actual, DEFAULT_VAL);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.unwrapOrForResult, unwrapOrForResult);
    t.is(PlainResultRoot.ResultOperator.unwrapOr, unwrapOrForResult);
    t.is(PlainResultNamespace.unwrapOr, unwrapOrForResult);
    t.is(PlainResultCompatV54.unwrapOrForResult, unwrapOrForResult);
});
