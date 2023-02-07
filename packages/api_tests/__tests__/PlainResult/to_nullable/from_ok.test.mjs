import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { fromOkToNullable } from 'option-t/PlainResult/toNullable';

const VALUE_T = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = fromOkToNullable(input);
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = fromOkToNullable(input);
    t.is(actual, null);
});
