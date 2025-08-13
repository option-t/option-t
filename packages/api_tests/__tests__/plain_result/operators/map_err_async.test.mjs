import test from 'ava';

import { mapErrAsyncForResult } from 'option-t/plain_result/map_err_async';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';

const VALUE_T = Math.random();
const ERROR_E = new Error('e');
const ERROR_F = new Error('f');

test('input is Ok(T)', async (t) => {
    t.plan(4);

    const input = createOk(VALUE_T);
    const result = mapErrAsyncForResult(input, async (_) => {
        t.pass(false);
        return ERROR_F;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
    t.true(isOk(actual));
    t.is(unwrapOk(actual), VALUE_T);
});

test('input is Err(E)', async (t) => {
    t.plan(5);

    const input = createErr(ERROR_E);
    const result = mapErrAsyncForResult(input, async (e) => {
        t.is(e, ERROR_E);
        return ERROR_F;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.not(actual, input);
    t.true(isErr(actual));
    t.is(unwrapErr(actual), ERROR_F);
});
