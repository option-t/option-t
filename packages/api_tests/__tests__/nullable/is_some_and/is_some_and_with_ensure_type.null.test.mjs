import test from 'ava';

import { isSomeAndWithEnsureTypeForNullable } from 'option-t/nullable/is_some_and';

test('input=null, predicate returns true', (t) => {
    t.plan(1);

    const INPUT_VALUE = null;
    const actual = isSomeAndWithEnsureTypeForNullable(INPUT_VALUE, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=null, predicate returns false', (t) => {
    t.plan(1);

    const INPUT_VALUE = null;
    const actual = isSomeAndWithEnsureTypeForNullable(INPUT_VALUE, (_value) => {
        t.fail('should not call predicate');
        return false;
    });
    t.false(actual);
});
