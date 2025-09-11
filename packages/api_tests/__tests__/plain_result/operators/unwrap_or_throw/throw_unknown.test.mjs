import test from 'ava';

import { unwrapOrThrowUnknownDirectlyForResult } from 'option-t/plain_result/deprecated/unwrap_or_throw_unknown';
import { createOk, createErr } from 'option-t/plain_result/result';

test('input is Ok(T)', (t) => {
    const VALUE_T = Math.random();

    const input = createOk(VALUE_T);
    let actual;
    t.notThrows(() => {
        actual = unwrapOrThrowUnknownDirectlyForResult(input);
    });
    t.is(actual, VALUE_T);
});

test('input is Err(Error)', (t) => {
    const ERROR_E = new Error();

    const input = createErr(ERROR_E);
    t.throws(
        () => {
            unwrapOrThrowUnknownDirectlyForResult(input);
        },
        {
            is: ERROR_E,
        },
    );
});

test('input is Err(not Error instance)', (t) => {
    t.plan(1);
    const ERROR_E = Math.random();

    const input = createErr(ERROR_E);
    try {
        unwrapOrThrowUnknownDirectlyForResult(input);
    } catch (e) {
        t.is(e, ERROR_E);
    }
});

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
