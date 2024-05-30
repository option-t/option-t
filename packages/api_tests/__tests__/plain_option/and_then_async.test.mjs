import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { andThenAsyncForOption } from 'option-t/plain_option/and_then_async';

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
