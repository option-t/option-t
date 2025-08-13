import test from 'ava';

import { unwrapOrForUndefinable } from 'option-t/undefinable/unwrap_or';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        let result;
        t.notThrows(() => {
            result = unwrapOrForUndefinable(INPUT, DEFAULT_VAL);
        }, 'should not throw error');

        t.is(result, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();
    const result = unwrapOrForUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        DEFAULT_VAL,
    );

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should be the default');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();
    const result = unwrapOrForUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, DEFAULT_VAL);
    t.is(result, DEFAULT_VAL, 'should be the default');
});

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def] of testcases) {
        const label = `v = ${String(src)}, def = ${String(def)}`;
        test('should not accept undefined as default: ' + label, (t) => {
            t.throws(
                () => {
                    unwrapOrForUndefinable(src, def);
                },
                { instanceOf: TypeError, message: '`defaultValue` must not be `undefined`' },
            );
        });
    }
}
