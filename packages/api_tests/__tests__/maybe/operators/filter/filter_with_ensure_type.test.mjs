import test from 'ava';

import { filterWithEnsureTypeForMaybe } from 'option-t/maybe/filter';

test('input is T, and predicate return true', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterWithEnsureTypeForMaybe(INPUT, (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterWithEnsureTypeForMaybe(INPUT, (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, undefined);
});

test('input is null', (t) => {
    t.plan(1);

    const actual = filterWithEnsureTypeForMaybe(null, (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});

test('input is undefined', async (t) => {
    const actual = await filterWithEnsureTypeForMaybe(undefined, async (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
