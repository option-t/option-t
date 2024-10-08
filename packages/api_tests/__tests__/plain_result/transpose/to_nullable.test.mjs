import test from 'ava';

import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';
import { transposeResultToNullable } from 'option-t/plain_result/transpose';

test('input is Ok<T>, the result should be Ok(T)', (t) => {
    const val = Symbol('val');
    const input = createOk(val);
    const actual = transposeResultToNullable(input);
    t.true(isOk(actual), 'the inner should Ok<T>');
    t.is(unwrapOk(actual), val, "the inner's inner should T");
});

test('input is Ok<null>, the result should be null', (t) => {
    const input = createOk(null);
    const actual = transposeResultToNullable(input);
    t.is(actual, null);
});

test('input is Err<E>, the result should be Err(e)', (t) => {
    const inner = Symbol('err');
    const input = createErr(inner);
    const actual = transposeResultToNullable(input);

    t.true(isErr(actual), 'the actual should Err<E>');
    t.is(unwrapErr(actual), inner, "the actual's inner should E");
});
