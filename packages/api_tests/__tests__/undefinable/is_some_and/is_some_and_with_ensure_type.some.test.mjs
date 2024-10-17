import { randomUUID } from 'node:crypto';
import test from 'ava';

import { isSomeAndWithEnsureTypeForUndefinable } from 'option-t/undefinable/is_some_and';

test('input=T, predicate returns true', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const actual = isSomeAndWithEnsureTypeForUndefinable(INPUT_VALUE, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return true;
    });
    t.true(actual);
});

test('input=T, predicate returns false', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const actual = isSomeAndWithEnsureTypeForUndefinable(INPUT_VALUE, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return false;
    });
    t.false(actual);
});
