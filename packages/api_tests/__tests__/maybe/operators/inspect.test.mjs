import test from 'ava';

import { inspectMaybe } from 'option-t/maybe/inspect';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(3);

        const actual = inspectMaybe(INPUT, (v) => {
            t.pass('should call the selector');
            t.is(v, PASSED_VALUE, 'the arg is the input');
        });

        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const result = inspectMaybe(NULL_VALUE, (_v) => {
            t.fail('should not call selector fn');
        });

        t.is(result, NULL_VALUE);
    });
}
