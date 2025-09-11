import test from 'ava';

import * as UndefinableRoot from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { unwrapUndefinable } from 'option-t/undefinable/undefinable';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        let result;
        t.notThrows(() => {
            result = unwrapUndefinable(INPUT);
        }, 'should not throw error');

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    let result = Math.random();
    t.notThrows(() => {
        result = unwrapUndefinable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
    }, 'should not throw error');

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should the expected result');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    t.throws(
        () => {
            unwrapUndefinable(NULL_VALUE_IN_THIS_TEST_CASE);
        },
        {
            instanceOf: TypeError,
            message: 'called with `undefined`',
        },
    );
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableRoot.unwrapUndefinable, unwrapUndefinable);
    t.is(UndefinableNamespace.unwrapUndefinable, unwrapUndefinable);
    t.is(UndefinableRootCompatV54.unwrapUndefinable, unwrapUndefinable);
});
