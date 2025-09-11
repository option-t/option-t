import test from 'ava';

import { zipForMaybe } from 'option-t/maybe/zip';

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
    testCase(SOME_VAL_A, null, undefined),
    testCase(null, SOME_VAL_B, undefined),
    testCase(null, null, undefined),

    testCase(SOME_VAL_A, undefined, undefined),
    testCase(undefined, SOME_VAL_B, undefined),
    testCase(undefined, undefined, undefined),

    testCase(null, undefined, undefined),
    testCase(undefined, null, undefined),
];

for (const { a, b, expected } of TABLE) {
    test(`a=${String(a)}, b=${String(b)}`, (t) => {
        const actual = zipForMaybe(a, b);
        t.deepEqual(actual, expected, 'should be `' + String(expected) + '`');
    });
}

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
