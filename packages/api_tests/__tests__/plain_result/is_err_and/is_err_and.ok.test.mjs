import { randomUUID } from 'node:crypto';
import test from 'ava';

import { createOk } from 'option-t/PlainResult/Result';
import { isErrAndForResult } from 'option-t/PlainResult/isErrAnd';

test('input=Ok(T), predicate returns true', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isErrAndForResult(input, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=Ok(T), predicate returns false', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isErrAndForResult(input, (_value) => {
        t.fail('should not call predicate');
        return false;
    });
    t.false(actual);
});
