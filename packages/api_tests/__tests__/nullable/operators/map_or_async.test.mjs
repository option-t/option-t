import test from 'ava';

import { mapOrAsyncForNullable } from 'option-t/nullable/map_or_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(4);

        const result = mapOrAsyncForNullable(INPUT, Symbol('def'), async (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE, 'passed value should not be expected');
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED, 'final value should be expected');
    });
}

test('pass null', async (t) => {
    t.plan(2);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrAsyncForNullable(NULL_VALUE_IN_THIS_TEST_CASE, DEFAULE_VAL, async (_v) => {
        t.fail('should not call selector fn');
        return COMPUTED_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, DEFAULE_VAL);
});

test('pass undefined', async (t) => {
    t.plan(4);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrAsyncForNullable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        DEFAULE_VAL,
        async (v) => {
            t.pass('should call selector fn');
            t.is(v, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
            return COMPUTED_VAL;
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, COMPUTED_VAL);
});

{
    const testcases = [[1, 2, NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that do not return Nullable<*> as the selector's result, v = ${String(
            src,
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, async (t) => {
            t.plan(2);

            await t.throwsAsync(
                async () => {
                    await mapOrAsyncForNullable(src, def, async (_v) => {
                        t.pass('this should be called');
                        return selectorResult;
                    });
                    t.fail('do not reach here');
                },
                {
                    instanceOf: TypeError,
                    message: '`transformer` must not return `null`',
                },
            );
        });
    }
}

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE, '']];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that def is not Nullable<*>', v = ${String(src)}, def = ${String(
            def,
        )}, selectorResult=${String(selectorResult)}`, async (t) => {
            t.plan(1);

            await t.throwsAsync(
                async () => {
                    await mapOrAsyncForNullable(src, def, async (_v) => {
                        t.fail('do not call this');
                        return selectorResult;
                    });
                    t.fail('do not reach here');
                },
                {
                    instanceOf: TypeError,
                    message: '`defaultValue` must not be `null`',
                },
            );
        });
    }
}
