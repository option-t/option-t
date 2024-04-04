import { randomUUID } from 'node:crypto';
import test from 'ava';

import { createErr } from 'option-t/PlainResult/Result';
import { isOkAndWithEnsureTypeForResult } from 'option-t/PlainResult/isOkAnd';

test('input=Err(T), predicate returns true', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createErr(INPUT_VALUE);
    const actual = isOkAndWithEnsureTypeForResult(input, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=Err(T), predicate returns false', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createErr(INPUT_VALUE);
    const actual = isOkAndWithEnsureTypeForResult(input, (_value) => {
        t.fail('should not call predicate');
        return false;
    });
    t.false(actual);
});
