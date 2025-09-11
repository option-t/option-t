import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';
import { tryCatchIntoResultAsync } from 'option-t/plain_result/try_catch_async';

test('output=Ok(T): producer is normal fn', async (t) => {
    t.plan(4);

    const EXPECTED = Math.random();
    const result = tryCatchIntoResultAsync(() => {
        t.pass();
        return Promise.resolve(EXPECTED);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(unknown): producer is normal fn', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());
    const result = tryCatchIntoResultAsync(() => {
        t.pass();
        return Promise.reject(EXPECTED);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(unknown): producer is normal fn but throw an error before return any Promise', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());

    const result = tryCatchIntoResultAsync(() => {
        t.pass();
        throw EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.ResultOperator.tryCatchIntoAsync, tryCatchIntoResultAsync);
    t.is(PlainResultNamespace.tryCatchIntoAsync, tryCatchIntoResultAsync);
    t.is(PlainResultCompatV54.tryCatchIntoResultAsync, tryCatchIntoResultAsync);
});
