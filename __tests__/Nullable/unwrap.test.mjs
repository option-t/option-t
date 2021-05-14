import test from 'ava';

import { unwrapNullable } from '../../__dist/esm/Nullable/unwrap.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    const EXPECTED = value;
    test('pass the value: ' + String(value), (t) => {
        let result;
        t.not(result, EXPECTED);

        t.notThrows(() => {
            result = unwrapNullable(EXPECTED);
        });

        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    t.throws(
        () => {
            unwrapNullable(null);
        },
        { instanceOf: TypeError, message: 'called with `null`' }
    );
});

test('pass undefined', (t) => {
    t.plan(2);

    let result = null;
    t.notThrows(() => {
        result = unwrapNullable(undefined);
    });
    t.is(result, undefined);
});
