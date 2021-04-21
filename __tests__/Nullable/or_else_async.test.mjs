import test from 'ava';

import { orElseAsyncForNullable } from '../../__dist/esm/Nullable/orElseAsync.mjs';
import { nonNullableValue } from '../utils.mjs';

const nonNullableValueCaseList = nonNullableValue.map((input) => {
    if (input instanceof Promise) {
        // Promise will be unwrap recursively automatically.
        // There is no ways to unwrap single level now.
        // So we need to care that.
        return [input, 'this is promise'];
    }

    return [input, input];
});

for (const [INPUT, EXPECTED] of nonNullableValueCaseList) {
    test('pass the value ' + String(INPUT), async (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = orElseAsyncForNullable(INPUT, async () => {
            t.fail();
            return DEFAULT_VAL;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

test('pass null', async (t) => {
    t.plan(3);

    const DEFAULT_VAL = Math.random();

    const result = orElseAsyncForNullable(null, async () => {
        t.pass();
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, DEFAULT_VAL);
});

test('pass undefined', async (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();

    const result = orElseAsyncForNullable(undefined, async () => {
        t.fail();
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, undefined);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            await orElseAsyncForNullable(null, () => {
                t.pass();
                return 1;
            });
        },
        {
            instanceOf: TypeError,
            message: '`recoverer` must return Promise',
        }
    );
});
