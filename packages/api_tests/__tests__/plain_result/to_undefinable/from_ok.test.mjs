import test from 'ava';

import { createOk, createErr } from 'option-t/plain_result/result';
import { toUndefinableFromOk } from 'option-t/plain_result/to_undefinable';

const VALUE_T = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = toUndefinableFromOk(input);
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = toUndefinableFromOk(input);
    t.is(actual, undefined);
});
