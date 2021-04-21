import test from 'ava';

import { mapAsyncForNullable } from '../../__dist/esm/Nullable/mapAsync.mjs';
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

    const result = mapAsyncForNullable(null, async (_v) => {
        t.fail('do not call this');
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, null);
});

test('pass undefined', async (t) => {
    t.plan(3);

    const result = mapAsyncForNullable(undefined, async (v) => {
        t.pass();
        return v;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, undefined);
});

const testcases = [[1, null]];
for (const [src, def] of testcases) {
    test(`assert that do not return Nullable<*> as the selector's result, v = ${String(
        src
    )}, def = ${String(def)}`, async (t) => {
        await t.throwsAsync(
            async () => {
                mapAsyncForNullable(src, (_v) => def);
                t.fail('do not reach to here');
            },
            { instanceOf: TypeError }
        );
    });
}

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            await mapAsyncForNullable(undefined, () => {
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
