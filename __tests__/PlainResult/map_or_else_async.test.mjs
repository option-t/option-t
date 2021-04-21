import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/PlainResult/Result.mjs';

import { mapOrElseAsyncForResult } from '../../__dist/esm/PlainResult/mapOrElseAsync.mjs';

const PLAN_COUNT = 3;

test('Ok<T>', async (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createOk(INITIAL);
    const result = mapOrElseAsyncForResult(
        input,
        async (_e) => {
            t.fail(`don't enter this path`);
        },
        async (v) => {
            t.is(v, INITIAL, 'the argument');
            return EXPECTED;
        }
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, 3, 'the return value');
});

test('Err<E>', async (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createErr(INITIAL);
    const result = mapOrElseAsyncForResult(
        input,
        async (e) => {
            t.is(e, INITIAL, 'the argument');
            return EXPECTED;
        },
        async (_v) => {
            t.fail(`don't enter this path`);
        }
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, 3, 'the return value');
});

test('input is Ok, callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createOk(Math.random);
            await mapOrElseAsyncForResult(
                input,
                (_e) => {
                    t.fail(`don't enter this path`);
                    return Math.random();
                },
                (_v) => {
                    t.pass();
                    return Math.random();
                }
            );
        },
        {
            instanceOf: TypeError,
            message: '`transformer` must return Promise',
        }
    );
});

test('input is Err, callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createErr(Math.random);
            await mapOrElseAsyncForResult(
                input,
                (_e) => {
                    t.pass();
                    return Math.random();
                },
                (_v) => {
                    t.fail(`don't enter this path`);
                    return Math.random();
                }
            );
        },
        {
            instanceOf: TypeError,
            message: '`recoverer` must return Promise',
        }
    );
});
