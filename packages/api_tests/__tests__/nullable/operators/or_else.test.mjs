import test from 'ava';

import { orElseForNullable } from 'option-t/nullable/or_else';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value ' + String(INPUT), (t) => {
        t.plan(1);

        const DEFAULT_VAL = Math.random();
        const result = orElseForNullable(INPUT, () => {
            t.fail();
            return DEFAULT_VAL;
        });

        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();

    const result = orElseForNullable(NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.pass();
        return DEFAULT_VAL;
    });

    t.is(result, DEFAULT_VAL);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const DEFAULT_VAL = Math.random();

    const result = orElseForNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.fail();
        return DEFAULT_VAL;
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});
