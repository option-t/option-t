import test from 'ava';

import { unwrapOrElseForNullable } from 'option-t/nullable/unwrap_or_else';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        let result;
        t.notThrows(() => {
            result = unwrapOrElseForNullable(INPUT, () => {
                t.fail('should not call recover fn');
                return DEFAULT_VAL;
            });
        });

        t.is(result, EXPECTED);
    });
}

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();
    const result = unwrapOrElseForNullable(NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.pass('should call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, DEFAULT_VAL);
});

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(1);

    const DEFAULT_VAL = Math.random();
    const result = unwrapOrElseForNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.fail('should not call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE);
});

const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE]];
for (const [src, def] of testcases) {
    test(`should not accept Maybe<*> as default, v = ${String(src)}, def = ${String(def)}`, (t) => {
        t.throws(
            () => {
                unwrapOrElseForNullable(src, () => def);
            },
            { instanceOf: TypeError, message: '`recoverer` must not return `null`' },
        );
    });
}
