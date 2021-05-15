import test from 'ava';

import { andThenForNullable } from '../../__dist/esm/Nullable/andThen.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const value of nonNullableValue) {
    const EXPECTED = value;

    test(`pass : ${String(value)}`, (t) => {
        t.plan(3);

        const result = andThenForNullable(EXPECTED, (v) => {
            t.pass();
            t.is(v, EXPECTED);
            return v;
        });

        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const DEFAULT_VAL = Symbol('');
    const result = andThenForNullable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.fail();
        return DEFAULT_VAL;
    });

    t.is(result, NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const result = andThenForNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, (v) => {
        t.pass();
        return v;
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});
