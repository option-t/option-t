import { webcrypto } from 'node:crypto';
import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { tryCatchIntoResultWithEnsureError } from 'option-t/plain_result/try_catch';
import { getCrossRealmErrorConstructor } from '../../../cross_realm_error_helper.mjs';

test('output=Ok(T)', (t) => {
    t.plan(3);

    // arrange
    const EXPECTED = webcrypto.randomUUID();

    // act
    const actualResult = tryCatchIntoResultWithEnsureError(() => {
        t.pass();
        return EXPECTED;
    });

    // assert
    t.true(isOk(actualResult), 'should be Ok(T)');
    {
        const actual = unwrapOk(actualResult);
        t.is(actual, EXPECTED, 'should contain the expect inner value');
    }
});

test('output=Err(Error)', (t) => {
    t.plan(3);

    // arrange
    const EXPECTED = new Error(webcrypto.randomUUID());
    Object.freeze(EXPECTED); // prevent to modify this object.

    // act
    const actualResult = tryCatchIntoResultWithEnsureError(() => {
        t.pass();
        throw EXPECTED;
    });

    // assert
    t.true(isErr(actualResult), 'should be Err(E)');
    {
        const actual = unwrapErr(actualResult);
        t.is(actual, EXPECTED, 'should keep the thrown as the expect inner value directly');
    }
});

test('If producer throw non-Error-instance value', (t) => {
    t.plan(7);

    // arrange
    const EXPECT_THROWN = webcrypto.randomUUID();

    // act
    const actualResult = tryCatchIntoResultWithEnsureError(() => {
        t.pass();
        throw EXPECT_THROWN;
    });

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

test('If producer throw the instance value of cross-realm `Error` constructor', (t) => {
    t.plan(10);
    const CurrentRealmErrorCtor = globalThis.Error;

    // arrange
    const CrossRealmErrorCtor = getCrossRealmErrorConstructor(t);
    const EXPECT_THROWN = new CrossRealmErrorCtor(Math.random());
    t.false(
        EXPECT_THROWN instanceof CurrentRealmErrorCtor,
        `the thrown error should not be the instance of current realm's Error consturctor`,
    );
    Object.freeze(EXPECT_THROWN); // prevent to modify this object.

    // act
    const actualResult = tryCatchIntoResultWithEnsureError(() => {
        t.pass();
        throw EXPECT_THROWN;
    });

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
