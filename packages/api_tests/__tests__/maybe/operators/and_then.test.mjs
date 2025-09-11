import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import { andThenForMaybe } from 'option-t/maybe/and_then';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(3);

        const result = andThenForMaybe(INPUT, (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE);
            return v;
        });

        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(1);

        const DEFAULT_VAL = Symbol('');
        const result = andThenForMaybe(NULL_VALUE, (_v) => {
            t.fail('should not call selector fn');
            return DEFAULT_VAL;
        });

        t.is(result, NULL_VALUE);
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.MaybeOperator.andThen, andThenForMaybe);
    t.is(MaybeNamespace.andThen, andThenForMaybe);
    t.is(MaybeRootCompatV54.andThenForMaybe, andThenForMaybe);
});
