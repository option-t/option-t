import test from 'ava';

import { MaybeOperator } from 'option-t/maybe';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { transposeMaybeToResult } from 'option-t/maybe/transpose';
import {
    createErr,
    createOk,
    isOk,
    unwrapOk,
    isErr,
    unwrapErr,
} from 'option-t/plain_result/result';

test('input is null -> Ok<null>', (t) => {
    const actual = transposeMaybeToResult(null);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), null);
});

test('input is undefined -> Ok<undefined>', (t) => {
    const actual = transposeMaybeToResult(undefined);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), undefined);
});

test('input is Ok<T> -> Ok<T>', (t) => {
    const INPUT = crypto.randomUUID();
    const input = createOk(INPUT);
    const actual = transposeMaybeToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), INPUT);
});

test('input is Err<E> -> Err<E>', (t) => {
    const INPUT = crypto.randomUUID();
    const input = createErr(INPUT);
    const actual = transposeMaybeToResult(input);
    t.is(isErr(actual), true);
    t.is(unwrapErr(actual), INPUT);
});

test('input is Ok<null> -> Ok<null>', (t) => {
    const input = createOk(null);
    const actual = transposeMaybeToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), null);
});

test('input is Ok<undefined> -> Ok<undefined>', (t) => {
    const input = createOk(undefined);
    const actual = transposeMaybeToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), undefined);
});

test(`exported alias' identity check`, (t) => {
    t.is(MaybeOperator.transposeToResult, transposeMaybeToResult);
    t.is(MaybeNamespace.transposeToResult, transposeMaybeToResult);
});
