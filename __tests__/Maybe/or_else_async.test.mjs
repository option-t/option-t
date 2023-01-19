import test from 'ava';

import { orElseAsyncForMaybe } from '../../__dist/esm/Maybe/orElseAsync.js';
import { nonNullableValueCaseListForAsync } from '../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value ' + String(INPUT), async (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = orElseAsyncForMaybe(INPUT, async () => {
            t.fail('should not call');
            return DEFAULT_VAL;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, async (t) => {
        t.plan(3);

        const DEFAULT_VAL = Math.random();
        const result = orElseAsyncForMaybe(NULL_VALUE, async () => {
            t.pass('should call recover fn');
            return DEFAULT_VAL;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, DEFAULT_VAL);
    });

    test(`input is ${NULL_VALUE}, callback should return Promise`, async (t) => {
        t.plan(2);

        await t.throwsAsync(
            async () => {
                await orElseAsyncForMaybe(NULL_VALUE, () => {
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
