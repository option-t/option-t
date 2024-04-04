import { randomUUID } from 'node:crypto';
import test from 'ava';

import { createErr } from 'option-t/PlainResult/Result';
import { isErrAndWithEnsureTypeForResult } from 'option-t/PlainResult/isErrAnd';

test('input=Err(T), predicate returns true', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createErr(INPUT_VALUE);
    const actual = isErrAndWithEnsureTypeForResult(input, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return true;
    });
    t.true(actual);
});

test('input=Err(T), predicate returns false', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createErr(INPUT_VALUE);
    const actual = isErrAndWithEnsureTypeForResult(input, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return false;
    });
    t.false(actual);
});
