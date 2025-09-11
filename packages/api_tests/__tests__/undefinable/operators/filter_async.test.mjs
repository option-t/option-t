import test from 'ava';

import { filterAsyncForUndefinable } from 'option-t/undefinable/filter_async';

test('input is T, and predicate return true', async (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = await filterAsyncForUndefinable(INPUT, async (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', async (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = await filterAsyncForUndefinable(INPUT, async (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, undefined);
});

test('input is undefined', async (t) => {
    const actual = await filterAsyncForUndefinable(undefined, async (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
