import test from 'ava';

import { unwrapOrFromUndefinable } from '../../__dist/esm/Undefinable/unwrapOr.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('pass the value' + String(value), (t) => {
        const DEFAULT_VAL = Math.random();
        const EXPECTED = value;
        let result;
        let e = null;
        try {
            result = unwrapOrFromUndefinable(EXPECTED, DEFAULT_VAL);
        } catch (expected) {
            e = expected;
        }

        t.is(result, EXPECTED, 'should the expected result');
        t.is(e, null, 'should not throw error');
    });
}

test('pass null', (t) => {
    const DEFAULT_VAL = Math.random();
    const result = unwrapOrFromUndefinable(null, DEFAULT_VAL);

    t.is(result, null, 'should be the default');
});

test('pass undefined', (t) => {
    const DEFAULT_VAL = Math.random();
    const result = unwrapOrFromUndefinable(undefined, DEFAULT_VAL);
    t.is(result, DEFAULT_VAL, 'should be the default');
});

{
    const testcases = [[undefined, undefined]];
    for (const [src, def] of testcases) {
        const label = `v = ${String(src)}, def = ${String(def)}`;
        test('should not accept undefined as default: ' + label, (t) => {
            t.throws(
                () => {
                    unwrapOrFromUndefinable(src, def);
                },
                { instanceOf: TypeError, message: '`defaultValue` must not be `undefined`' }
            );
        });
    }
}
