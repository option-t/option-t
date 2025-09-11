import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { mapOrForResult } from 'option-t/plain_result/map_or';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr } from 'option-t/plain_result/result';

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

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.mapOrForResult, mapOrForResult);
    t.is(PlainResultRoot.ResultOperator.mapOr, mapOrForResult);
    t.is(PlainResultNamespace.mapOr, mapOrForResult);
    t.is(PlainResultCompatV54.mapOrForResult, mapOrForResult);
});
