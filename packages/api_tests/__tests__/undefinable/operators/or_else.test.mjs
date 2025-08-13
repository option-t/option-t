import test from 'ava';

import { orElseForUndefinable } from 'option-t/undefinable/or_else';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(1);

        const result = orElseForUndefinable(EXPECTED, () => {
            t.fail('should not call recover fn');
        });

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();

    t.plan(1);
    const result = orElseForUndefinable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.pass('should not call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should be the default');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();

    t.plan(2);
    const result = orElseForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.pass('should call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, DEFAULT_VAL, 'should be the default');
});
