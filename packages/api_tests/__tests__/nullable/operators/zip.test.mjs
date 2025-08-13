import test from 'ava';

import { zipForNullable } from 'option-t/nullable/zip';

const SOME_VAL_A = `a: ${Math.random()}`;
const SOME_VAL_B = `b: ${Math.random()}`;

function testCase(a, b, expected) {
    return {
        a,
        b,
        expected,
    };
}

const TABLE = [
    testCase(SOME_VAL_A, SOME_VAL_B, [SOME_VAL_A, SOME_VAL_B]),
    testCase(SOME_VAL_A, null, null),
    testCase(null, SOME_VAL_B, null),
    testCase(null, null, null),

    testCase(undefined, undefined, [undefined, undefined]),
    testCase(undefined, null, null),
    testCase(null, undefined, null),
];

for (const { a, b, expected } of TABLE) {
    test(`a=${String(a)}, b=${String(b)}`, (t) => {
        const actual = zipForNullable(a, b);
        t.deepEqual(actual, expected, 'should be `' + String(expected) + '`');
    });
}
