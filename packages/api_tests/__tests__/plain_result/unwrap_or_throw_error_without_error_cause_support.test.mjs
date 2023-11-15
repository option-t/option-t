import * as assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import test from 'ava';

import { createErr } from 'option-t/PlainResult/Result';
import { unwrapOrThrowErrorFromResult } from 'option-t/PlainResult/unwrapOrThrowError';

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

test('input is Err, but the contained value is not Error', (t) => {
    t.plan(2);

    const ERROR_E = webcrypto.randomUUID();

    const input = createErr(ERROR_E);
    const thrown = t.throws(
        () => {
            unwrapOrThrowErrorFromResult(input);
        },
        {
            instanceOf: TypeError,
            message: `The contained E should be \`Error\` instance.`,
        },
    );

    t.is(thrown.cause, ERROR_E, `should be set Error.cause`);
});
