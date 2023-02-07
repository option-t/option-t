import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { fromErrToUndefinable } from 'option-t/PlainResult/toUndefinable';

const VALUE_T = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = fromErrToUndefinable(input);
    t.is(actual, undefined);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = fromErrToUndefinable(input);
    t.is(actual, ERROR_E);
});
