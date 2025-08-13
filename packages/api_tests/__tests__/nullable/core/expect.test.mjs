import test from 'ava';

import { expectNotNull } from 'option-t/nullable/nullable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value ' + String(INPUT), (t) => {
        const EXPECTED_MSG = 'expected test';
        const result = expectNotNull(INPUT, EXPECTED_MSG);
        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    t.plan(1);

    const EXPECTED_MSG = 'expected test';

    t.throws(
        () => {
            expectNotNull(NULL_VALUE_IN_THIS_TEST_CASE, EXPECTED_MSG);
        },
        {
            instanceOf: TypeError,
            message: EXPECTED_MSG,
        },
    );
});

test('pass undefined', (t) => {
    t.plan(2);

    const EXPECTED_MSG = 'expected test';

    let result;
    t.notThrows(() => {
        result = expectNotNull(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, EXPECTED_MSG);
    });
    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});
