import test from 'ava';

import { zipWithAsyncForNullable } from 'option-t/nullable/zip_with_async';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

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

const SOME_VALUE_PATTERN = [
    testCase(SOME_VAL_A, SOME_VAL_B, EXPECTED_RESULT_VALUE),
    testCase(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        EXPECTED_RESULT_VALUE,
    ),
];

for (const { a, b, expected } of SOME_VALUE_PATTERN) {
    test(`a=${String(a)}, b=${String(b)}`, async (t) => {
        t.plan(5);

        const result = zipWithAsyncForNullable(a, b, async (passedA, passedB) => {
            t.is(a, passedA, 'passed a is expected');
            t.is(b, passedB, 'passed b is expected');
            t.pass('called the callback');
            return expected;
        });

        t.true(result instanceof Promise, 'result should be Promise');

        const actual = await result;
        t.is(actual, expected, 'should be `' + String(expected) + '`');
    });
}

const NO_VALUE_PATTERN = [
    testCase(SOME_VAL_A, NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE),
    testCase(NULL_VALUE_IN_THIS_TEST_CASE, SOME_VAL_B, NULL_VALUE_IN_THIS_TEST_CASE),
    testCase(
        NULL_VALUE_IN_THIS_TEST_CASE,
        NULL_VALUE_IN_THIS_TEST_CASE,
        NULL_VALUE_IN_THIS_TEST_CASE,
    ),
    testCase(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        NULL_VALUE_IN_THIS_TEST_CASE,
        NULL_VALUE_IN_THIS_TEST_CASE,
    ),
    testCase(
        NULL_VALUE_IN_THIS_TEST_CASE,
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        NULL_VALUE_IN_THIS_TEST_CASE,
    ),
];

for (const { a, b, expected } of NO_VALUE_PATTERN) {
    test(`a=${String(a)}, b=${String(b)}`, async (t) => {
        t.plan(2);

        const result = zipWithAsyncForNullable(a, b, async (_a, _b) => {
            t.fail('do not call the callback at here');
        });

        t.true(result instanceof Promise, 'result should be Promise');

        const actual = await result;
        t.is(actual, expected, 'should be `' + String(expected) + '`');
    });
}

test(`should throw if the callback return ${NULL_VALUE_IN_THIS_TEST_CASE}`, async (t) => {
    t.plan(2);
    const a = Math.random();
    const b = Math.random();

    await t.throwsAsync(
        async () => {
            await zipWithAsyncForNullable(a, b, async (_a, _b) => {
                t.pass('this must be called');
                return null;
            });
            t.fail('do not enter here');
        },
        {
            instanceOf: TypeError,
            message: '`transformer` must not return `null`',
        },
    );
});

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
