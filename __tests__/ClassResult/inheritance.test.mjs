import test from 'ava';

import { createOk, createErr, ResultBase, Ok, Err } from '../../__dist/esm/Result.mjs';

test('Ok<T> should be instanceof `ResultBase`', (t) => {
    const result = createOk(1);
    t.true(result instanceof ResultBase);
});

test('Err<E> should be instanceof `ResultBase`', (t) => {
    const result = createErr(2);
    t.true(result instanceof ResultBase);
});

test('Ok<T> by Constructor should be instanceof `ResultBase`', (t) => {
    const result = new Ok(1);
    t.true(result instanceof ResultBase);
});

test('Err<E> by Constructor should be instanceof `ResultBase`', (t) => {
    const result = new Err(2);
    t.true(result instanceof ResultBase);
});

test('Ok<T> by Constructor should NOT be instanceof `Ok`', (t) => {
    const result = new Ok(1);
    t.false(result instanceof Ok);
});

test('Err<E> by Constructor should NOT be instanceof `Err`', (t) => {
    const result = new Err(2);
    t.false(result instanceof Err);
});

test('prototype should be frozen', (t) => {
    t.true(Object.isFrozen(ResultBase.prototype));
});
