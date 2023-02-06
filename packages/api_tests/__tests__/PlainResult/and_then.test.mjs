import test from 'ava';

import { createOk, createErr } from 'option-t/__dist/esm/PlainResult/Result.js';
import { andThenForResult } from 'option-t/__dist/esm/PlainResult/andThen.js';

const VALUE_T = Math.random();
const VALUE_U = Math.random();
const ERROR_E = new Error('e');

test('input is Ok(T), callback return Ok(T)', (t) => {
    t.plan(4);

    const input = createOk(VALUE_T);
    const actual = andThenForResult(input, (v) => {
        t.is(v, VALUE_T);
        return createOk(VALUE_U);
    });

    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is Ok(T), callback return Err(E)', (t) => {
    t.plan(3);

    const input = createOk(VALUE_T);
    const result = andThenForResult(input, (v) => {
        t.is(v, VALUE_T);
        return createErr(ERROR_E);
    });

    t.false(result.ok);
    t.is(result.err, ERROR_E);
});

test('input is Err(E)', (t) => {
    t.plan(3);

    const input = createErr(ERROR_E);
    const actual = andThenForResult(input, (_) => {
        t.pass(false);
        return createOk(VALUE_T);
    });

    t.is(actual, input);
    t.false(actual.ok);
    t.is(actual.err, ERROR_E);
});
