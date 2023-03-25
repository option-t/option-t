import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { andThenAsyncForResult } from 'option-t/PlainResult/andThenAsync';

const VALUE_T = Math.random();
const VALUE_U = Math.random();
const ERROR_E = new Error('e');

test('input is Ok(T), callback return Ok(T)', async (t) => {
    t.plan(5);

    const input = createOk(VALUE_T);
    const result = andThenAsyncForResult(input, async (v) => {
        t.is(v, VALUE_T);
        return createOk(VALUE_U);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is Ok(T), callback return Err(E)', async (t) => {
    t.plan(4);

    const input = createOk(VALUE_T);
    const result = andThenAsyncForResult(input, async (v) => {
        t.is(v, VALUE_T);
        return createErr(ERROR_E);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.false(actual.ok);
    t.is(actual.err, ERROR_E);
});

test('input is Err(E)', async (t) => {
    t.plan(4);

    const input = createErr(ERROR_E);
    const result = andThenAsyncForResult(input, async (_) => {
        t.pass(false);
        return createOk(VALUE_T);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
    t.false(actual.ok);
    t.is(actual.err, ERROR_E);
});
