import test from 'ava';

const { tapMaybe } = require('../../__dist/cjs/Maybe/tap');
const { nonNullableValue } = require('../utils');

for (const input of nonNullableValue) {
    test('pass the value: ' + String(input), (t) => {
        t.plan(3);

        const result = tapMaybe(input, (v) => {
            t.pass('should call the selector');
            t.is(v, input, 'the arg is the input');
        });

        t.is(result, input);
    });
}

test('pass null', (t) => {
    const result = tapMaybe(null, (_v) => {
        t.fail('should not call selector fn');
    });

    t.is(result, null);
});

test('pass undefined', (t) => {
    const result = tapMaybe(undefined, (_v) => {
        t.fail('should not call selector fn');
    });

    t.is(result, undefined);
});
