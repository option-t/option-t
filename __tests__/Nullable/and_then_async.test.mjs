import test from 'ava';

import { andThenAsyncForNullable } from '../../__dist/esm/Nullable/andThenAsync.mjs';
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

test('pass null', async (t) => {
    t.plan(2);

    const DEFAULT_VAL = Symbol('');
    const result = andThenAsyncForNullable(null, async (_v) => {
        t.fail();
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, null);
});

test('pass undefined', async (t) => {
    t.plan(3);

    const result = andThenAsyncForNullable(undefined, async (v) => {
        t.pass();
        return v;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, undefined);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            await andThenAsyncForNullable(undefined, () => {
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
