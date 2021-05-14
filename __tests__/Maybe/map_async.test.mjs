import test from 'ava';

import { mapAsyncForMaybe } from '../../__dist/esm/Maybe/mapAsync.mjs';
import { nonNullableValue } from '../utils.mjs';

const nonNullableValueCaseList = nonNullableValue.map((input) => {
    if (input instanceof Promise) {
        // Promise will be unwrap recursively automatically.
        // There is no ways to unwrap single level now.
        // So we need to care that.
        return [input, input, 'this is promise'];
    }

    return [input, input, input];
});

for (const [INPUT, PASSED_EXPECTED, FINAL_EXPECTED] of nonNullableValueCaseList) {
    test('value:' + String(INPUT), async (t) => {
        t.plan(4);

        const result = mapAsyncForMaybe(INPUT, async (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_EXPECTED, 'the arg is the input');
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, FINAL_EXPECTED);
    });
}

test('pass null', async (t) => {
    const result = mapAsyncForMaybe(null, async (_v) => {
        t.fail('should not call selector fn');
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, null);
});

test('pass undefined', async (t) => {
    const result = mapAsyncForMaybe(undefined, async (_v) => {
        t.fail('should not call selector fn');
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, undefined);
});

{
    const testcases = [
        [1, undefined],
        [1, null],
    ];
    for (const [src, def] of testcases) {
        test(`assert that do not return Maybe<*> as the selector's result, v = ${String(
            src
        )}, def = ${String(def)}`, async (t) => {
            await t.throwsAsync(
                async () => {
                    await mapAsyncForMaybe(src, async (_v) => def);
                    t.fail('do not reach to here');
                },
                {
                    instanceOf: TypeError,
                    message: '`transformer` must not return `null` or `undefined`',
                }
            );
        });
    }
}

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = Math.random();
            await mapAsyncForMaybe(input, () => {
                t.pass();
                return 1;
            });
        },
        {
            instanceOf: TypeError,
            message: '`transformer` must return Promise',
        }
    );
});
