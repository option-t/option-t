import test from 'ava';

import { orElseAsyncForMaybe } from 'option-t/maybe/or_else_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

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
}
