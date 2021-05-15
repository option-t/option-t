import test from 'ava';

import { andThenAsyncForMaybe } from '../../__dist/esm/Maybe/andThenAsync.mjs';
import { nonNullableValueCaseListForAsync } from '../utils.mjs';

for (const [INPUT, PASSED_EXPECTED, FINAL_EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(4);

        const result = andThenAsyncForMaybe(INPUT, async (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_EXPECTED);
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');

        const actual = await result;
        t.is(actual, FINAL_EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, async (t) => {
        t.plan(2);

        const result = andThenAsyncForMaybe(NULL_VALUE, async (_v) => {
            t.fail('should not call selector fn');
            return Math.random();
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, NULL_VALUE);
    });

    test(`input is ${NULL_VALUE}, callback should return Promise`, async (t) => {
        t.plan(2);

        await t.throwsAsync(
            async () => {
                const input = Math.random();
                await andThenAsyncForMaybe(input, (_input) => {
                    t.pass('should be called');
                    return 1;
                });
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must return Promise',
            }
        );
    });
}
