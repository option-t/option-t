import { randomUUID } from 'node:crypto';
import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { isOkAndForResult } from 'option-t/plain_result/is_ok_and';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk } from 'option-t/plain_result/result';

test('input=Ok(T), predicate returns true', (t) => {
    t.plan(3);

    const INPUT_VALUE = `value: ${randomUUID()}`;
    const input = createOk(INPUT_VALUE);
    const actual = isOkAndForResult(input, (value) => {
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
    const actual = isOkAndForResult(input, (value) => {
        t.pass('predicate is called');
        t.is(value, INPUT_VALUE);
        return false;
    });
    t.false(actual);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.isOkAndForResult, isOkAndForResult);
    t.is(PlainResultRoot.ResultOperator.isOkAnd, isOkAndForResult);
    t.is(PlainResultNamespace.isOkAnd, isOkAndForResult);
    t.is(PlainResultCompatV54.isOkAndForResult, isOkAndForResult);
});
