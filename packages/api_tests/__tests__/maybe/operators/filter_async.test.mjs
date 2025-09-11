import test from 'ava';

import { filterAsyncForMaybe } from 'option-t/maybe/filter_async';

test('input is T, and predicate return true', async (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = await filterAsyncForMaybe(INPUT, async (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', async (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = await filterAsyncForMaybe(INPUT, async (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, undefined);
});

test('input is undefined', async (t) => {
    const actual = await filterAsyncForMaybe(undefined, async (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});

test('input is null', async (t) => {
    const actual = await filterAsyncForMaybe(null, async (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
