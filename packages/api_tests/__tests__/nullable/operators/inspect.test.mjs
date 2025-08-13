import test from 'ava';

import { inspectNullable } from 'option-t/nullable/inspect';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(3);

        const actual = inspectNullable(INPUT, (v) => {
            t.pass();
            t.is(v, PASSED_VALUE, 'the arg is input');
        });

        t.is(actual, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const result = inspectNullable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.fail();
    });
    t.is(result, NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(3);

    const INPUT = NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE;
    const result = inspectNullable(INPUT, (v) => {
        t.pass();
        t.is(v, INPUT, 'the arg is INPUT');
    });

    t.is(result, INPUT);
});
