import test from 'ava';

import { isSomeAndForNullable } from 'option-t/nullable/is_some_and';

test('input=undefined, predicate returns true', (t) => {
    t.plan(3);

    const INPUT_VALUE = undefined;
    const actual = isSomeAndForNullable(INPUT_VALUE, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return true;
    });
    t.true(actual);
});

test('input=undefined, predicate returns false', (t) => {
    t.plan(3);

    const INPUT_VALUE = undefined;
    const actual = isSomeAndForNullable(INPUT_VALUE, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return false;
    });
    t.false(actual);
});
