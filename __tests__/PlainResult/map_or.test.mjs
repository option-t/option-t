import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/PlainResult/Result.mjs';

import { mapOrForResult } from '../../__dist/esm/PlainResult/mapOr.mjs';

test('Ok<T>', (t) => {
    const INITIAL = 1;
    const NOT_EXPECTED = 2;
    const EXPECTED = 3;

    t.plan(2);

    const input = createOk(INITIAL);
    const r = mapOrForResult(input, NOT_EXPECTED, (v) => {
        t.is(v, INITIAL, 'the argument');
        return EXPECTED;
    });

    t.is(r, EXPECTED, 'the return value');
});

test('Err<E>', (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(1);

    const input = createErr(INITIAL);
    const r = mapOrForResult(input, EXPECTED, (_v) => {
        t.fail(`don't enter this path`);
    });

    t.is(r, EXPECTED, 'the return value');
});
