import test from 'ava';

import { unzipForNullable } from 'option-t/Nullable/unzip';

const SOME_VAL_A = `a: ${Math.random()}`;
const SOME_VAL_B = `b: ${Math.random()}`;

function testCase(input, expected) {
    return {
        input,
        expected,
    };
}

const TABLE = [
    testCase(null, [null, null]),
    testCase([SOME_VAL_A, SOME_VAL_B], [SOME_VAL_A, SOME_VAL_B]),
    testCase([undefined, undefined], [undefined, undefined]),
];

for (const { input, expected } of TABLE) {
    test(`input=${JSON.stringify(input)}`, (t) => {
        const actual = unzipForNullable(input);
        t.deepEqual(actual, expected, 'should be `' + String(expected) + '`');
    });
}

const FAILURE_INPUT_CASES = [
    // @prettier-ignore
    undefined,
    { a: SOME_VAL_A, b: SOME_VAL_B },
    Math.random(),
    '',
];

for (const input of FAILURE_INPUT_CASES) {
    test(`input=${JSON.stringify(input)}`, (t) => {
        t.throws(
            () => {
                unzipForNullable(input);
            },
            {
                instanceOf: TypeError,
                message: `input must be tuple array`,
            }
        );
    });
}
