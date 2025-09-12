import test from 'ava';

import {
    createErr,
    createOk,
    isOk,
    unwrapOk,
    isErr,
    unwrapErr,
} from 'option-t/plain_result/result';
import { UndefinableOperator } from 'option-t/undefinable';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { transposeUndefinableToResult } from 'option-t/undefinable/transpose';

test('input is undefined -> Ok<undefined>', (t) => {
    const input = undefined;
    const actual = transposeUndefinableToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), undefined);
});

test('input is Ok<T> -> Ok<T>', (t) => {
    const INPUT = crypto.randomUUID();
    const input = createOk(INPUT);
    const actual = transposeUndefinableToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), INPUT);
});

test('input is Err<E> -> Err<E>', (t) => {
    const INPUT = crypto.randomUUID();
    const input = createErr(INPUT);
    const actual = transposeUndefinableToResult(input);
    t.is(isErr(actual), true);
    t.is(unwrapErr(actual), INPUT);
});

test('input is Ok<undefined> -> Ok<undefined>', (t) => {
    const input = createOk(undefined);
    const actual = transposeUndefinableToResult(input);
    t.is(isOk(actual), true);
    t.is(unwrapOk(actual), undefined);
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableOperator.transposeToResult, transposeUndefinableToResult);
    t.is(UndefinableNamespace.transposeToResult, transposeUndefinableToResult);
});
