import test from 'ava';

import { createOk, createErr } from 'option-t/__dist/esm/PlainResult/Result.js';
import { mapErrAsyncForResult } from 'option-t/__dist/esm/PlainResult/mapErrAsync.js';

const VALUE_T = Math.random();
const ERROR_E = new Error('e');
const ERROR_F = new Error('f');

test('input is Ok(T)', async (t) => {
    t.plan(4);

    const input = createOk(VALUE_T);
    const result = mapErrAsyncForResult(input, async (_) => {
        t.pass(false);
        return ERROR_F;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_T);
});

test('input is Err(E)', async (t) => {
    t.plan(5);

    const input = createErr(ERROR_E);
    const result = mapErrAsyncForResult(input, async (e) => {
        t.is(e, ERROR_E);
        return ERROR_F;
    });

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.not(actual, input);
    t.false(actual.ok);
    t.is(actual.err, ERROR_F);
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createErr(ERROR_E);
            await mapErrAsyncForResult(input, () => {
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
