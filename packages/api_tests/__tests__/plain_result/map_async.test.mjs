import test from 'ava';

import { mapAsyncForResult } from 'option-t/plain_result/map_async';
import { createOk, createErr } from 'option-t/plain_result/result';

const VALUE_T = Math.random();
const VALUE_U = Math.random();
const ERROR_E = new Error('e');

test('input is Ok(T), callback return T', async (t) => {
    t.plan(5);

    const input = createOk(VALUE_T);
    const result = mapAsyncForResult(input, async (v) => {
        t.is(v, VALUE_T);
        return VALUE_U;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is Err(E)', async (t) => {
    t.plan(4);

    const input = createErr(ERROR_E);
    const result = mapAsyncForResult(input, async (_) => {
        t.pass(false);
        return VALUE_T;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
    t.false(actual.ok);
    t.is(actual.err, ERROR_E);
});
