import test from 'ava';

import { orElseForMaybe } from '../../__dist/esm/Maybe/orElse.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('value:' + String(value), (t) => {
        t.plan(1);

        const DEFAULT_VAL = Math.random();
        const EXPECTED = value;

        const result = orElseForMaybe(EXPECTED, () => {
            t.fail('should not call recover fn');
            return DEFAULT_VAL;
        });
        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = orElseForMaybe(NULL_VALUE, () => {
            t.pass('should call recover fn');
            return DEFAULT_VAL;
        });

        t.is(result, DEFAULT_VAL);
    });
}
