import test from 'ava';

import { createOk, createErr } from 'option-t/esm/PlainResult/Result';
import { unwrapErrOrFromResult } from 'option-t/esm/PlainResult/unwrapOr';

const VALUE_T = Math.random();
const DEFAULT_VAL = new Error(`${Math.random()}`);
const ERROR_E = new Error(`${Math.random()}`);

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = unwrapErrOrFromResult(input, DEFAULT_VAL);
    t.is(actual, DEFAULT_VAL);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = unwrapErrOrFromResult(input, DEFAULT_VAL);
    t.is(actual, ERROR_E);
});
