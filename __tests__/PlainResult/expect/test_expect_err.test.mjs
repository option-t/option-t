import test from 'ava';

import { createOk, createErr } from '../../../__dist/esm/PlainResult/Result.js';
import { expectErrForResult } from '../../../__dist/esm/PlainResult/expect.js';

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
        }
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
