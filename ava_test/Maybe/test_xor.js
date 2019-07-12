import test from 'ava';

import { xorForMaybe } from '../../__dist/cjs/Maybe/xor';

const SOME_VAL_A = Symbol('some_val_a');
const SOME_VAL_B = Symbol('some_val_b');

function testCase(a, b, expected) {
    return {
        a,
        b,
        expected,
    };
}

const TABLE = [
    testCase(SOME_VAL_A, SOME_VAL_B, null),
    testCase(SOME_VAL_A, null, SOME_VAL_A),
    testCase(null, SOME_VAL_B, SOME_VAL_B),
    testCase(null, null, null),

    testCase(SOME_VAL_A, undefined, SOME_VAL_A),
    testCase(undefined, SOME_VAL_B, SOME_VAL_B),
    testCase(undefined, undefined, null),

    testCase(null, undefined, null),
    testCase(undefined, null, null),
];

for (const { a, b, expected } of TABLE) {
    test.skip(`a=${String(a)}, b=${String(b)}`, (t) => {

        const actual = xorForMaybe(a, b);
        t.is(actual, expected, 'should be `' + String(expected) + '`');
    });
}
