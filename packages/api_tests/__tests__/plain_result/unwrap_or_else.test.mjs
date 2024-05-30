import test from 'ava';

import { createOk, createErr } from 'option-t/plain_result/result';
import { unwrapOrElseForResult } from 'option-t/plain_result/unwrap_or_else';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    t.plan(1);

    const input = createOk(VALUE_T);
    const actual = unwrapOrElseForResult(input, () => {
        t.pass(true);
        return DEFAULT_VAL;
    });
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    t.plan(2);

    const input = createErr(ERROR_E);
    const actual = unwrapOrElseForResult(input, () => {
        t.pass(true);
        return DEFAULT_VAL;
    });
    t.is(actual, DEFAULT_VAL);
});
