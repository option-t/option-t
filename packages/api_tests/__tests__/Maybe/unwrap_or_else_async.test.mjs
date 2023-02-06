import test from 'ava';

import { unwrapOrElseAsyncFromMaybe } from 'option-t/esm/Maybe/unwrapOrElseAsync';
import { nonNullableValueCaseListForAsync } from '../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForAsync) {
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(2);

        const result = unwrapOrElseAsyncFromMaybe(INPUT, () => {
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
        const result = unwrapOrElseAsyncFromMaybe(NULL_VALUE, async () => {
            t.pass('should call recover fn');
            return EXPECTED;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED);
    });

    for (const FALLBACK_VALUE of [null, undefined]) {
        test(`should not accept Maybe<*> as default, v = ${String(NULL_VALUE)}, def = ${String(
            FALLBACK_VALUE
        )}`, async (t) => {
            t.plan(2);

            await t.throwsAsync(
                async () => {
                    await unwrapOrElseAsyncFromMaybe(NULL_VALUE, async () => {
                        t.pass('should be called');
                        return FALLBACK_VALUE;
                    });
                },
                {
                    instanceOf: TypeError,
                    message: '`recoverer` must not return `null` or `undefined`',
                }
            );
        });
    }

    test(`input is ${NULL_VALUE}: callback should return Promise`, async (t) => {
        t.plan(2);

        await t.throwsAsync(
            async () => {
                await unwrapOrElseAsyncFromMaybe(NULL_VALUE, () => {
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
}
