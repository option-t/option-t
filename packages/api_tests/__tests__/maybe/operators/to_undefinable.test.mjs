import test from 'ava';

import { MaybeOperator } from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { toUndefinableFromMaybe } from 'option-t/maybe/to_undefinable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toUndefinableFromMaybe(INPUT);
        t.is(actual, EXPECTED, 'should the expected result');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const actual = toUndefinableFromMaybe(NULL_VALUE);
        t.is(actual, undefined);
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeOperator.toUndefinable, toUndefinableFromMaybe);
    t.is(MaybeNamespace.toUndefinable, toUndefinableFromMaybe);
    t.is(MaybeRootCompatV54.toUndefinableFromMaybe, toUndefinableFromMaybe);
});
