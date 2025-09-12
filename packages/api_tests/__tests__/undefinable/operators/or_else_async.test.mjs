import test from 'ava';

import { UndefinableOperator } from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { orElseAsyncForUndefinable } from 'option-t/undefinable/or_else_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value ' + String(INPUT), async (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = orElseAsyncForUndefinable(INPUT, async () => {
            t.fail();
            return DEFAULT_VAL;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(3);

    const DEFAULT_VAL = Math.random();

    const result = orElseAsyncForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, async () => {
        t.pass();
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, DEFAULT_VAL);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();

    const result = orElseAsyncForUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        async () => {
            t.fail();
            return DEFAULT_VAL;
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableOperator.orElseAsync, orElseAsyncForUndefinable);
    t.is(UndefinableNamespace.orElseAsync, orElseAsyncForUndefinable);
    t.is(UndefinableRootCompatV54.orElseAsyncForUndefinable, orElseAsyncForUndefinable);
});
