import test from 'ava';

import { createOk, createErr, ResultBase } from '../../__dist/esm/Result.mjs';

test('Ok<T> should be instanceof `ResultBase`', (t) => {
    const result = createOk(1);
    t.true(result instanceof ResultBase);
});

test('Err<E> should be instanceof `ResultBase`', (t) => {
    const result = createErr(2);
    t.true(result instanceof ResultBase);
});
