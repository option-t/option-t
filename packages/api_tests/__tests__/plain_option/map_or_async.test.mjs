import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { mapOrAsyncForOption } from 'option-t/plain_option/map_or_async';

test('Some<T>', async (t) => {
    const INITIAL = `Initial: ${String(Math.random())}`;
    const NOT_EXPECTED = `Not Expected: ${String(Math.random())}`;
    const EXPECTED = `Expected: ${String(Math.random())}`;

    t.plan(3);

    const input = createSome(INITIAL);
    const result = mapOrAsyncForOption(input, NOT_EXPECTED, async (v) => {
        t.is(v, INITIAL, 'the argument');
        return EXPECTED;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, EXPECTED, 'the return value');
});

test('None', async (t) => {
    const EXPECTED = `Expected: ${String(Math.random())}`;

    t.plan(2);

    const input = createNone();
    const result = mapOrAsyncForOption(input, EXPECTED, async (_v) => {
        t.fail(`don't enter this path`);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, EXPECTED, 'the return value');
});
