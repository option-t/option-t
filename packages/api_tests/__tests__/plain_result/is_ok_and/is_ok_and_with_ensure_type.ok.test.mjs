import { randomUUID } from 'node:crypto';
import test from 'ava';

import { isOkAndWithEnsureTypeForResult } from 'option-t/plain_result/is_ok_and';
import { createOk } from 'option-t/plain_result/result';

test('input=Ok(T), predicate returns true', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isOkAndWithEnsureTypeForResult(input, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return true;
    });
    t.true(actual);
});

test('input=Ok(T), predicate returns false', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isOkAndWithEnsureTypeForResult(input, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return false;
    });
    t.false(actual);
});
