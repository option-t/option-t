import test from 'ava';

import { unwrapNullable } from '../../__dist/esm/Nullable/unwrap.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const value of nonNullableValue) {
    const EXPECTED = value;
    test('pass the value: ' + String(value), (t) => {
        t.plan(3);

        let result;
        t.not(result, EXPECTED);

        t.notThrows(() => {
            result = unwrapNullable(EXPECTED);
        });

        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.throws(
        () => {
            unwrapNullable(NULL_VALUE_IN_THIS_TEST_CASE);
        },
        { instanceOf: TypeError, message: 'called with `null`' }
    );
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    let result = Math.random();
    t.notThrows(() => {
        result = unwrapNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
    });
    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});
