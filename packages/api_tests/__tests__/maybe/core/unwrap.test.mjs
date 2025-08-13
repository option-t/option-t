import test from 'ava';

import { unwrapMaybe } from 'option-t/maybe/maybe';
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
