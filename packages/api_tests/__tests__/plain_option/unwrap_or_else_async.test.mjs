import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { unwrapOrElseAsyncForOption } from 'option-t/plain_option/unwrap_or_else_async';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();

test('input is Some(T)', async (t) => {
    t.plan(2);

    const input = createSome(VALUE_T);
    const result = unwrapOrElseAsyncForOption(input, async () => {
        t.pass(false);
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, VALUE_T);
});

test('input is None', async (t) => {
    t.plan(3);

    const input = createNone();
    const result = unwrapOrElseAsyncForOption(input, async () => {
        t.pass(true);
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, DEFAULT_VAL);
});
