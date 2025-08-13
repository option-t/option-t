import test from 'ava';

import { inspectUndefinable } from 'option-t/undefinable/inspect';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(3);

        const result = inspectUndefinable(INPUT, (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE);
        });

        t.is(result, EXPECTED, 'should be input');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const result = inspectUndefinable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.pass('should call selector fn');
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should be input');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const result = inspectUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.pass('should not call selector fn');
    });

    t.is(result, NULL_VALUE_IN_THIS_TEST_CASE, 'should be input');
});
