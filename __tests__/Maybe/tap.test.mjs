import test from 'ava';

import { tapMaybe } from '../../__dist/esm/Maybe/tap.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const input of nonNullableValue) {
    test('pass the value: ' + String(input), (t) => {
        t.plan(3);

        const result = tapMaybe(input, (v) => {
            t.pass('should call the selector');
            t.is(v, input, 'the arg is the input');
        });

        t.is(result, input);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const result = tapMaybe(NULL_VALUE, (_v) => {
            t.fail('should not call selector fn');
        });

        t.is(result, NULL_VALUE);
    });
}
