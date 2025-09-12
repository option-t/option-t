import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { tryCatchIntoResultWithEnsureErrorAsync } from 'option-t/plain_result/try_catch_async';
import { getCrossRealmErrorConstructor } from '../../../../cross_realm_error_helper.mjs';

test('output=Ok(T): producer is normal fn', async (t) => {
    t.plan(4);

    // arrange
    const EXPECTED = Math.random();

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass();
        return Promise.resolve(EXPECTED);
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

test('output=Err(Error): producer is normal fn and reject a Promise with Error', async (t) => {
    t.plan(4);

    // arrange
    const EXPECTED = new Error(Math.random());
    Object.freeze(EXPECTED); // prevent to modify this object.

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass();
        return Promise.reject(EXPECTED);
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

test('output=Err(Error): producer is normal fn but throw an error before return any Promise', async (t) => {
    t.plan(4);

    // arrange
    const EXPECTED = new Error(Math.random());
    Object.freeze(EXPECTED); // prevent to modify this object.

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
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

test('if producer is normal function and reject a Promise with not-Error-instance value', async (t) => {
    t.plan(8);

    // arrange
    const THROWN_EXPECTED = Math.random();

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass('producer is called');
        return Promise.reject(THROWN_EXPECTED);
    });
    t.true(result instanceof Promise, 'result should be Promise');
    const actualResult = await result;

    // assert
    t.true(isErr(actualResult), 'should be Err(E)');
    {
        const actual = unwrapErr(actualResult);
        t.assert(actual instanceof Error, `should be the current realm's Error instance`);
        t.not(actual, THROWN_EXPECTED, 'should not be the same instance with the thrown');

        t.is(actual.name, 'UnknownCausalError', '.name should be expected');
        t.is(
            actual.message,
            'This `.cause` is not an instance of `Error` of the current realm.',
            '.message should be expected',
        );
        t.is(actual.cause, THROWN_EXPECTED, '.cause should hold the expect inner value');
    }
});

test('if producer is normal function and reject a Promise with a instance value from cross-realm `Error` constructor', async (t) => {
    t.plan(11);
    const CurrentRealmErrorCtor = globalThis.Error;

    // arrange
    const CrossRealmErrorCtor = getCrossRealmErrorConstructor(t);
    const THROWN_EXPECTED = new CrossRealmErrorCtor(Math.random());
    t.false(
        THROWN_EXPECTED instanceof CurrentRealmErrorCtor,
        `the thrown error should not be the instance of current realm's Error consturctor`,
    );
    Object.freeze(THROWN_EXPECTED); // prevent to modify this object.

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass('producer is called');
        return Promise.reject(THROWN_EXPECTED);
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
        t.not(actual, THROWN_EXPECTED, 'should not be the same instance with the thrown');

        t.is(actual.name, 'UnknownCausalError', '.name should be expected');
        t.is(
            actual.message,
            'This `.cause` is not an instance of `Error` of the current realm.',
            '.message should be expected',
        );
        t.is(actual.cause, THROWN_EXPECTED, '.cause should hold the expect inner value');
    }
});

test('if producer is normal function and throw a not-Error-instance value before return any `Promise`', async (t) => {
    t.plan(8);

    // arrange
    const THROWN_EXPECTED = Math.random();

    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass('producer is called');
        throw THROWN_EXPECTED;
    });
    t.true(result instanceof Promise, 'result should be Promise');
    const actualResult = await result;

    // assert
    t.true(isErr(actualResult), 'should be Err(E)');
    {
        const actual = unwrapErr(actualResult);
        t.assert(actual instanceof Error, `should be the current realm's Error instance`);
        t.not(actual, THROWN_EXPECTED, 'should not be the same instance with the thrown');

        t.is(actual.name, 'UnknownCausalError', '.name should be expected');
        t.is(
            actual.message,
            'This `.cause` is not an instance of `Error` of the current realm.',
            '.message should be expected',
        );
        t.is(actual.cause, THROWN_EXPECTED, '.cause should hold the expect inner value');
    }
});

test('if producer is normal function and throw a instance value from cross-realm `Error` constructor before return any `Promise`', async (t) => {
    t.plan(11);
    const CurrentRealmErrorCtor = globalThis.Error;

    // arrange
    const CrossRealmErrorCtor = getCrossRealmErrorConstructor(t);
    const THROWN_EXPECTED = new CrossRealmErrorCtor(Math.random());
    t.false(
        THROWN_EXPECTED instanceof CurrentRealmErrorCtor,
        `the thrown error should not be the instance of current realm's Error consturctor`,
    );
    Object.freeze(THROWN_EXPECTED); // prevent to modify this object.

    // act
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass('producer is called');
        throw THROWN_EXPECTED;
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
        t.not(actual, THROWN_EXPECTED, 'should not be the same instance with the thrown');

        t.is(actual.name, 'UnknownCausalError', '.name should be expected');
        t.is(
            actual.message,
            'This `.cause` is not an instance of `Error` of the current realm.',
            '.message should be expected',
        );
        t.is(actual.cause, THROWN_EXPECTED, '.cause should hold the expect inner value');
    }
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.tryCatchIntoWithEnsureErrorAsync, tryCatchIntoResultWithEnsureErrorAsync);
    t.is(
        PlainResultNamespace.tryCatchIntoWithEnsureErrorAsync,
        tryCatchIntoResultWithEnsureErrorAsync,
    );
    t.is(
        PlainResultCompatV54.tryCatchIntoResultWithEnsureErrorAsync,
        tryCatchIntoResultWithEnsureErrorAsync,
    );
});
