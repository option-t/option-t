import test from 'ava';

import { NullableOperator } from 'option-t/nullable';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { transposeNullableToResult } from 'option-t/nullable/transpose';
import {
    createErr,
    createOk,
    isOk,
    unwrapOk,
    isErr,
    unwrapErr,
} from 'option-t/plain_result/result';

test('input is null -> Ok<null>', (t) => {
    const input = null;
    const actual = transposeNullableToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), null);
});

test('input is Ok<T> -> Ok<T>', (t) => {
    const INPUT = crypto.randomUUID();
    const input = createOk(INPUT);
    const actual = transposeNullableToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), INPUT);
});

test('input is Err<E> -> Err(E)', (t) => {
    const INPUT = crypto.randomUUID();
    const input = createErr(INPUT);
    const actual = transposeNullableToResult(input);
    t.is(isErr(actual), true);
    t.is(unwrapErr(actual), INPUT);
});

test('input is Ok<null> -> Ok<null>', (t) => {
    const input = createOk(null);
    const actual = transposeNullableToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), null);
});

test(`exported alias' identity check`, (t) => {
    t.is(NullableOperator.transposeToResult, transposeNullableToResult);
    t.is(NullableNamespace.transposeToResult, transposeNullableToResult);
});
