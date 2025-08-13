import test from 'ava';

import { tryCatchIntoResultWithAssertErrorAsync } from 'option-t/plain_result/deprecated/try_catch_with_assert_error_async';
import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';
import { getCrossRealmErrorConstructor } from '../../../../cross_realm_error_helper.mjs';

test('output=Ok(T): producer is async fn', async (t) => {
    t.plan(4);

    const EXPECTED = Math.random();
    const result = tryCatchIntoResultWithAssertErrorAsync(async () => {
        t.pass();
        return EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(Error): producer is async fn', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());
    const result = tryCatchIntoResultWithAssertErrorAsync(async () => {
        t.pass();
        throw EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('if producer is async function and throw a not-Error-instance value', async (t) => {
    t.plan(3);

    const THROWN_EXPECTED = Math.random();

    const actual = await t.throwsAsync(
        async () => {
            await tryCatchIntoResultWithAssertErrorAsync(async () => {
                t.pass('producer is called');
                throw THROWN_EXPECTED;
            });
            t.fail('unreachable here');
        },
        {
            instanceOf: TypeError,
            message: 'The thrown value is not an instance of `Error` of the current realm.',
        },
    );

    t.is(actual.cause, THROWN_EXPECTED, 'should set Error.cause');
});

test('if producer is async function and throw a instance value from cross-realm `Error` constructor', async (t) => {
    t.plan(6);
    const CurrentRealmErrorCtor = globalThis.Error;

    // arrange
    const CrossRealmErrorCtor = getCrossRealmErrorConstructor(t);
    const THROWN_EXPECTED = new CrossRealmErrorCtor(Math.random());
    t.false(
        THROWN_EXPECTED instanceof CurrentRealmErrorCtor,
        `the thrown error should not be the instance of current realm's Error consturctor`,
    );

    const actual = await t.throwsAsync(
        async () => {
            await tryCatchIntoResultWithAssertErrorAsync(async () => {
                t.pass('producer is called');
                throw THROWN_EXPECTED;
            });
            t.fail('unreachable here');
        },
        {
            instanceOf: TypeError,
            message: 'The thrown value is not an instance of `Error` of the current realm.',
        },
    );

    t.is(actual.cause, THROWN_EXPECTED, 'should set Error.cause');
});
