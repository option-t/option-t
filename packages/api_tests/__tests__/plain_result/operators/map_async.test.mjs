import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { mapAsyncForResult } from 'option-t/plain_result/map_async';
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
    t.true(isOk(actual));
    t.is(unwrapOk(actual), VALUE_U);
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
    t.true(isErr(actual));
    t.is(unwrapErr(actual), ERROR_E);
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.mapAsync, mapAsyncForResult);
    t.is(PlainResultNamespace.mapAsync, mapAsyncForResult);
    t.is(PlainResultCompatV54.mapAsyncForResult, mapAsyncForResult);
});
