import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { mapAsyncForOption } from '../../__dist/esm/PlainOption/mapAsync.mjs';

const VALUE_T = Math.random();
const VALUE_U = Math.random();

test('input is Some(T)', async (t) => {
    t.plan(5);

    const input = createSome(VALUE_T);
    const result = mapAsyncForOption(input, async (v) => {
        t.pass(v, VALUE_T);
        return VALUE_U;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;

    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is None', async (t) => {
    t.plan(2);

    const input = createNone();
    const result = mapAsyncForOption(input, (v) => {
        t.fail(v, VALUE_T);
        return VALUE_U;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(input, actual);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createSome(VALUE_T);
            await mapAsyncForOption(input, () => {
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
