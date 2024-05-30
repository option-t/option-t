import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { mapAsyncForOption } from 'option-t/plain_option/map_async';

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
