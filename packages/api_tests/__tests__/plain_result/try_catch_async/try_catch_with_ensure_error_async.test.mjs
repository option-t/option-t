import test from 'ava';

import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/PlainResult/Result';
import { tryCatchIntoResultWithEnsureErrorAsync } from 'option-t/PlainResult/tryCatchAsync';

test('output=Ok(T): producer is async fn', async (t) => {
    t.plan(4);

    const EXPECTED = Math.random();
    const result = tryCatchIntoResultWithEnsureErrorAsync(async () => {
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
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass();
        return Promise.resolve(EXPECTED);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(Error): producer is async fn', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());
    const result = tryCatchIntoResultWithEnsureErrorAsync(async () => {
        t.pass();
        throw EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(Error): producer is normal fn', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());
    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass();
        return Promise.reject(EXPECTED);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(Error): producer is normal fn but throw an error before return any Promise', async (t) => {
    t.plan(4);

    const EXPECTED = new Error(Math.random());

    const result = tryCatchIntoResultWithEnsureErrorAsync(() => {
        t.pass();
        throw EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('if producer is normal function and reject a Promise with not-Error-instance value', async (t) => {
    t.plan(3);

    const THROWN_EXPECTED = Math.random();

    const actual = await t.throwsAsync(
        async () => {
            await tryCatchIntoResultWithEnsureErrorAsync(() => {
                t.pass('producer is called');
                return Promise.reject(THROWN_EXPECTED);
            });
            t.fail('unreachable here');
        },
        {
            instanceOf: TypeError,
            message: `The thrown value is not an \`Error\` instance. The actual is \`${String(
                THROWN_EXPECTED
            )}\``,
        }
    );

    t.is(actual.cause, THROWN_EXPECTED, 'should set Error.cause');
});

test('if producer is normal function and throw a not-Error-instance value before return any `Promise`', async (t) => {
    t.plan(3);

    const THROWN_EXPECTED = Math.random();

    const actual = await t.throwsAsync(
        async () => {
            await tryCatchIntoResultWithEnsureErrorAsync(() => {
                t.pass('producer is called');
                throw THROWN_EXPECTED;
            });
            t.fail('unreachable here');
        },
        {
            instanceOf: TypeError,
            message: `The thrown value is not an \`Error\` instance. The actual is \`${String(
                THROWN_EXPECTED
            )}\``,
        }
    );

    t.is(actual.cause, THROWN_EXPECTED, 'should set Error.cause');
});

test('if producer is async function and throw a not-Error-instance value', async (t) => {
    t.plan(3);

    const THROWN_EXPECTED = Math.random();

    const actual = await t.throwsAsync(
        async () => {
            await tryCatchIntoResultWithEnsureErrorAsync(async () => {
                t.pass('producer is called');
                throw THROWN_EXPECTED;
            });
            t.fail('unreachable here');
        },
        {
            instanceOf: TypeError,
            message: `The thrown value is not an \`Error\` instance. The actual is \`${String(
                THROWN_EXPECTED
            )}\``,
        }
    );

    t.is(actual.cause, THROWN_EXPECTED, 'should set Error.cause');
});

class CannotStringifyObject {
    #error = null;
    constructor(e) {
        this.#error = e;
    }

    toString() {
        throw this.#error;
    }
}

test('if producer is async function and throw a not-Error-instance and cannot stringify value', async (t) => {
    t.plan(5);

    const THROWN_IN_TO_STRING = new Error('cannot stringify!');

    const THROWN_EXPECTED = new CannotStringifyObject(THROWN_IN_TO_STRING);
    const actual = await t.throwsAsync(
        async () => {
            await tryCatchIntoResultWithEnsureErrorAsync(async () => {
                t.pass('producer is called');
                throw THROWN_EXPECTED;
            });
            t.fail('unreachable here');
        },
        {
            instanceOf: TypeError,
            message: `The thrown value is not an \`Error\` instance.`,
        }
    );

    const thrownCause = actual.cause;
    t.is(thrownCause instanceof TypeError, true, `should be set Error.cause`);
    t.is(
        thrownCause.message,
        `fail toString()`,
        'should be set proper error message for Error.cause'
    );
    t.is(thrownCause.cause, THROWN_IN_TO_STRING, 'Error.cause.cause');
});
