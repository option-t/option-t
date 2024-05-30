import test from 'ava';

import { mapOrElseAsyncForOption } from 'option-t/plain_option/map_or_else_async';
import { createSome, createNone } from 'option-t/plain_option/option';

const PLAN_COUNT = 3;

test('Some<T>', async (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createSome(INITIAL);
    const result = mapOrElseAsyncForOption(
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

test('None', async (t) => {
    const EXPECTED = Math.random();

    t.plan(PLAN_COUNT);

    const input = createNone();
    const result = mapOrElseAsyncForOption(
        input,
        async () => {
            t.pass(true);
            return EXPECTED;
        },
        async (_v) => {
            t.fail(`don't enter this path`);
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, EXPECTED, 'the return value');
});
