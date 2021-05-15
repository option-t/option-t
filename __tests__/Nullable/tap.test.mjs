import test from 'ava';

import { tapNullable } from '../../__dist/esm/Nullable/tap.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const input of nonNullableValue) {
    test('pass the value: ' + String(input), (t) => {
        t.plan(3);

        const result = tapNullable(input, (v) => {
            t.pass();
            t.is(v, input, 'the arg is input');
        });

        t.is(result, input);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const result = tapNullable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.fail();
    });
    t.is(result, NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(3);

    const INPUT = NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE;
    const result = tapNullable(INPUT, (v) => {
        t.pass();
        t.is(v, INPUT, 'the arg is INPUT');
    });

    t.is(result, INPUT);
});
