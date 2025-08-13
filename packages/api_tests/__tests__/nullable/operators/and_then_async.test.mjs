import test from 'ava';

import { andThenAsyncForNullable } from 'option-t/nullable/and_then_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, PASSED_EXPECTED, FINAL_EXPECTED] of nonNullableValueCaseListForAsync) {
    test(`pass : ${String(INPUT)}`, async (t) => {
        t.plan(4);

        const result = andThenAsyncForNullable(INPUT, async (v) => {
            t.pass();
            t.is(v, PASSED_EXPECTED);
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');

        const actual = await result;
        t.is(actual, FINAL_EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(2);

    const DEFAULT_VAL = Symbol('');
    const result = andThenAsyncForNullable(NULL_VALUE_IN_THIS_TEST_CASE, async (_v) => {
        t.fail();
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, null);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(3);

    const result = andThenAsyncForNullable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        async (v) => {
            t.pass();
            return v;
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});
