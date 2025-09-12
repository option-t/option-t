import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { mapErrForResult } from 'option-t/plain_result/map_err';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';

const VALUE_T = Math.random();
const ERROR_E = new Error('e');
const ERROR_F = new Error('f');

test('input is Ok(T)', (t) => {
    t.plan(3);

    const input = createOk(VALUE_T);
    const actual = mapErrForResult(input, (_) => {
        t.pass(false);
        return ERROR_F;
    });

    t.is(actual, input);
    t.true(isOk(actual));
    t.is(unwrapOk(actual), VALUE_T);
});

test('input is Err(E)', (t) => {
    t.plan(4);

    const input = createErr(ERROR_E);
    const actual = mapErrForResult(input, (e) => {
        t.is(e, ERROR_E);
        return ERROR_F;
    });

    t.not(actual, input);
    t.true(isErr(actual));
    t.is(unwrapErr(actual), ERROR_F);
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.mapErr, mapErrForResult);
    t.is(PlainResultNamespace.mapErr, mapErrForResult);
    t.is(PlainResultCompatV54.mapErrForResult, mapErrForResult);
});
