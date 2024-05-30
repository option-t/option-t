import { webcrypto } from 'node:crypto';
import test from 'ava';

import { createOk, createErr } from 'option-t/plain_result/result';
import { unwrapOrThrowWithEnsureErrorForResult } from 'option-t/plain_result/unwrap_or_throw_error';

test('input is Ok(T)', (t) => {
    const VALUE_T = Math.random();

    const input = createOk(VALUE_T);
    let actual;
    t.notThrows(() => {
        actual = unwrapOrThrowWithEnsureErrorForResult(input);
    });
    t.is(actual, VALUE_T);
});

test('input is Err(Error)', (t) => {
    const ERROR_E = new Error();

    const input = createErr(ERROR_E);
    t.throws(
        () => {
            unwrapOrThrowWithEnsureErrorForResult(input);
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
            unwrapOrThrowWithEnsureErrorForResult(input);
        },
        {
            instanceOf: TypeError,
            message: `The contained E should be \`Error\` instance.`,
        },
    );

    t.is(thrown.cause, ERROR_E, `should be set Error.cause`);
});
