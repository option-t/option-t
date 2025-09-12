import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';
import { transposeResultToUndefinable } from 'option-t/plain_result/transpose';

test('input is Ok<T>, the result should be Ok(T)', (t) => {
    const val = Symbol('val');
    const input = createOk(val);
    const actual = transposeResultToUndefinable(input);
    t.true(isOk(actual), 'the inner should Ok<T>');
    t.is(unwrapOk(actual), val, "the inner's inner should T");
});

test('input is Ok<null>, the result should be undefined', (t) => {
    const input = createOk(undefined);
    const actual = transposeResultToUndefinable(input);
    t.is(actual, undefined);
});

test('input is Err<E>, the result should be Err(e)', (t) => {
    const inner = Symbol('err');
    const input = createErr(inner);
    const actual = transposeResultToUndefinable(input);

    t.true(isErr(actual), 'the actual should Err<E>');
    t.is(unwrapErr(actual), inner, "the actual's inner should E");
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.transposeToUndefinable, transposeResultToUndefinable);
    t.is(PlainResultNamespace.transposeToUndefinable, transposeResultToUndefinable);
    t.is(PlainResultCompatV54.transposeResultToUndefinable, transposeResultToUndefinable);
});
