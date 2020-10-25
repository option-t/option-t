import test from 'ava';

import { createSome, createNone, isSome, isNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { transposeForOption } from '../../__dist/esm/PlainOption/transpose.mjs';
import { createOk, createErr, isOk, isErr } from '../../__dist/esm/PlainResult/Result.mjs';

test('input is Some<Ok<T>>, the result should be Ok(Some(x))', (t) => {
    const val = Symbol('val');
    const inner = createOk(val);
    const input = createSome(inner);
    const actual = transposeForOption(input);

    const actualInner = actual.val;

    t.true(isOk(actual), 'the outer should be Ok<Some<T>>');
    t.true(isSome(actualInner), 'the inner should be Some<T>');
    t.is(actualInner.val, val, "the inner's inner should T");
    t.not(actual, input, 'the outer should be different from the input');
    t.not(actual, inner, "the outer should be different from the input's inner");
    t.not(actualInner, input, 'the inner should be different from the input');
    t.not(actualInner, inner, "the inner should be different from the input' inner");
});

test('input is Some<Err<E>>, the result should be Err(e)', (t) => {
    const err = Symbol('err');
    const inner = createErr(err);
    const input = createSome(inner);
    const actual = transposeForOption(input);

    t.true(isErr(actual), 'the outer should Err<E>');
    t.is(actual.err, err, 'the inner should be E');
    t.not(actual, inner, "the outer should be different from the input's inner");
});

test('input is None, the result should be Ok(None)', (t) => {
    const input = createNone();
    const actual = transposeForOption(input);

    const actualInner = actual.val;

    t.true(isOk(actual), 'the outer should Ok(None)');
    t.true(isNone(actualInner), 'the inner should be None');
    t.not(actualInner, input, 'the inner should be different from the input');
});
