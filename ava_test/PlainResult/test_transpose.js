import test from 'ava';

import { createSome, createNone, isSome, isNone } from '../../__dist/cjs/PlainOption/Option';
import { createOk, createErr, isOk, isErr } from '../../__dist/cjs/PlainResult/Result';
import { transposeForResult } from '../../__dist/cjs/PlainResult/transpose';

test('input is Ok<Some<T>>', (t) => {
    const val = Symbol('val');
    const inner = createSome(val);
    const input = createOk(inner);
    const actual = transposeForResult(input);

    t.true(isSome(actual), 'the outer should Some<Ok<T>>');
    t.true(isOk(actual.val), 'the inner should Ok<T>');
    t.is(actual.val.val, val, 'the inner\'s inner should T');
    t.not(actual.val, input, 'the inner should be different from the input');
});

test('input is Ok<None>', (t) => {
    const inner = createNone();
    const input = createOk(inner);
    const actual = transposeForResult(input);

    t.true(isNone(actual), 'the outer should None');
    t.not(actual, inner, 'the outer  should be different from the input');
});

test('input is Err<E>', (t) => {
    const inner = Symbol('err');
    const input = createErr(inner);
    const actual = transposeForResult(input);

    t.true(isSome(actual), 'the outer should Some<Err<E>>');
    t.true(isErr(actual.val), 'the inner should Err<E>');
    t.is(actual.val.err, inner, 'the inner\'s inner should E');
    t.not(actual.val, input, 'the inner should be different from the input');
});
