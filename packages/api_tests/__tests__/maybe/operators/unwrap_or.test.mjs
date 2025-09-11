import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { unwrapOrForMaybe } from 'option-t/maybe/unwrap_or';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        let actual;
        t.notThrows(() => {
            actual = unwrapOrForMaybe(INPUT, DEFAULT_VAL);
        });

        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const DEFAULT_VAL = Math.random();
        const result = unwrapOrForMaybe(NULL_VALUE, DEFAULT_VAL);

        t.is(result, DEFAULT_VAL);
    });
}

{
    const testcases = [
        [undefined, undefined],
        [undefined, null],
        [null, undefined],
        [null, null],
    ];
    for (const [src, def] of testcases) {
        test(`should not accept Maybe<*> as default, v = ${String(src)}, def = ${String(
            def,
        )}`, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    unwrapOrForMaybe(src, def);
                },
                {
                    instanceOf: TypeError,
                    message: '`defaultValue` must not be `null` or `undefined`',
                },
            );
        });
    }
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.MaybeOperator.unwrapOr, unwrapOrForMaybe);
    t.is(MaybeNamespace.unwrapOr, unwrapOrForMaybe);
    t.is(MaybeRootCompatV54.unwrapOrForMaybe, unwrapOrForMaybe);
});
