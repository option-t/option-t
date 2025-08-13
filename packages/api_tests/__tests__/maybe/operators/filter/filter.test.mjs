import test from 'ava';

import { filterForMaybe } from 'option-t/maybe/filter';

test('input is T, and predicate return true', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterForMaybe(INPUT, (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterForMaybe(INPUT, (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, undefined);
});

test('input is null', (t) => {
    t.plan(1);

    const actual = filterForMaybe(null, (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});

test('input is undefined', async (t) => {
    const actual = await filterForMaybe(undefined, async (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});
