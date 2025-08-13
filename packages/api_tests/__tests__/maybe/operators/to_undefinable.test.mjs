import test from 'ava';

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
