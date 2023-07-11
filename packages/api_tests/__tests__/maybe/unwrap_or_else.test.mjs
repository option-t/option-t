import test from 'ava';

import { unwrapOrElseFromMaybe } from 'option-t/Maybe/unwrapOrElse';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(2);

        let actual;
        t.notThrows(() => {
            actual = unwrapOrElseFromMaybe(INPUT, () => {
                t.fail('should not call recover fn');
                return Math.random();
            });
        });

        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = unwrapOrElseFromMaybe(NULL_VALUE, () => {
            t.pass('should call recover fn');
            return DEFAULT_VAL;
        });

        t.is(result, DEFAULT_VAL);
    });

    for (const FALLBACK_VALUE of [undefined, null]) {
        test(`should not accept Maybe<*> as default, v = ${String(NULL_VALUE)}, def = ${String(
            FALLBACK_VALUE,
        )}`, (t) => {
            t.plan(2);
            t.throws(
                () => {
                    unwrapOrElseFromMaybe(NULL_VALUE, () => {
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
