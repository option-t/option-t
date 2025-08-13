import { webcrypto } from 'node:crypto';
import test from 'ava';

import { tryCatchIntoResultWithAssertError } from 'option-t/plain_result/deprecated/try_catch_with_assert_error';
import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';
import { getCrossRealmErrorConstructor } from '../../../cross_realm_error_helper.mjs';

test('output=Ok(T)', (t) => {
    t.plan(3);

    const EXPECTED = Math.random();
    const actual = tryCatchIntoResultWithAssertError(() => {
        t.pass();
        return EXPECTED;
    });

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(Error)', (t) => {
    t.plan(3);

    const EXPECTED = new Error(Math.random());
    const actual = tryCatchIntoResultWithAssertError(() => {
        t.pass();
        throw EXPECTED;
    });

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('If producer throw non-Error-instance value', (t) => {
    t.plan(3);

    const EXPECT_THROWN = webcrypto.randomUUID();
    const actual = t.throws(
        () => {
            tryCatchIntoResultWithAssertError(() => {
                t.pass();
                throw EXPECT_THROWN;
            });
        },
        {
            instanceOf: TypeError,
            message: 'The thrown value is not an instance of `Error` of the current realm.',
        },
    );

    t.is(actual.cause, EXPECT_THROWN, `should set Error.cause`);
});

test('If producer throw the instance value from cross-realm `Error` constructor', (t) => {
    t.plan(6);
    const CurrentRealmErrorCtor = globalThis.Error;

    // arrange
    const CrossRealmErrorCtor = getCrossRealmErrorConstructor(t);
    const EXPECT_THROWN = new CrossRealmErrorCtor(Math.random());
    t.false(
        EXPECT_THROWN instanceof CurrentRealmErrorCtor,
        `the thrown error should not be the instance of current realm's Error consturctor`,
    );

    // act & assert
    const actual = t.throws(
        () => {
            tryCatchIntoResultWithAssertError(() => {
                t.pass();
                throw EXPECT_THROWN;
            });
        },
        {
            instanceOf: TypeError,
            message: 'The thrown value is not an instance of `Error` of the current realm.',
        },
    );

    // assert
    t.is(actual.cause, EXPECT_THROWN, `should set Error.cause`);
});
