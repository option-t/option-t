import test from 'ava';

import { inspectBothForResult } from 'option-t/plain_result/inspect';
import { createErr, createOk } from 'option-t/plain_result/result';

test('input is Ok()', (t) => {
    t.plan(3);
    const INPUT_INNER = Symbol('input');

    const input = createOk(INPUT_INNER);
    const actual = inspectBothForResult(
        input,
        (v) => {
            t.pass('should call the inspect ok fn');
            t.is(v, INPUT_INNER, 'should be the expected arg');
        },
        (_e) => {
            t.fail('should not call this path');
        },
    );

    t.is(input, actual, 'should be the expect returned');
});

test('input is Err()', (t) => {
    t.plan(3);
    const INPUT_INNER = Symbol('input');

    const input = createErr(INPUT_INNER);
    const actual = inspectBothForResult(
        input,
        (_v) => {
            t.fail('should not call this path');
        },
        (e) => {
            t.pass('should call the inspect err fn');
            t.is(e, INPUT_INNER, 'should be the expected arg');
        },
    );

    t.is(input, actual, 'should be the expect returned');
});
