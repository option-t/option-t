import test from 'ava';

import { filterForNullable } from 'option-t/nullable/filter';

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
    t.plan(1);

    const actual = filterForNullable(null, (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, null);
});
