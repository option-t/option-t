import test from 'ava';

import { createClassicOk, createClassicErr } from '../../__dist/esm/ClassicResult/ClassicResult.js';

test('Ok<T>', (t) => {
    const EXPECTED = Symbol('EXPECTED');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    const result = createClassicOk(EXPECTED);
    t.is(result.unwrapOr(NOT_EXPECTED), EXPECTED);
});

test('Err<E>', (t) => {
    const EXPECTED = Symbol('EXPECTED');
    const NOT_EXPECTED = Symbol('NOT_EXPECTED');

    const result = createClassicErr(NOT_EXPECTED);
    t.is(result.unwrapOr(EXPECTED), EXPECTED);
});
