import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr } from 'option-t/plain_result/result';
import { toNullableFromErr } from 'option-t/plain_result/to_nullable';

const VALUE_T = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = toNullableFromErr(input);
    t.is(actual, null);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = toNullableFromErr(input);
    t.is(actual, ERROR_E);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.toNullableFromErr, toNullableFromErr);
    t.is(PlainResultRoot.ResultOperator.toNullableFromErr, toNullableFromErr);
    t.is(PlainResultNamespace.toNullableFromErr, toNullableFromErr);
    t.is(PlainResultCompatV54.toNullableFromErr, toNullableFromErr);
});
