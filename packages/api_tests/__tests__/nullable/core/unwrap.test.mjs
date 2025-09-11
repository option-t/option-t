import test from 'ava';

import * as NullableRoot from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { unwrapNullable } from 'option-t/nullable/nullable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(1);
        const result = unwrapNullable(INPUT);
        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.throws(
        () => {
            unwrapNullable(NULL_VALUE_IN_THIS_TEST_CASE);
        },
        { instanceOf: TypeError, message: 'called with `null`' },
    );
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    let result = Math.random();
    t.notThrows(() => {
        result = unwrapNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
    });
    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});

test(`exported alias' identity check`, (t) => {
    t.is(NullableRoot.unwrapNullable, unwrapNullable);
    t.is(NullableNamespace.unwrapNullable, unwrapNullable);
    t.is(NullableRootCompatV54.unwrapNullable, unwrapNullable);
});
