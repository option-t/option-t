import test from 'ava';

import { mapForUndefinable } from '../../__dist/esm/Undefinable/map.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const value of nonNullableValue) {
    test('pass the value' + String(value), (t) => {
        const EXPECTED = value;

        t.plan(2);

        const result = mapForUndefinable(EXPECTED, (v) => {
            t.pass('should call selector fn');
            return v;
        });
        t.is(result, EXPECTED, 'should the expected result');
    });
}

test('pass null', (t) => {
    t.plan(2);

    const result = mapForUndefinable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, (v) => {
        t.pass('should call selector fn');
        return v;
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should the expected result');
});

test('pass undefined', (t) => {
    t.plan(1);
    const actual = mapForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, (_v) => {
        t.fail('should not call selector fn');
    });
    t.is(actual, NULL_VALUE_IN_THIS_TEST_CASE);
});

{
    const testcases = [[Math.random(), NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def] of testcases) {
        const label = `v = ${String(src)}, def = ${String(def)}`;
        test("assert that do not return Undefinable<*> as the selector's result: " + label, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    mapForUndefinable(src, (_v) => def);
                },
                { instanceOf: TypeError, message: '`transformer` must not return `undefined`' }
            );
        });
    }
}
