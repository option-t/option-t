import test from 'ava';

const { unwrapMaybe } = require('../../__dist/cjs/Maybe/unwrap');
const { nonNullableValue } = require('../utils');

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
    t.throws(() => {
        unwrapMaybe(null);
    }, TypeError);
});

test('pass undefined', (t) => {
    t.throws(() => {
        unwrapMaybe(undefined);
    }, TypeError);
});
