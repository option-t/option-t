import test from 'ava';

import { createSome, createNone } from 'option-t/esm/PlainOption/Option';
import { mapOrElseAsyncForOption } from 'option-t/esm/PlainOption/mapOrElseAsync';

const PLAN_COUNT = 3;

test('Some<T>', async (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createSome(INITIAL);
    const result = mapOrElseAsyncForOption(
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

test('None', async (t) => {
    const EXPECTED = Math.random();

    t.plan(PLAN_COUNT);

    const input = createNone();
    const result = mapOrElseAsyncForOption(
        input,
        async () => {
            t.pass(true);
            return EXPECTED;
        },
        async (_v) => {
            t.fail(`don't enter this path`);
        }
    );

    t.true(result instanceof Promise, 'result should be Promise');

    const actual = await result;
    t.is(actual, EXPECTED, 'the return value');
});

test('input is Some, callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createSome(Math.random);
            await mapOrElseAsyncForOption(
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

test('input is None, callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const input = createNone();
            await mapOrElseAsyncForOption(
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
