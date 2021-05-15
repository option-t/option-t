import test from 'ava';

import { mapOrElseForUndefinable } from '../../__dist/esm/Undefinable/mapOrElse.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const value of nonNullableValue) {
    test('pass the value' + String(value), (t) => {
        const DEFAULT_VAL = Symbol('def');
        const EXPECTED = value;

        t.plan(2);

        const result = mapOrElseForUndefinable(
            EXPECTED,
            () => DEFAULT_VAL,
            (v) => {
                t.pass('should call selector fn');
                return v;
            }
        );

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test('pass null', (t) => {
    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');

    t.plan(2);

    const result = mapOrElseForUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        () => DEFAULE_VAL,
        (_v) => {
            t.pass('should call selector fn');
            return COMPUTED_VAL;
        }
    );

    t.is(result, COMPUTED_VAL, 'should be the expected');
});

test('pass undefined', (t) => {
    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');

    t.plan(1);

    const result = mapOrElseForUndefinable(
        NULL_VALUE_IN_THIS_TEST_CASE,
        () => DEFAULE_VAL,
        (_v) => {
            t.pass('should not call selector fn');

            return COMPUTED_VAL;
        }
    );

    t.is(result, DEFAULE_VAL, 'should be the expected');
});

{
    const testcases = [[1, 2, NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def, selectorResult] of testcases) {
        const LABEL = `v = ${String(src)}, def = ${String(def)}, selectorResult=${String(
            selectorResult
        )}`;

        test("assert that do not return Undefinable<*> as the selector's result: " + LABEL, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    mapOrElseForUndefinable(
                        src,
                        () => def,
                        (_v) => selectorResult
                    );
                },
                { instanceOf: TypeError, message: '`transformer` must not return `undefined`' }
            );
        });
    }
}

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE, Math.random()]];
    for (const [src, def, selectorResult] of testcases) {
        const LABEL = `v = ${String(src)}, def = ${String(def)}, selectorResult=${String(
            selectorResult
        )}`;

        test('assert that def is not Undefinable<*>: ' + LABEL, (t) => {
            t.plan(1);

            t.throws(
                () => {
                    mapOrElseForUndefinable(
                        src,
                        () => def,
                        (_v) => selectorResult
                    );
                },
                { instanceOf: TypeError, message: '`recoverer` must not return `undefined`' }
            );
        });
    }
}
