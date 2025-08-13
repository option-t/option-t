import test from 'ava';

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
