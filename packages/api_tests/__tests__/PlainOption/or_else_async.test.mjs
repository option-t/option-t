import test from 'ava';

import {
    createSome,
    createNone,
    isSome,
    isNone,
    unwrapSome as unwrapOption,
} from 'option-t/esm/PlainOption/Option';
import { orElseAsyncForOption } from 'option-t/esm/PlainOption/orElseAsync';

const VALUE_T = Math.random();
const VALUE_U = Math.random();

test('input is Some(T)', async (t) => {
    t.plan(2);

    const input = createSome(VALUE_T);
    const result = orElseAsyncForOption(input, async () => {
        t.pass(false);
        return createSome(VALUE_U);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
});

test('input is None, callback return Some(T)', async (t) => {
    t.plan(4);

    const input = createNone();
    const result = orElseAsyncForOption(input, async () => {
        t.pass(true);
        return createSome(VALUE_T);
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isSome(actual));
    t.is(unwrapOption(actual), VALUE_T);
});

test('input is None, callback return None', async (t) => {
    t.plan(4);

    const input = createNone();

    const result = orElseAsyncForOption(input, async () => {
        t.pass(true);
        return createNone();
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.true(isNone(actual));
    t.not(actual, input);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createNone();
            await orElseAsyncForOption(input, () => {
                t.pass();
                return createNone();
            });
        },
        {
            instanceOf: TypeError,
            message: '`recoverer` must return Promise',
        }
    );
});
