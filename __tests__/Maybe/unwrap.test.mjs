import test from 'ava';

import { unwrapMaybe } from '../../__dist/esm/Maybe/unwrap.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('value:' + String(value), (t) => {
        t.plan(2);

        const EXPECTED = value;

        let result;
        t.notThrows(() => {
            result = unwrapMaybe(EXPECTED);
        });

        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(1);

        t.throws(
            () => {
                unwrapMaybe(NULL_VALUE);
            },
            { instanceOf: TypeError, message: 'called with `null` or `undefined`' }
        );
    });
}
