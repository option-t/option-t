import test from 'ava';

import { mapOrElseAsyncForUndefinable } from 'option-t/undefinable/map_or_else_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(3);

        const DEFAULT_VAL = Symbol('def');

        const result = mapOrElseAsyncForUndefinable(
            INPUT,
            async () => {
                t.fail('do not call this');
                return DEFAULT_VAL;
            },
            async (v) => {
                t.is(v, PASSED_VALUE, 'the arg is the input');
                return v;
            },
        );

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

test('pass null', async (t) => {
    t.plan(3);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrElseAsyncForUndefinable(
        NULL_VALUE_IN_THIS_TEST_CASE,
        async () => {
            t.pass('call this path');
            return DEFAULE_VAL;
        },
        async (_v) => {
            t.fail('do not call this');
            return COMPUTED_VAL;
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, DEFAULE_VAL);
});

test('pass undefined', async (t) => {
    t.plan(3);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');

    const result = mapOrElseAsyncForUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        async () => {
            t.fail('do not call this');
            return DEFAULE_VAL;
        },
        async (v) => {
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
        test(`assert that do not return Nullable<*> as the selector's result: v = ${String(
            src,
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, async (t) => {
            t.plan(2);

            await t.throwsAsync(
                async () => {
                    await mapOrElseAsyncForUndefinable(
                        src,
                        async () => {
                            t.fail('do not call this pass to here');
                            return def;
                        },
                        async (_v) => {
                            t.pass('this pass should be called');
                            return selectorResult;
                        },
                    );
                    t.fail('do not reach here');
                },
                {
                    instanceOf: TypeError,
                    message: '`transformer` must not return `undefined`',
                },
            );
        });
    }
}

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE, '']];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that def is not Nullable<*>: v = ${String(src)}, def = ${String(
            def,
        )}, selectorResult=${String(selectorResult)}`, async (t) => {
            t.plan(2);

            await t.throwsAsync(
                async () => {
                    await mapOrElseAsyncForUndefinable(
                        src,
                        async () => {
                            t.pass('this pass should be called');
                            return def;
                        },
                        async (_v) => {
                            t.fail('do not call this pass to here');
                            return Math.random();
                        },
                    );
                    t.fail('do not reach here');
                },
                {
                    instanceOf: TypeError,
                    message: '`recoverer` must not return `undefined`',
                },
            );
        });
    }
}
