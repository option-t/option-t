import { webcrypto } from 'node:crypto';
import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { unwrapOrThrowErrorForResult } from 'option-t/PlainResult/unwrapOrThrowError';

test('input is Ok(T)', (t) => {
    const VALUE_T = Math.random();

    const input = createOk(VALUE_T);
    let actual;
    t.notThrows(() => {
        actual = unwrapOrThrowErrorForResult(input);
    });
    t.is(actual, VALUE_T);
});

test('input is Err(Error)', (t) => {
    const ERROR_E = new Error();

    const input = createErr(ERROR_E);
    t.throws(
        () => {
            unwrapOrThrowErrorForResult(input);
        },
        {
            is: ERROR_E,
        },
    );
});

test('input is Err, but the contained value is not Error', (t) => {
    t.plan(2);

    const ERROR_E = webcrypto.randomUUID();

    const input = createErr(ERROR_E);
    const thrown = t.throws(
        () => {
            unwrapOrThrowErrorForResult(input);
        },
        {
            instanceOf: TypeError,
            message: `The contained E should be \`Error\` instance.`,
        },
    );

    t.is(thrown.cause, ERROR_E, `should be set Error.cause`);
});
