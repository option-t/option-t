import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { UndefinableOperator } from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { okOrForUndefinable } from 'option-t/undefinable/ok_or';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const actual = okOrForUndefinable(INPUT, DEFAULT_ERR);

        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);
    const actual = okOrForUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        DEFAULT_ERR,
    );

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(
        unwrapOk(actual),
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        'should contain the expected',
    );
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);
    const actual = okOrForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, DEFAULT_ERR);

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableOperator.okOr, okOrForUndefinable);
    t.is(UndefinableNamespace.okOr, okOrForUndefinable);
    t.is(UndefinableRootCompatV54.okOrForUndefinable, okOrForUndefinable);
});
