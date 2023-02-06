import test from 'ava';

import { unwrapOrElseFromUndefinable } from 'option-t/esm/Undefinable/unwrapOrElse';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        let actual;
        t.notThrows(() => {
            actual = unwrapOrElseFromUndefinable(INPUT, () => {
                t.pass('should not call recover fn');
                return DEFAULT_VAL;
            });
        }, 'should not throw error');

        t.is(actual, EXPECTED, 'should the expected result');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();

    t.plan(1);

    const result = unwrapOrElseFromUndefinable(
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        () => {
            t.pass('should not call recover fn');
            return DEFAULT_VAL;
        }
    );

    t.is(result, NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, 'should the input result');
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    const DEFAULT_VAL = Math.random();

    t.plan(2);

    const result = unwrapOrElseFromUndefinable(NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.pass('should call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, DEFAULT_VAL, 'should be the default');
});

{
    const testcases = [[NULL_VALUE_IN_THIS_TEST_CASE, NULL_VALUE_IN_THIS_TEST_CASE]];
    for (const [src, def] of testcases) {
        const label = `v = ${String(src)}, def = ${String(def)}`;
        test('should not accept undefined as default: ' + label, (t) => {
            t.throws(
                () => {
                    unwrapOrElseFromUndefinable(src, () => def);
                },
                { instanceOf: TypeError, message: '`recoverer` must not return `undefined`' }
            );
        });
    }
}
