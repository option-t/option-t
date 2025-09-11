import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { inspectOkForResult } from 'option-t/plain_result/inspect';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createErr, createOk } from 'option-t/plain_result/result';

test('input is Ok()', (t) => {
    t.plan(3);
    const INPUT_INNER = Symbol('input');

    const input = createOk(INPUT_INNER);
    const actual = inspectOkForResult(input, (v) => {
        t.pass('should call the inspect fn');
        t.is(v, INPUT_INNER, 'should be the expected arg');
    });

    t.is(input, actual, 'should be the expect returned');
});

test('input is Err()', (t) => {
    t.plan(1);
    const INPUT_INNER = Symbol('input');

    const input = createErr(INPUT_INNER);
    const actual = inspectOkForResult(input, (_v) => {
        t.pass('should not call the inspect fn');
    });

    t.is(input, actual, 'should be the expect returned');
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.inspectOkForResult, inspectOkForResult);
    t.is(PlainResultRoot.ResultOperator.inspectOk, inspectOkForResult);
    t.is(PlainResultNamespace.inspectOk, inspectOkForResult);
    t.is(PlainResultCompatV54.inspectOkForResult, inspectOkForResult);
});
