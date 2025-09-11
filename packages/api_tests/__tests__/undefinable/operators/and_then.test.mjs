import test from 'ava';

import * as UndefinableRoot from 'option-t/undefinable';
import { andThenForUndefinable } from 'option-t/undefinable/and_then';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

const RESULT_VAL = Symbol('result val');

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(3);

        const result = andThenForUndefinable(EXPECTED, (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE);
            return v;
        });

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const result = andThenForUndefinable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.pass('should call selector fn');
        return RESULT_VAL;
    });

    t.is(result, RESULT_VAL, 'should be the expected result');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const result = andThenForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.fail('should not call selector fn');
        return RESULT_VAL;
    });

    t.is(result, NULL_VALUE_IN_THIS_TEST_CASE, 'should be the expected result');
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableRoot.UndefinableOperator.andThen, andThenForUndefinable);
    t.is(UndefinableNamespace.andThen, andThenForUndefinable);
    t.is(UndefinableRootCompatV54.andThenForUndefinable, andThenForUndefinable);
});
