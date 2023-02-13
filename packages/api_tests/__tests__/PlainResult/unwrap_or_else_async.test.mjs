import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { unwrapOrElseAsyncFromResult } from 'option-t/PlainResult/unwrapOrElseAsync';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', async (t) => {
    t.plan(2);

    const input = createOk(VALUE_T);
    const result = unwrapOrElseAsyncFromResult(input, async () => {
        t.pass(true);
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, VALUE_T);
});

test('input is Err(E)', async (t) => {
    t.plan(3);

    const input = createErr(ERROR_E);
    const result = unwrapOrElseAsyncFromResult(input, async () => {
        t.pass(true);
        return DEFAULT_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, DEFAULT_VAL);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createErr(ERROR_E);
            await unwrapOrElseAsyncFromResult(input, () => {
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
