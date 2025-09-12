import test from 'ava';

import { UndefinableOperator } from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { mapAsyncForUndefinable } from 'option-t/undefinable/map_async';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, PASSED_EXPECTED, FINAL_EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value:  ' + String(INPUT), async (t) => {
        t.plan(4);

        const result = mapAsyncForUndefinable(INPUT, async (v) => {
            t.pass();
            t.is(v, PASSED_EXPECTED, 'the arg is the input');
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, FINAL_EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(2);

    const result = mapAsyncForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, async (_v) => {
        t.fail('do not call this');
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(3);

    const result = mapAsyncForUndefinable(
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
    test(`assert that do not return Undefinable<*> as the selector's result, v = ${String(
        src,
    )}, def = ${String(def)}`, async (t) => {
        await t.throwsAsync(
            async () => {
                await mapAsyncForUndefinable(src, async (_v) => def);
                t.fail('do not reach to here');
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must not return `undefined`',
            },
        );
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableOperator.mapAsync, mapAsyncForUndefinable);
    t.is(UndefinableNamespace.mapAsync, mapAsyncForUndefinable);
    t.is(UndefinableRootCompatV54.mapAsyncForUndefinable, mapAsyncForUndefinable);
});
