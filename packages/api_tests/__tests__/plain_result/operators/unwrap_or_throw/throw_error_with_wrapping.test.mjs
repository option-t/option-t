import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr } from 'option-t/plain_result/result';
import { unwrapOrThrowForResult } from 'option-t/plain_result/unwrap_or_throw';

test('input is Ok(T)', (t) => {
    const VALUE_T = Math.random();

    const input = createOk(VALUE_T);
    let actual;
    t.notThrows(() => {
        actual = unwrapOrThrowForResult(input);
    });
    t.is(actual, VALUE_T);
});

test('input is Err(Error)', (t) => {
    const ERROR_E = new Error();

    const input = createErr(ERROR_E);
    const thrown = t.throws(
        () => {
            unwrapOrThrowForResult(input);
        },
        {
            instanceOf: Error,
            message: 'Carrying `E` in `Err` instead of throwing it directly. See `.cause`',
        },
    );

    t.not(thrown, ERROR_E, 'should generate a new error instance');
    t.is(thrown.name, 'CausalCarrierError', 'should be expected Error.name');
    t.is(thrown.cause, ERROR_E, '.cause should be set properly');
});

test('input is Err(non Error instance)', (t) => {
    const ERROR_E = Math.random();

    const input = createErr(ERROR_E);
    const thrown = t.throws(
        () => {
            unwrapOrThrowForResult(input);
        },
        {
            instanceOf: Error,
            message: 'Carrying `E` in `Err` instead of throwing it directly. See `.cause`',
        },
    );

    t.not(thrown, ERROR_E, 'should generate a new error instance');
    t.is(thrown.name, 'CausalCarrierError', 'should be expected Error.name');
    t.is(thrown.cause, ERROR_E, '.cause should be set properly');
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.ResultOperator.unwrapOrThrow, unwrapOrThrowForResult);
    t.is(PlainResultNamespace.unwrapOrThrow, unwrapOrThrowForResult);
    t.is(PlainResultCompatV54.unwrapOrThrowForResult, unwrapOrThrowForResult);
});
