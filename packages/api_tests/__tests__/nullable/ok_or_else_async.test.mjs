import test from 'ava';

import { okOrElseAsyncForNullable } from 'option-t/Nullable/okOrElseAsync';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/PlainResult/Result';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), async (t) => {
        t.plan(3);

        const result = okOrElseAsyncForNullable(EXPECTED, async () => {
            t.fail('should not call recover fn');
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(3);

    const result = okOrElseAsyncForNullable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        async () => {
            t.fail('should not call recover fn');
            return DEFAULT_ERR;
        }
    );

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.true(isOk(actual), 'should be Ok(T)');
    t.is(
        unwrapOk(actual),
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        'should contain the expected'
    );
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(4);

    const result = okOrElseAsyncForNullable(NULL_VALUE_IN_THIS_TEST_CASE, async () => {
        t.pass('should call recover fn');
        return DEFAULT_ERR;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
});

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            await okOrElseAsyncForNullable(NULL_VALUE_IN_THIS_TEST_CASE, () => {
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
