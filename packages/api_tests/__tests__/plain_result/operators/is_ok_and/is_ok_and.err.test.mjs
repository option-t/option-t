import { randomUUID } from 'node:crypto';
import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { isOkAndForResult } from 'option-t/plain_result/is_ok_and';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createErr } from 'option-t/plain_result/result';

test('input=Err(T), predicate returns true', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createErr(INPUT_VALUE);
    const actual = isOkAndForResult(input, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=Err(T), predicate returns false', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createErr(INPUT_VALUE);
    const actual = isOkAndForResult(input, (_value) => {
        t.fail('should not call predicate');
        return false;
    });
    t.false(actual);
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.isOkAnd, isOkAndForResult);
    t.is(PlainResultNamespace.isOkAnd, isOkAndForResult);
    t.is(PlainResultCompatV54.isOkAndForResult, isOkAndForResult);
});
