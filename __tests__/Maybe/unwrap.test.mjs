import test from 'ava';

import { unwrapMaybe } from '../../__dist/esm/Maybe/unwrap.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('value:' + String(value), (t) => {
        const EXPECTED = value;

        let result;
        t.notThrows(() => {
            result = unwrapMaybe(EXPECTED);
        });

        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    t.throws(
        () => {
            unwrapMaybe(null);
        },
        { instanceOf: TypeError, message: 'called with `null` or `undefined`' }
    );
});

test('pass undefined', (t) => {
    t.throws(
        () => {
            unwrapMaybe(undefined);
        },
        { instanceOf: TypeError, message: 'called with `null` or `undefined`' }
    );
});
