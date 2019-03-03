import test from 'ava';

import { createSome, createNone, isSome, isNone } from '../../__dist/cjs/PlainOption/Option';
import { transposeForOption } from '../../__dist/cjs/PlainOption/transpose';
import { createOk, createErr, isOk, isErr } from '../../__dist/cjs/PlainResult/Result';

test('input is Some<Ok<T>>', (t) => {
    const val = Symbol('val');
    const inner = createOk(val);
    const input = createSome(inner);
    const actual = transposeForOption(input);

    t.true(isOk(actual), 'the outer should be Ok<Some<T>>');
    t.true(isSome(actual.val), 'the inner should be Some<T>');
    t.is(actual.val.val, val, 'the inner\'s inner should T');
    t.not(actual, input, 'the outer should be different from the input');
    t.not(actual, inner, 'the outer should be different from the input\'s inner');
    t.not(actual.val, input, 'the inner should be different from the input');
    t.not(actual.val, inner, 'the inner should be different from the input\' inner');
});

test('input is Some<Err<E>>', (t) => {
    const err = Symbol('err');
    const inner = createErr(err);
    const input = createSome(inner);
    const actual = transposeForOption(input);

    t.true(isErr(actual), 'the outer should Err<E>');
    t.is(actual.err, err, 'the inner should be E');
    t.not(actual, inner, 'the outer should be different from the input\'s inner');
});

test('input is None', (t) => {
    const input = createNone();
    const actual = transposeForOption(input);

    t.true(isOk(actual), 'the outer should Ok(None)');
    t.true(isNone(actual.val), 'the inner should be None');
    t.not(actual.val, input, 'the inner should be different from the input');
});
