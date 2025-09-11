import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import { andThenAsyncForResult } from 'option-t/plain_result/and_then_async';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';

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
    t.true(isOk(actual));
    t.is(unwrapOk(actual), VALUE_U);
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
    t.true(isErr(actual));
    t.is(unwrapErr(actual), ERROR_E);
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
    t.true(isErr(actual));
    t.is(unwrapErr(actual), ERROR_E);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.ResultOperator.andThenAsync, andThenAsyncForResult);
    t.is(PlainResultNamespace.andThenAsync, andThenAsyncForResult);
    t.is(PlainResultCompatV54.andThenAsyncForResult, andThenAsyncForResult);
});
