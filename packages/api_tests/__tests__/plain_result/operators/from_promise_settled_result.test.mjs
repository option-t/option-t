import test from 'ava';

import { fromPromiseSettledResultToResult } from 'option-t/plain_result/from_promise_settled_result';
import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';

test('should be Ok(T)', async (t) => {
    const VALUE_T = Symbol('value');
    const [input] = await Promise.allSettled([Promise.resolve(VALUE_T)]);
    t.is(input.status, 'fulfilled');

    const actual = fromPromiseSettledResultToResult(input);
    t.true(isOk(actual), 'should be Ok');
    t.is(unwrapOkFromResult(actual), VALUE_T, 'should be the wrapped value');
});

test('should be Err(T)', async (t) => {
    const VALUE_E = Symbol('error');
    const [input] = await Promise.allSettled([Promise.reject(VALUE_E)]);
    t.is(input.status, 'rejected');

    const actual = fromPromiseSettledResultToResult(input);
    t.true(isErr(actual), 'should be Ok');
    t.is(unwrapErrFromResult(actual), VALUE_E, 'should be the wrapped value');
});

test('should throw error if the input is not supported type', async (t) => {
    const status = `unknown_${Math.random()}`;
    const unknownPromiseSettledResult = {
        status,
    };

    t.throws(
        () => {
            fromPromiseSettledResultToResult(unknownPromiseSettledResult);
        },
        {
            instanceOf: TypeError,
            message: `\`PromiseSettledResult.status=${status}\` is not supported`,
        },
    );
});
