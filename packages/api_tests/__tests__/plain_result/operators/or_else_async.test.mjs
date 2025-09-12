import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { orElseAsyncForResult } from 'option-t/plain_result/or_else_async';
import { createOk, createErr } from 'option-t/plain_result/result';

const VALUE_T = Math.random();
const ERROR_E = new Error('e');
const ERROR_F = new Error('f');

test('input is Ok(T)', async (t) => {
    t.plan(2);

    const input = createOk(VALUE_T);
    const result = orElseAsyncForResult(input, async (_) => {
        t.pass(false);
        return createOk(_);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
});

test('input is Err(E), callback return Ok(T)', async (t) => {
    t.plan(3);

    const input = createErr(ERROR_E);
    const expected = createOk(VALUE_T);

    const result = orElseAsyncForResult(input, async (e) => {
        t.is(e, ERROR_E);
        return expected;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, expected);
});

test('input is Err(E), callback return Err(F)', async (t) => {
    t.plan(3);

    const input = createErr(ERROR_E);
    const expected = createErr(ERROR_F);

    const result = orElseAsyncForResult(input, async (e) => {
        t.is(e, ERROR_E);
        return expected;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, expected);
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.orElseAsync, orElseAsyncForResult);
    t.is(PlainResultNamespace.orElseAsync, orElseAsyncForResult);
    t.is(PlainResultCompatV54.orElseAsyncForResult, orElseAsyncForResult);
});
