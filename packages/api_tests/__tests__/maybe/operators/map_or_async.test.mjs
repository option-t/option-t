import test from 'ava';

import { mapOrAsyncForMaybe } from 'option-t/maybe/map_or_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForAsync) {
    test('value:' + String(INPUT), async (t) => {
        t.plan(4);

        const result = mapOrAsyncForMaybe(INPUT, Symbol('def'), async (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE, 'the input is the arg');
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, async (t) => {
        t.plan(2);
        const DEFAULE_VAL = Math.random();

        const result = mapOrAsyncForMaybe(NULL_VALUE, DEFAULE_VAL, async (_v) => {
            t.fail('should not call selector fn');
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, DEFAULE_VAL);
    });

    test(`assert that do not return Maybe<*> as the selector's result (${NULL_VALUE})`, async (t) => {
        t.plan(3);

        const INPUT = Symbol('input');
        const DEFAULT_VALUE = Math.random();
        await t.throwsAsync(
            async () => {
                await mapOrAsyncForMaybe(INPUT, DEFAULT_VALUE, async (v) => {
                    t.pass('call this');
                    t.is(v, INPUT);
                    return NULL_VALUE;
                });
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must not return `null` or `undefined`',
            },
        );
    });

    for (const DEFAULT_VALUE of [null, undefined]) {
        test(`assert that def is not Maybe<*>, input: ${NULL_VALUE}, def = ${DEFAULT_VALUE}`, async (t) => {
            t.plan(1);

            await t.throwsAsync(
                async () => {
                    await mapOrAsyncForMaybe(NULL_VALUE, DEFAULT_VALUE, async (_v) => {
                        t.fail('do not call');
                        return Math.random();
                    });
                },
                {
                    instanceOf: TypeError,
                    message: '`defaultValue` must not be `null` or `undefined`',
                },
            );
        });
    }
}
