import test from 'ava';

import { createOk, createErr, expectOk as expectOkForResult } from 'option-t/plain_result/result';

test('input=Ok(T), expect=Ok(T)', (t) => {
    const EXPECTED = Symbol('expected');

    const input = createOk(EXPECTED);

    let actual;
    t.notThrows(() => {
        actual = expectOkForResult(input, 'do not throw any errors');
    });

    t.is(actual, EXPECTED);
});

test('input=Err(E), expect=Ok(T)', (t) => {
    const NOT_EXPECTED = Symbol('not expected');

    const input = createErr(NOT_EXPECTED);

    const MSG = 'throw if the input is not expected';
    t.throws(
        () => {
            expectOkForResult(input, MSG);
        },
        {
            instanceOf: TypeError,
            message: MSG,
        },
    );
});
