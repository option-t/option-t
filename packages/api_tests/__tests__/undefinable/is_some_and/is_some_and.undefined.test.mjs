import test from 'ava';

import { isSomeAndForUndefinable } from 'option-t/undefinable/is_some_and';

test('input=undefined, predicate returns true', (t) => {
    t.plan(1);

    const actual = isSomeAndForUndefinable(undefined, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=undefined, predicate returns false', (t) => {
    t.plan(1);

    const actual = isSomeAndForUndefinable(undefined, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});
