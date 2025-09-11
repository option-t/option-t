import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import {
    createOk,
    createErr,
    expectErr as expectErrForResult,
    expectErr,
} from 'option-t/plain_result/result';

test('input=Ok(T), expect=Err(E)', (t) => {
    const NOT_EXPECTED = Symbol('not expected');

    const input = createOk(NOT_EXPECTED);

    const MSG = 'throw if the input is not expected';
    t.throws(
        () => {
            expectErrForResult(input, MSG);
        },
        {
            instanceOf: TypeError,
            message: MSG,
        },
    );
});

test('input=Err(E), expect=Err(E)', (t) => {
    const EXPECTED = Symbol('expected');

    const input = createErr(EXPECTED);

    let actual;
    t.notThrows(() => {
        actual = expectErrForResult(input, 'do not throw any errors');
    });

    t.is(actual, EXPECTED);
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.expectErr, expectErr);
    t.is(PlainResultNamespace.expectErr, expectErr);
    t.is(PlainResultCompatV54.expectErr, expectErr);
});
