import test from 'ava';

import { NullableOperator } from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { okOrElseAsyncForNullable } from 'option-t/nullable/ok_or_else_async';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

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
        },
    );

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.true(isOk(actual), 'should be Ok(T)');
    t.is(
        unwrapOk(actual),
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        'should contain the expected',
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

test(`exported alias' identity check`, (t) => {
    t.is(NullableOperator.okOrElseAsync, okOrElseAsyncForNullable);
    t.is(NullableNamespace.okOrElseAsync, okOrElseAsyncForNullable);
    t.is(NullableRootCompatV54.okOrElseAsyncForNullable, okOrElseAsyncForNullable);
});
