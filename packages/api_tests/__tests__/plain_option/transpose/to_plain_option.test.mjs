import test from 'ava';

import { createSome, createNone, isSome, isNone } from 'option-t/plain_option/option';
import { transposeResultToOption } from 'option-t/plain_option/transpose';
import { createOk, createErr, isOk, isErr } from 'option-t/plain_result/result';

test('input is Ok<Some<T>>, the result should be Some(Ok(v))', (t) => {
    const val = Symbol('val');
    const inner = createSome(val);
    const input = createOk(inner);
    const actual = transposeResultToOption(input);

    const actualInner = actual.val;

    t.true(isSome(actual), 'the outer should Some<Ok<T>>');
    t.true(isOk(actualInner), 'the inner should Ok<T>');
    t.is(actualInner.val, val, "the inner's inner should T");
    t.not(actual, input, 'the outer should be different from the input');
    t.not(actual, inner, "the outer should be different from the input's inner");
    t.not(actualInner, input, 'the inner should be different from the input');
    t.not(actualInner, inner, "the inner should be different from the input' inner");
});

test('input is Ok<None>, the result should be None', (t) => {
    const inner = createNone();
    const input = createOk(inner);
    const actual = transposeResultToOption(input);

    t.true(isNone(actual), 'the outer should None');
    t.not(actual, inner, 'the outer  should be different from the input');
});

test('input is Err<E>, the result should be Some(Err(e))', (t) => {
    const inner = Symbol('err');
    const input = createErr(inner);
    const actual = transposeResultToOption(input);

    const actualInner = actual.val;

    t.true(isSome(actual), 'the outer should Some<Err<E>>');
    t.true(isErr(actualInner), 'the inner should Err<E>');
    t.is(actualInner.err, inner, "the inner's inner should E");
    t.not(actualInner, input, 'the inner should be different from the input');
});
