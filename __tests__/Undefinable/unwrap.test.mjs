import test from 'ava';

import { unwrapUndefinable } from '../../__dist/esm/Undefinable/unwrap.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const value of nonNullableValue) {
    test('pass the value' + String(value), (t) => {
        t.plan(2);

        const EXPECTED = value;
        let result;
        t.notThrows(() => {
            result = unwrapUndefinable(EXPECTED);
        }, 'should not throw error');

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    let result = Math.random();
    t.notThrows(() => {
        result = unwrapUndefinable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
    }, 'should not throw error');

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should the expected result');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    t.throws(
        () => {
            unwrapUndefinable(NULL_VALUE_IN_THIS_TEST_CASE);
        },
        {
            instanceOf: TypeError,
            message: 'called with `undefined`',
        }
    );
});
