import test from 'ava';

import { MaybeOperator } from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { unwrapOrElseForMaybe } from 'option-t/maybe/unwrap_or_else';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(2);

        let actual;
        t.notThrows(() => {
            actual = unwrapOrElseForMaybe(INPUT, () => {
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
        const result = unwrapOrElseForMaybe(NULL_VALUE, () => {
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
                    unwrapOrElseForMaybe(NULL_VALUE, () => {
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

test(`exported alias' identity check`, (t) => {
    t.is(MaybeOperator.unwrapOrElse, unwrapOrElseForMaybe);
    t.is(MaybeNamespace.unwrapOrElse, unwrapOrElseForMaybe);
    t.is(MaybeRootCompatV54.unwrapOrElseForMaybe, unwrapOrElseForMaybe);
});
