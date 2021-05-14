import test from 'ava';

import { unwrapUndefinable } from '../../__dist/esm/Undefinable/unwrap.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('pass the value' + String(value), (t) => {
        const EXPECTED = value;
        let result;
        let e = null;
        try {
            result = unwrapUndefinable(EXPECTED);
        } catch (expected) {
            e = expected;
        }

        t.is(result, EXPECTED, 'should the expected result');
        t.is(e, null, 'should not throw error');
    });
}

test('pass null', (t) => {
    t.plan(2);

    let result = Math.random();
    t.notThrows(() => {
        result = unwrapUndefinable(null);
    }, 'should not throw error');

    t.is(result, null, 'should the expected result');
});

test('pass undefined', (t) => {
    t.plan(1);

    t.throws(
        () => {
            unwrapUndefinable(undefined);
        },
        {
            instanceOf: TypeError,
            message: 'called with `undefined`',
        }
    );
});
