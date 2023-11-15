import * as assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import test from 'ava';

import { tryCatchIntoResultWithEnsureError } from 'option-t/PlainResult/tryCatch';

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
