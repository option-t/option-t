import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { unwrapMaybe } from 'option-t/maybe/maybe';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('value:' + String(INPUT), (t) => {
        t.plan(2);

        let actual;
        t.notThrows(() => {
            actual = unwrapMaybe(INPUT);
        });

        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(1);

        t.throws(
            () => {
                unwrapMaybe(NULL_VALUE);
            },
            { instanceOf: TypeError, message: 'called with `null` or `undefined`' },
        );
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.unwrapMaybe, unwrapMaybe);
    t.is(MaybeNamespace.unwrapMaybe, unwrapMaybe);
    t.is(MaybeRootCompatV54.unwrapMaybe, unwrapMaybe);
});
