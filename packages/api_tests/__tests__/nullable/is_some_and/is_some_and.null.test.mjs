import test from 'ava';

import { isSomeAndForNullable } from 'option-t/nullable/is_some_and';

test('input=null, predicate returns true', (t) => {
    t.plan(1);

    const actual = isSomeAndForNullable(null, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=null, predicate returns false', (t) => {
    t.plan(1);

    const actual = isSomeAndForNullable(null, (_value) => {
        t.fail('should not call predicate');
        return false;
    });
    t.false(actual);
});
