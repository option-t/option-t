import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { inspectOption } from '../../__dist/esm/PlainOption/inspect.mjs';

test('input is Some', (t) => {
    const INPUT_INNER = Symbol('input');

    let arg;

    t.plan(3);

    const input = createSome(INPUT_INNER);
    const actual = inspectOption(input, (v) => {
        t.pass('should call the inspect fn');
        arg = v;
    });

    t.is(input, actual, 'should be the expect returned');
    t.is(arg, INPUT_INNER, 'should be the expected arg');
});

test('input is None', (t) => {
    const INPUT_INNER = Symbol('input');

    t.plan(1);

    const input = createNone(INPUT_INNER);
    const actual = inspectOption(input, (_v) => {
        t.pass('should not call the inspect fn');
    });

    t.is(input, actual, 'should be the expect returned');
});
