import { randomUUID } from 'node:crypto';
import test from 'ava';

import { isErrAndWithEnsureTypeForResult } from 'option-t/plain_result/is_err_and';
import { createErr } from 'option-t/plain_result/result';

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
