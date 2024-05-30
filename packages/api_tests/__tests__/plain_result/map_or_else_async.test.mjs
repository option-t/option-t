import test from 'ava';

import { mapOrElseAsyncForResult } from 'option-t/plain_result/map_or_else_async';
import { createOk, createErr } from 'option-t/plain_result/result';

const PLAN_COUNT = 3;

test('Ok<T>', async (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createOk(INITIAL);
    const result = mapOrElseAsyncForResult(
        input,
        async (_e) => {
            t.fail(`don't enter this path`);
        },
        async (v) => {
            t.is(v, INITIAL, 'the argument');
            return EXPECTED;
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, 3, 'the return value');
});

test('Err<E>', async (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createErr(INITIAL);
    const result = mapOrElseAsyncForResult(
        input,
        async (e) => {
            t.is(e, INITIAL, 'the argument');
            return EXPECTED;
        },
        async (_v) => {
            t.fail(`don't enter this path`);
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, 3, 'the return value');
});
