import test from 'ava';

import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/esm/PlainResult/Result';
import { tryCatchIntoResultAsync } from 'option-t/esm/PlainResult/tryCatchAsync';

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

test('if producer does not return Promise, case = return', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            await tryCatchIntoResultAsync(() => {
                t.pass('producer is called');
                return Math.random();
            });
        },
        {
            instanceOf: TypeError,
            message: '`producer` must return Promise',
        }
    );
});
