import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { toNullableFromMaybe } from 'option-t/maybe/to_nullable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toNullableFromMaybe(INPUT);
        t.is(actual, EXPECTED, 'should the expected result');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const actual = toNullableFromMaybe(NULL_VALUE);
        t.is(actual, null);
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.MaybeOperator.toNullable, toNullableFromMaybe);
    t.is(MaybeNamespace.toNullable, toNullableFromMaybe);
    t.is(MaybeRootCompatV54.toNullableFromMaybe, toNullableFromMaybe);
});
