import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { mapForResult } from 'option-t/plain_result/map';
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
const VALUE_U = Math.random();
const ERROR_E = new Error('e');

test('input is Ok(T), callback return T', (t) => {
    t.plan(4);

    const input = createOk(VALUE_T);
    const actual = mapForResult(input, (v) => {
        t.is(v, VALUE_T);
        return VALUE_U;
    });

    t.not(actual, input);
    t.true(isOk(actual));
    t.is(unwrapOk(actual), VALUE_U);
});

test('input is Err(E)', (t) => {
    t.plan(3);

    const input = createErr(ERROR_E);
    const actual = mapForResult(input, (_) => {
        t.pass(false);
        return VALUE_T;
    });

    t.is(actual, input);
    t.true(isErr(actual));
    t.is(unwrapErr(actual), ERROR_E);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.mapForResult, mapForResult);
    t.is(PlainResultRoot.ResultOperator.map, mapForResult);
    t.is(PlainResultNamespace.map, mapForResult);
    t.is(PlainResultCompatV54.mapForResult, mapForResult);
});
