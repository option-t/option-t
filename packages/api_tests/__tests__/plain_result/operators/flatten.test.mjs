import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { flattenForResult } from 'option-t/plain_result/flatten';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';

test('input is Ok(Ok(T))', (t) => {
    const VALUE_T = Symbol('value');
    const inner = createOk(VALUE_T);

    const input = createOk(inner);
    const actual = flattenForResult(input);

    t.true(isOk(actual), 'should be Ok');
    t.is(unwrapOk(actual), VALUE_T, 'should be the wrapped value');
});

test('input is Ok(Err(E))', (t) => {
    const VALUE_E = Symbol('error');
    const inner = createErr(VALUE_E);

    const input = createOk(inner);
    const actual = flattenForResult(input);

    t.true(isErr(actual), 'should be Err');
    t.is(unwrapErr(actual), VALUE_E, 'should be the wrapped error');
});

test('input is Err(E)', (t) => {
    const VALUE_E = Symbol('error');
    const input = createErr(VALUE_E);
    const actual = flattenForResult(input);

    t.true(isErr(actual), 'should be Err');
    t.is(unwrapErr(actual), VALUE_E, 'should be the wrapped error');
});

test('this should remove only one nest level', (t) => {
    const VALUE_T = Symbol('value');
    const input0 = createOk(VALUE_T);
    const input1 = createOk(input0);
    const input2 = createOk(input1);

    const actual = flattenForResult(input2);
    t.is(actual, input1, `don't unwrap the input recursively`);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.ResultOperator.flatten, flattenForResult);
    t.is(PlainResultNamespace.flatten, flattenForResult);
    t.is(PlainResultCompatV54.flattenForResult, flattenForResult);
});
