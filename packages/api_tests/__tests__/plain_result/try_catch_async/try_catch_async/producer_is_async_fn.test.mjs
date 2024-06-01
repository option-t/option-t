import test from 'ava';

import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';
import { tryCatchIntoResultAsync } from 'option-t/plain_result/try_catch_async';

test('output=Ok(T): producer is async fn', async (t) => {
    t.plan(4);

    const EXPECTED = Math.random();
    const result = tryCatchIntoResultAsync(async () => {
        t.pass();
        return EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(unknown): producer is async fn', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());
    const result = tryCatchIntoResultAsync(async () => {
        t.pass();
        throw EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});
