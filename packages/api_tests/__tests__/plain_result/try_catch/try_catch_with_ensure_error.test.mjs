import { webcrypto } from 'node:crypto';
import test from 'ava';

import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/PlainResult/Result';
import { tryCatchIntoResultWithEnsureError } from 'option-t/PlainResult/tryCatch';

test('output=Ok(T)', (t) => {
    t.plan(3);

    const EXPECTED = Math.random();
    const actual = tryCatchIntoResultWithEnsureError(() => {
        t.pass();
        return EXPECTED;
    });

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(Error)', (t) => {
    t.plan(3);

    const EXPECTED = new Error(Math.random());
    const actual = tryCatchIntoResultWithEnsureError(() => {
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
            tryCatchIntoResultWithEnsureError(() => {
                t.pass();
                throw EXPECT_THROWN;
            });
        },
        {
            instanceOf: TypeError,
            message: `The thrown value is not an \`Error\` instance.`,
        },
    );

    t.is(actual.cause, EXPECT_THROWN, `should set Error.cause`);
});
