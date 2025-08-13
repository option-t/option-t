import test from 'ava';

import { mapAsyncForNullable } from 'option-t/nullable/map_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, PASSED_EXPECTED, FINAL_EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value:  ' + String(INPUT), async (t) => {
        t.plan(4);

        const result = mapAsyncForNullable(INPUT, async (v) => {
            t.pass();
            t.is(v, PASSED_EXPECTED, 'the arg is the input');
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, FINAL_EXPECTED);
    });
}

test('pass null', async (t) => {
    t.plan(2);

    const result = mapAsyncForNullable(NULL_VALUE_IN_THIS_TEST_CASE, async (_v) => {
        t.fail('do not call this');
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, NULL_VALUE_IN_THIS_TEST_CASE);
});

test('pass undefined', async (t) => {
    t.plan(3);

    const result = mapAsyncForNullable(
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

const testcases = [[1, NULL_VALUE_IN_THIS_TEST_CASE]];
for (const [src, def] of testcases) {
    test(`assert that do not return Nullable<*> as the selector's result, v = ${String(
        src,
    )}, def = ${String(def)}`, async (t) => {
        await t.throwsAsync(
            async () => {
                await mapAsyncForNullable(src, async (_v) => def);
                t.fail('do not reach to here');
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must not return `null`',
            },
        );
    });
}
