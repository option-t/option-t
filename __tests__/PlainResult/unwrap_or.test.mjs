import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/PlainResult/Result.mjs';
import { unwrapOrFromResult } from '../../__dist/esm/PlainResult/unwrapOr.mjs';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = unwrapOrFromResult(input, DEFAULT_VAL);
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = unwrapOrFromResult(input, DEFAULT_VAL);
    t.is(actual, DEFAULT_VAL);
});
