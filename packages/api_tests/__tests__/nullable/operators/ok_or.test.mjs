import test from 'ava';

import { NullableOperator } from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { okOrForNullable } from 'option-t/nullable/ok_or';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const actual = okOrForNullable(INPUT, DEFAULT_ERR);

        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);
    const actual = okOrForNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, DEFAULT_ERR);

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(
        unwrapOk(actual),
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        'should contain the expected',
    );
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);
    const actual = okOrForNullable(NULL_VALUE_IN_THIS_TEST_CASE, DEFAULT_ERR);

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
});

test(`exported alias' identity check`, (t) => {
    t.is(NullableOperator.okOr, okOrForNullable);
    t.is(NullableNamespace.okOr, okOrForNullable);
    t.is(NullableRootCompatV54.okOrForNullable, okOrForNullable);
});
