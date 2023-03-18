import test from 'ava';

import { okOrElseAsyncForMaybe } from 'option-t/Maybe/okOrElseAsync';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/PlainResult/Result';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

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

    test(`input is ${NULL_VALUE}, callback should return Promise`, async (t) => {
        t.plan(2);

        await t.throwsAsync(
            async () => {
                await okOrElseAsyncForMaybe(NULL_VALUE, () => {
                    t.pass('should be called');
                    return 1;
                });
            },
            {
                instanceOf: TypeError,
                message: '`recoverer` must return Promise',
            }
        );
    });
}