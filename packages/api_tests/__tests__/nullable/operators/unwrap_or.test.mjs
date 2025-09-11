import test from 'ava';

import * as NullableRoot from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { unwrapOrForNullable } from 'option-t/nullable/unwrap_or';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        const DEFAULT_VAL = Math.random();
        const result = unwrapOrForNullable(INPUT, DEFAULT_VAL);
        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();
    const result = unwrapOrForNullable(NULL_VALUE_IN_THIS_TEST_CASE, DEFAULT_VAL);

    t.is(result, DEFAULT_VAL);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();
    const result = unwrapOrForNullable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        DEFAULT_VAL,
    );

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});

const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE]];
for (const [src, def] of testcases) {
    test(`should not accept null for both, v = ${String(src)}, def = ${String(def)}`, (t) => {
        t.plan(1);

        t.throws(
            () => {
                unwrapOrForNullable(src, def);
            },
            { instanceOf: TypeError, message: '`defaultValue` must not be `null`' },
        );
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(NullableRoot.NullableOperator.unwrapOr, unwrapOrForNullable);
    t.is(NullableNamespace.unwrapOr, unwrapOrForNullable);
    t.is(NullableRootCompatV54.unwrapOrForNullable, unwrapOrForNullable);
});
