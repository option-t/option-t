import test from 'ava';

import { MaybeOperator } from 'option-t/maybe';
import { andThenAsyncForMaybe } from 'option-t/maybe/and_then_async';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

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
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeOperator.andThenAsync, andThenAsyncForMaybe);
    t.is(MaybeNamespace.andThenAsync, andThenAsyncForMaybe);
    t.is(MaybeRootCompatV54.andThenAsyncForMaybe, andThenAsyncForMaybe);
});
