import test from 'ava';

import { unwrapOrElseFromUndefinable } from '../../__dist/esm/Undefinable/unwrapOrElse.mjs';
import { nonNullableValue } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = undefined;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = null;

for (const value of nonNullableValue) {
    test('pass the value' + String(value), (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const EXPECTED = value;
        let result;
        t.notThrows(() => {
            result = unwrapOrElseFromUndefinable(EXPECTED, () => {
                t.pass('should not call recover fn');
                return DEFAULT_VAL;
            });
        }, 'should not throw error');

        t.is(result, EXPECTED, 'should the expected result');
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
