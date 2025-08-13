import test from 'ava';

import { expectNotUndefined } from 'option-t/undefinable/undefinable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const EXPECTED_MSG = 'expected test';
        let result;
        t.notThrows(() => {
            result = expectNotUndefined(INPUT, EXPECTED_MSG);
        });

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const EXPECTED_MSG = 'expected test';
    let result;
    t.notThrows(() => {
        result = expectNotUndefined(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, EXPECTED_MSG);
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should the expected result');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const EXPECTED_MSG = 'expected test';
    t.throws(
        () => {
            expectNotUndefined(NULL_VALUE_IN_THIS_TEST_CASE, EXPECTED_MSG);
        },
        {
            instanceOf: TypeError,
            message: EXPECTED_MSG,
        },
    );
});
