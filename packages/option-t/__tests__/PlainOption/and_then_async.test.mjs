import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.js';
import { andThenAsyncForOption } from '../../__dist/esm/PlainOption/andThenAsync.js';

const VALUE_T = Math.random();
const VALUE_U = Math.random();

test('input is Some(T), callback return Some(U)', async (t) => {
    t.plan(5);

    const input = createSome(VALUE_T);
    const result = andThenAsyncForOption(input, async (v) => {
        t.is(v, VALUE_T);
        return createSome(VALUE_U);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is Some(T), callback return None', async (t) => {
    t.plan(3);

    const input = createSome(VALUE_T);
    const result = andThenAsyncForOption(input, async (v) => {
        t.is(v, VALUE_T);
        return createNone();
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.false(actual.ok);
});

test('input is None', async (t) => {
    t.plan(3);

    const input = createNone();
    const result = andThenAsyncForOption(input, async (_) => {
        t.pass(false);
        return createSome(VALUE_T);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
    t.false(actual.ok);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createSome(VALUE_T);
            await andThenAsyncForOption(input, () => {
                t.pass();
                return createNone();
            });
        },
        {
            instanceOf: TypeError,
            message: '`transformer` must return Promise',
        }
    );
});
