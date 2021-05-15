import test from 'ava';

import { mapForNullable } from '../../__dist/esm/Nullable/map.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const value of nonNullableValue) {
    test('pass the value:  ' + String(value), (t) => {
        t.plan(3);

        const EXPECTED = value;

        const result = mapForNullable(EXPECTED, (v) => {
            t.pass();
            t.is(v, EXPECTED, 'the arg is the input');
            return v;
        });

        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const actual = mapForNullable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.fail('do not call this');
    });
    t.is(actual, NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const result = mapForNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, (v) => {
        t.pass();
        return v;
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});

const testcases = [[1, NULL_VALUE_IN_THIS_TEST_CASE]];
for (const [src, def] of testcases) {
    test(`assert that do not return Nullable<*> as the selector's result, v = ${String(
        src
    )}, def = ${String(def)}`, (t) => {
        t.throws(
            () => {
                mapForNullable(src, (_v) => def);
            },
            { instanceOf: TypeError, message: '`transformer` must not return `null`' }
        );
    });
}
