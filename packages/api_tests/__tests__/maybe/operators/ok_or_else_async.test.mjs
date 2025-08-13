import test from 'ava';

import { okOrElseAsyncForMaybe } from 'option-t/maybe/ok_or_else_async';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), async (t) => {
        t.plan(3);

        const result = okOrElseAsyncForMaybe(EXPECTED, async () => {
            t.fail('should not call recover fn');
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, async (t) => {
        t.plan(4);

        const result = okOrElseAsyncForMaybe(NULL_VALUE, async () => {
            t.pass('should call recover fn');
            return DEFAULT_ERR;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.true(isErr(actual), 'should be Err(E)');
        t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
    });
}
