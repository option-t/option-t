import test from 'ava';

import * as PlainResultRoot from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr, expectOk } from 'option-t/plain_result/result';

test('input=Ok(T), expect=Ok(T)', (t) => {
    const EXPECTED = Symbol('expected');

    const input = createOk(EXPECTED);

    let actual;
    t.notThrows(() => {
        actual = expectOk(input, 'do not throw any errors');
    });

    t.is(actual, EXPECTED);
});

test('input=Err(E), expect=Ok(T)', (t) => {
    const NOT_EXPECTED = Symbol('not expected');

    const input = createErr(NOT_EXPECTED);

    const MSG = 'throw if the input is not expected';
    t.throws(
        () => {
            expectOk(input, MSG);
        },
        {
            instanceOf: TypeError,
            message: MSG,
        },
    );
});

test(`exported alias' identity check`, (t) => {
    t.is(PlainResultRoot.expectOk, expectOk);
    t.is(PlainResultNamespace.expectOk, expectOk);
    t.is(PlainResultCompatV54.expectOk, expectOk);
});
