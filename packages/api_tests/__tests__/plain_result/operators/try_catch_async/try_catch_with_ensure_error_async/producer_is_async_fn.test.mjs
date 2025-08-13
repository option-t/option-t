import { webcrypto } from 'node:crypto';
import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { tryCatchIntoResultWithEnsureErrorAsync } from 'option-t/plain_result/try_catch_async';
import { getCrossRealmErrorConstructor } from '../../../../cross_realm_error_helper.mjs';

test('output=Ok(T): producer is async fn', async (t) => {
    t.plan(4);

    // arrange
    const EXPECTED = webcrypto.randomUUID();

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(async () => {
        t.pass();
        return EXPECTED;
    });
    t.true(result instanceof Promise, 'result should be Promise');
    const actualResult = await result;

    // assert
    t.true(isOk(actualResult), 'should be Ok(T)');
    {
        const actual = unwrapOk(actualResult);
        t.is(actual, EXPECTED, 'should contain the expect inner value');
    }
});

test('output=Err(Error): producer is async fn', async (t) => {
    t.plan(4);

    // arrange
    const EXPECTED = new Error(Math.random());
    Object.freeze(EXPECTED); // prevent to modify this object.

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(async () => {
        t.pass();
        throw EXPECTED;
    });
    t.true(result instanceof Promise, 'result should be Promise');
    const actualResult = await result;

    // assert
    t.true(isErr(actualResult), 'should be Err(E)');
    {
        const actual = unwrapErr(actualResult);
        t.is(actual, EXPECTED, 'should keep the thrown as the expect inner value directly');
    }
});

test('if producer is async function and throw a not-Error-instance value', async (t) => {
    t.plan(8);

    // arrange
    const EXPECT_THROWN = webcrypto.randomUUID();

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(async () => {
        t.pass('producer is called');
        throw EXPECT_THROWN;
    });
    t.true(result instanceof Promise, 'result should be Promise');
    const actualResult = await result;

    // assert
    t.true(isErr(actualResult), 'should be Err(E)');
    {
        const actual = unwrapErr(actualResult);
        t.assert(actual instanceof Error, `should be the current realm's Error instance`);
        t.not(actual, EXPECT_THROWN, 'should not be the same instance with the thrown');

        t.is(actual.name, 'UnknownCausalError', '.name should be expected');
        t.is(
            actual.message,
            'This `.cause` is not an instance of `Error` of the current realm.',
            '.message should be expected',
        );
        t.is(actual.cause, EXPECT_THROWN, '.cause should hold the expect inner value');
    }
});

test('if producer is async function and throw a instance value from cross-realm `Error` constructor', async (t) => {
    t.plan(11);
    const CurrentRealmErrorCtor = globalThis.Error;

    // arrange
    const CrossRealmErrorCtor = getCrossRealmErrorConstructor(t);
    const EXPECT_THROWN = new CrossRealmErrorCtor(webcrypto.randomUUID());
    t.false(
        EXPECT_THROWN instanceof CurrentRealmErrorCtor,
        `the thrown error should not be the instance of current realm's Error consturctor`,
    );
    Object.freeze(EXPECT_THROWN); // prevent to modify this object.

    const result = tryCatchIntoResultWithEnsureErrorAsync(async () => {
        t.pass('producer is called');
        throw EXPECT_THROWN;
    });
    t.true(result instanceof Promise, 'result should be Promise');
    const actualResult = await result;

    // assert
    t.true(isErr(actualResult), 'should be Err(E)');
    {
        const actual = unwrapErr(actualResult);
        t.assert(
            actual instanceof CurrentRealmErrorCtor,
            `should be the current realm's Error instance`,
        );
        t.not(actual, EXPECT_THROWN, 'should not be the same instance with the thrown');

        t.is(actual.name, 'UnknownCausalError', '.name should be expected');
        t.is(
            actual.message,
            'This `.cause` is not an instance of `Error` of the current realm.',
            '.message should be expected',
        );
        t.is(actual.cause, EXPECT_THROWN, '.cause should hold the expect inner value');
    }
});
