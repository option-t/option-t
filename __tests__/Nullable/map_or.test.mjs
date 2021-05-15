import test from 'ava';

import { mapOrForNullable } from '../../__dist/esm/Nullable/mapOr.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const value of nonNullableValue) {
    test('pass the value: ' + String(value), (t) => {
        t.plan(3);

        const EXPECTED = value;

        const result = mapOrForNullable(EXPECTED, Symbol('def'), (v) => {
            t.pass('should call selector fn');
            t.is(v, EXPECTED);
            return v;
        });

        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrForNullable(NULL_VALUE_IN_THIS_TEST_CASE, DEFAULE_VAL, (_v) => {
        t.fail('should not call selector fn');
        return COMPUTED_VAL;
    });

    t.is(result, DEFAULE_VAL);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(3);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrForNullable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        DEFAULE_VAL,
        (v) => {
            t.pass('should call selector fn');
            t.is(v, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
            return COMPUTED_VAL;
        }
    );

    t.is(result, COMPUTED_VAL);
});

{
    const testcases = [[1, 2, NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that do not return Nullable<*> as the selector's result, v = ${String(
            src
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, (t) => {
            t.throws(
                () => {
                    mapOrForNullable(src, def, (_v) => selectorResult);
                },
                { instanceOf: TypeError, message: '`transformer` must not return `null`' }
            );
        });
    }
}

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE, '']];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that def is not Nullable<*>', v = ${String(src)}, def = ${String(
            def
        )}, selectorResult=${String(selectorResult)}`, (t) => {
            t.throws(
                () => {
                    mapOrForNullable(src, def, (_v) => selectorResult);
                },
                { instanceOf: TypeError, message: '`defaultValue` must not be `null`' }
            );
        });
    }
}
