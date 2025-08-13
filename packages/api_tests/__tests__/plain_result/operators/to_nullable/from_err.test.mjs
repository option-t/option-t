import test from 'ava';

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
