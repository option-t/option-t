import test from 'ava';

import * as NullableRoot from 'option-t/nullable';
import { andThenForNullable } from 'option-t/nullable/and_then';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test(`pass : ${String(INPUT)}`, (t) => {
        t.plan(3);

        const actual = andThenForNullable(INPUT, (v) => {
            t.pass();
            t.is(v, PASSED_VALUE);
            return v;
        });

        t.is(actual, EXPECTED);
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

test(`exported alias' identity check`, (t) => {
    t.is(NullableRoot.NullableOperator.andThen, andThenForNullable);
    t.is(NullableNamespace.andThen, andThenForNullable);
    t.is(NullableRootCompatV54.andThenForNullable, andThenForNullable);
});
