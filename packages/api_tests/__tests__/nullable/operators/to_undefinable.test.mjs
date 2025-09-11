import test from 'ava';

import * as NullableRoot from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { toUndefinableFromNullable } from 'option-t/nullable/to_undefinable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toUndefinableFromNullable(INPUT);
        t.is(actual, EXPECTED, 'should the expected result');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const actual = toUndefinableFromNullable(NULL_VALUE);
        t.is(actual, undefined);
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(NullableRoot.NullableOperator.toUndefinable, toUndefinableFromNullable);
    t.is(NullableNamespace.toUndefinable, toUndefinableFromNullable);
    t.is(NullableRootCompatV54.toUndefinableFromNullable, toUndefinableFromNullable);
});
