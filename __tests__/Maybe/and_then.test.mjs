import test from 'ava';

import { andThenForMaybe } from '../../__dist/esm/Maybe/andThen.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('pass the value: ' + String(value), (t) => {
        t.plan(2);

        const EXPECTED = value;
        const result = andThenForMaybe(EXPECTED, (v) => {
            t.pass('should call selector fn');
            return v;
        });

        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(1);

        const DEFAULT_VAL = Symbol('');
        const result = andThenForMaybe(NULL_VALUE, (_v) => {
            t.fail('should not call selector fn');
            return DEFAULT_VAL;
        });

        t.is(result, NULL_VALUE);
    });
}
