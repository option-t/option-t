import test from 'ava';

import { UndefinableOperator } from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { toNullableFromUndefinable } from 'option-t/undefinable/to_nullable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toNullableFromUndefinable(INPUT);
        t.is(actual, EXPECTED, 'should the expected result');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const actual = toNullableFromUndefinable(NULL_VALUE);
        t.is(actual, null);
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableOperator.toNullable, toNullableFromUndefinable);
    t.is(UndefinableNamespace.toNullable, toNullableFromUndefinable);
    t.is(UndefinableRootCompatV54.toNullableFromUndefinable, toNullableFromUndefinable);
});
