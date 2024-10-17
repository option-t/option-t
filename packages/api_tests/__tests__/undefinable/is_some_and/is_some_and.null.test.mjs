import test from 'ava';

import { isSomeAndForUndefinable } from 'option-t/undefinable/is_some_and';

test('input=null, predicate returns true', (t) => {
    t.plan(3);

    const actual = isSomeAndForUndefinable(null, (value) => {
        t.pass('predicate is called');
        t.is(value, null);
        return true;
    });
    t.true(actual);
});

test('input=null, predicate returns false', (t) => {
    t.plan(3);

    const actual = isSomeAndForUndefinable(null, (value) => {
        t.pass('predicate is called');
        t.is(value, null);
        return false;
    });
    t.false(actual);
});
