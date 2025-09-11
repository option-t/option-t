import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { orElseForMaybe } from 'option-t/maybe/or_else';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('value:' + String(INPUT), (t) => {
        t.plan(1);
        const result = orElseForMaybe(INPUT, () => {
            t.fail('should not call recover fn');
            return Math.random();
        });
        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = orElseForMaybe(NULL_VALUE, () => {
            t.pass('should call recover fn');
            return DEFAULT_VAL;
        });

        t.is(result, DEFAULT_VAL);
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.orElseForMaybe, orElseForMaybe);
    t.is(MaybeRoot.MaybeOperator.orElse, orElseForMaybe);
    t.is(MaybeNamespace.orElse, orElseForMaybe);
    t.is(MaybeRootCompatV54.orElseForMaybe, orElseForMaybe);
});
