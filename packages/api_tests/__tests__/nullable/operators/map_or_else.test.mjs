import test from 'ava';

import { NullableOperator } from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { mapOrElseForNullable } from 'option-t/nullable/map_or_else';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(2);

        const DEFAULT_VAL = Symbol('def');

        const result = mapOrElseForNullable(
            INPUT,
            () => {
                t.fail('do not call here');
                return DEFAULT_VAL;
            },
            (v) => {
                t.is(v, EXPECTED, 'the arg is the input');
                return v;
            },
        );

        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    t.plan(1);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrElseForNullable(
        NULL_VALUE_IN_THIS_TEST_CASE,
        () => DEFAULE_VAL,
        (_v) => {
            t.fail('do not call this');
            return COMPUTED_VAL;
        },
    );

    t.is(result, DEFAULE_VAL);
});

test('pass undefined', (t) => {
    t.plan(2);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');

    const result = mapOrElseForNullable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        () => DEFAULE_VAL,
        (v) => {
            t.is(v, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
            return COMPUTED_VAL;
        },
    );

    t.is(result, COMPUTED_VAL);
});

{
    const testcases = [[1, 2, NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that do not return Nullable<*> as the selector's result: v = ${String(
            src,
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, (t) => {
            t.throws(
                () => {
                    mapOrElseForNullable(
                        src,
                        () => def,
                        (_v) => selectorResult,
                    );
                },
                { instanceOf: TypeError, message: '`transformer` must not return `null`' },
            );
        });
    }
}

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE, '']];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that def is not Nullable<*>: v = ${String(src)}, def = ${String(
            def,
        )}, selectorResult=${String(selectorResult)}`, (t) => {
            t.throws(
                () => {
                    mapOrElseForNullable(
                        src,
                        () => def,
                        (_v) => selectorResult,
                    );
                },
                { instanceOf: TypeError, message: '`recoverer` must not return `null`' },
            );
        });
    }
}

test(`exported alias' identity check`, (t) => {
    t.is(NullableOperator.mapOrElse, mapOrElseForNullable);
    t.is(NullableNamespace.mapOrElse, mapOrElseForNullable);
    t.is(NullableRootCompatV54.mapOrElseForNullable, mapOrElseForNullable);
});
