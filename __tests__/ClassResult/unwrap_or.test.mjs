import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.mjs';

test('Ok<T>', (t) => {
    const EXPECTED = Symbol('EXPECTED');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    const result = createOk(EXPECTED);
    t.is(result.unwrapOr(NOT_EXPECTED), EXPECTED);
});

test('Err<E>', (t) => {
    const EXPECTED = Symbol('EXPECTED');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    const result = createErr(NOT_EXPECTED);
    t.is(result.unwrapOr(EXPECTED), EXPECTED);
});
