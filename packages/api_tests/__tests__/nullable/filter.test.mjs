import test from 'ava';

import { filterForNullable } from 'option-t/Nullable/filter';

test('input is T, and predicate return true', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterForNullable(INPUT, (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterForNullable(INPUT, (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, null);
});

test('input is null', (t) => {
    const actual = filterForNullable(null);
    t.is(actual, null);
});
