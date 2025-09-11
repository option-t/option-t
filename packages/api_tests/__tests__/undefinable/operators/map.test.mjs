import test from 'ava';

import * as UndefinableRoot from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { mapForUndefinable } from 'option-t/undefinable/map';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(3);

        const result = mapForUndefinable(INPUT, (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE);
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
                { instanceOf: TypeError, message: '`transformer` must not return `undefined`' },
            );
        });
    }
}

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableRoot.mapForUndefinable, mapForUndefinable);
    t.is(UndefinableRoot.UndefinableOperator.map, mapForUndefinable);
    t.is(UndefinableNamespace.map, mapForUndefinable);
    t.is(UndefinableRootCompatV54.mapForUndefinable, mapForUndefinable);
});
