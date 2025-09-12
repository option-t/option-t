import { randomUUID } from 'node:crypto';
import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { isErrAndWithEnsureTypeForResult } from 'option-t/plain_result/is_err_and';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk } from 'option-t/plain_result/result';

test('input=Ok(T), predicate returns true', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isErrAndWithEnsureTypeForResult(input, (_value) => {
        t.fail('should not call predicate');
        return true;
    });
    t.false(actual);
});

test('input=Ok(T), predicate returns false', (t) => {
    t.plan(1);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isErrAndWithEnsureTypeForResult(input, (_value) => {
        t.fail('should not call predicate');
        return false;
    });
    t.false(actual);
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.isErrAndWithEnsureType, isErrAndWithEnsureTypeForResult);
    t.is(PlainResultNamespace.isErrAndWithEnsureType, isErrAndWithEnsureTypeForResult);
    t.is(PlainResultCompatV54.isErrAndWithEnsureTypeForResult, isErrAndWithEnsureTypeForResult);
});
