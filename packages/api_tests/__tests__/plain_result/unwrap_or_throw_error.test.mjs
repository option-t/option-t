import test from 'ava';
import { webcrypto } from 'node:crypto';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { unwrapOrThrowErrorFromResult } from 'option-t/PlainResult/unwrapOrThrowError';

test('input is Ok(T)', (t) => {
    const VALUE_T = Math.random();

    const input = createOk(VALUE_T);
    let actual;
    t.notThrows(() => {
        actual = unwrapOrThrowErrorFromResult(input);
    });
    t.is(actual, VALUE_T);
});

test('input is Err(Error)', (t) => {
    const ERROR_E = new Error();

    const input = createErr(ERROR_E);
    t.throws(
        () => {
            unwrapOrThrowErrorFromResult(input);
        },
        {
            is: ERROR_E,
        }
    );
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
            message: `The contained E should be \`Error\` instance. The actual is \`${String(
                ERROR_E
            )}\``,
        }
    );

    t.is(thrown.cause, ERROR_E, `should be set Error.cause`);
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

test('input is Err, but the contained value is not Error and cannot stringify', (t) => {
    t.plan(4);

    const THROWN_IN_TO_STRING = new Error('cannot stringify!');
    const ERROR_E = new CannotStringifyObject(THROWN_IN_TO_STRING);

    const input = createErr(ERROR_E);
    const thrown = t.throws(
        () => {
            unwrapOrThrowErrorFromResult(input);
        },
        {
            instanceOf: TypeError,
            message: `The contained E should be \`Error\` instance.`,
        }
    );

    const thrownCause = thrown.cause;
    t.is(thrownCause instanceof TypeError, true, `should be set Error.cause`);
    t.is(
        thrownCause.message,
        `fail toString()`,
        'should be set proper error message for Error.cause'
    );
    t.is(thrownCause.cause, THROWN_IN_TO_STRING, 'Error.cause.cause');
});
