import test from 'ava';

import { zipWithForMaybe } from 'option-t/maybe/zip_with';

const SOME_VAL_A = `a_${Math.random()}`;
const SOME_VAL_B = `b_${Math.random()}`;
const EXPECTED_RESULT_VALUE = `${SOME_VAL_A}__${SOME_VAL_B}`;

function testCase(a, b, expected) {
    return {
        a,
        b,
        expected,
    };
}

const SOME_VALUE_PATTERN = [testCase(SOME_VAL_A, SOME_VAL_B, EXPECTED_RESULT_VALUE)];

for (const { a, b, expected } of SOME_VALUE_PATTERN) {
    test(`a=${String(a)}, b=${String(b)}`, (t) => {
        t.plan(4);

        const actual = zipWithForMaybe(a, b, (passedA, passedB) => {
            t.is(a, passedA, 'passed a is expected');
            t.is(b, passedB, 'passed b is expected');
            t.pass('called the callback');
            return expected;
        });
        t.is(actual, expected, 'should be `' + String(expected) + '`');
    });
}

const NO_VALUE_PATTERN = [
    testCase(SOME_VAL_A, null, undefined),
    testCase(SOME_VAL_A, undefined, undefined),
    testCase(null, SOME_VAL_B, undefined),
    testCase(undefined, SOME_VAL_B, undefined),
    testCase(null, null, undefined),
    testCase(undefined, undefined, undefined),
    testCase(null, undefined, undefined),
    testCase(undefined, null, undefined),
];

for (const { a, b, expected } of NO_VALUE_PATTERN) {
    test(`a=${String(a)}, b=${String(b)}`, (t) => {
        t.plan(1);

        const actual = zipWithForMaybe(a, b, (_a, _b) => {
            t.fail('do not call the callback at here');
        });
        t.is(actual, expected, 'should be `' + String(expected) + '`');
    });
}

for (const nullValue of [null, undefined]) {
    test(`should throw if the callback return ${nullValue}`, (t) => {
        t.plan(2);
        const a = Math.random();
        const b = Math.random();

        t.throws(
            () => {
                zipWithForMaybe(a, b, (_a, _b) => {
                    t.pass('this must be called');
                    return nullValue;
                });
                t.fail('do not enter here');
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must not return `null` or `undefined`',
            },
        );
    });
}
