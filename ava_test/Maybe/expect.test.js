import test from 'ava';

const { expectNotNullAndUndefined } = require('../../__dist/cjs/Maybe/expect');
const { nonNullableValue } = require('../utils');

for (const value of nonNullableValue) {
    test('pass the value: ' + String(value), (t) => {
        const EXPECTED = value;
        const EXPECTED_MSG = 'expected test';
        let result;
        t.notThrows(() => {
            result = expectNotNullAndUndefined(EXPECTED, EXPECTED_MSG);
        });
        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    const EXPECTED_MSG = 'expected test';
    t.throws(() => {
        expectNotNullAndUndefined(null, EXPECTED_MSG);
    }, {
        instanceOf: TypeError,
        message: EXPECTED_MSG
    });
});

test('pass undefined', (t) => {
    const EXPECTED_MSG = 'expected test';
    t.throws(() => {
        expectNotNullAndUndefined(undefined, EXPECTED_MSG);
    }, {
        instanceOf: TypeError,
        message: EXPECTED_MSG
    });
});
