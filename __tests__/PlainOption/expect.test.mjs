import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { expectSomeForOption } from '../../__dist/esm/PlainOption/expect.mjs';

test('input=Some', (t) => {
    const EXPECTED = Symbol('expected');

    const input = createSome(EXPECTED);

    let actual;
    t.notThrows(() => {
        actual = expectSomeForOption(input, 'do not throw any errors');
    });

    t.is(actual, EXPECTED);
});

test('input=None', (t) => {
    const input = createNone();

    const MSG = 'throw if the input is None';
    t.throws(
        () => {
            expectSomeForOption(input, MSG);
        },
        {
            instanceOf: TypeError,
            message: MSG,
        }
    );
});
