import test from 'ava';
import * as assert from 'node:assert/strict';
import { tryCatchIntoResultWithEnsureErrorAsync } from 'option-t/PlainResult/tryCatchAsync';

const OriginalTypeErrorCtor = globalThis.TypeError;

class MissingCauseTypeError extends OriginalTypeErrorCtor {
    constructor(...args) {
        super(...args);
        delete this.cause;
        assert.ok(!this.cause, '.cause is still on this!');
    }
}

// We would like to test if the host does not have support `Error.cause`.
// FIXME(#1833): We should remove this test.
test.beforeEach(() => {
    globalThis.TypeError = MissingCauseTypeError;
});

test.afterEach(() => {
    globalThis.TypeError = OriginalTypeErrorCtor;
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
            message: `The thrown value is not an \`Error\` instance.`,
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
            message: `The thrown value is not an \`Error\` instance.`,
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
            message: `The thrown value is not an \`Error\` instance.`,
        }
    );

    t.is(actual.cause, THROWN_EXPECTED, 'should set Error.cause');
});
