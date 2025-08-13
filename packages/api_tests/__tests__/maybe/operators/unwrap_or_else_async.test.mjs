import test from 'ava';

import { unwrapOrElseAsyncForMaybe } from 'option-t/maybe/unwrap_or_else_async';
import { nonNullableValueCaseListForAsync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(2);

        const result = unwrapOrElseAsyncForMaybe(INPUT, () => {
            t.fail('should not call recover fn');
            return Math.random();
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, async (t) => {
        t.plan(3);

        const EXPECTED = Math.random();
        const result = unwrapOrElseAsyncForMaybe(NULL_VALUE, async () => {
            t.pass('should call recover fn');
            return EXPECTED;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });

    for (const FALLBACK_VALUE of [null, undefined]) {
        test(`should not accept Maybe<*> as default, v = ${String(NULL_VALUE)}, def = ${String(
            FALLBACK_VALUE,
        )}`, async (t) => {
            t.plan(2);

            await t.throwsAsync(
                async () => {
                    await unwrapOrElseAsyncForMaybe(NULL_VALUE, async () => {
                        t.pass('should be called');
                        return FALLBACK_VALUE;
                    });
                },
                {
                    instanceOf: TypeError,
                    message: '`recoverer` must not return `null` or `undefined`',
                },
            );
        });
    }
}
