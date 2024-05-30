import test from 'ava';

import { createOk, createErr } from 'option-t/plain_result/result';
import { toNullableFromOk } from 'option-t/plain_result/to_nullable';

const VALUE_T = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = toNullableFromOk(input);
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = toNullableFromOk(input);
    t.is(actual, null);
});
