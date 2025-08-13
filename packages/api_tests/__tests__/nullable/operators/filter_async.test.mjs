import test from 'ava';

import { filterAsyncForNullable } from 'option-t/nullable/filter_async';

test('input is T, and predicate return true', async (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = await filterAsyncForNullable(INPUT, async (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', async (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = await filterAsyncForNullable(INPUT, async (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, null);
});

test('input is null', async (t) => {
    const actual = await filterAsyncForNullable(null, async (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, null);
});
