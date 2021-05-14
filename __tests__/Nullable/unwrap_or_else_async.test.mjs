import test from 'ava';

import { unwrapOrElseAsyncFromNullable } from '../../__dist/esm/Nullable/unwrapOrElseAsync.mjs';
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
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(3);

        const DEFAULT_VAL = Math.random();

        let result;
        t.notThrows(() => {
            result = unwrapOrElseAsyncFromNullable(INPUT, () => {
                t.fail('should not call recover fn');
                return DEFAULT_VAL;
            });
        });

        t.true(result instanceof Promise, 'result should be Promise');

        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

test('pass null', async (t) => {
    t.plan(3);

    const DEFAULT_VAL = Math.random();
    const result = unwrapOrElseAsyncFromNullable(null, async () => {
        t.pass('should call recover fn');
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, DEFAULT_VAL);
});

test('pass undefined', async (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();
    const result = unwrapOrElseAsyncFromNullable(undefined, async () => {
        t.fail('should not call recover fn');
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, undefined);
});

const testcases = [[null, null]];
for (const [src, def] of testcases) {
    test(`should not accept null as default value, v = ${String(src)}, def = ${String(
        def
    )}`, async (t) => {
        await t.throwsAsync(
            async () => {
                await unwrapOrElseAsyncFromNullable(src, async () => def);
            },
            { instanceOf: TypeError, message: '`recoverer` must not return `null`' }
        );
    });
}

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            await unwrapOrElseAsyncFromNullable(null, () => {
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
