import test from 'ava';

import { andThenAsyncForUndefinable } from 'option-t/undefinable/and_then_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, PASSED_EXPECTED, FINAL_EXPECTED] of nonNullableValueCaseListForAsync) {
    test(`pass : ${String(INPUT)}`, async (t) => {
        t.plan(4);

        const result = andThenAsyncForUndefinable(INPUT, async (v) => {
            t.pass();
            t.is(v, PASSED_EXPECTED);
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');

        const actual = await result;
        t.is(actual, FINAL_EXPECTED);
    });
}

test('pass null', async (t) => {
    t.plan(3);

    const RESULT_VAL = Math.random();
    const result = andThenAsyncForUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        async (_v) => {
            t.pass('should call selector fn');
            return RESULT_VAL;
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, RESULT_VAL, 'should be the expected result');
});

test('pass undefined', async (t) => {
    t.plan(2);

    const result = andThenAsyncForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, async (_v) => {
        t.fail('should not call selector fn');
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, NULL_VALUE_IN_THIS_TEST_CASE, 'should be the expected result');
});
