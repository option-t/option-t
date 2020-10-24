import test from 'ava';

import { createSome, createNone, isNone, isSome } from '../../__dist/cjs/PlainOption/Option.js';
import { andThenForOption } from '../../__dist/cjs/PlainOption/andThen.js';
import { unwrapOption } from '../../__dist/cjs/PlainOption/unwrap.js';

test('src is `None`', (t) => {
    t.plan(1);

    const src = createNone();

    const result = andThenForOption(src, (_) => {
        t.fail('the passed function should not be called');
    });

    t.is(isNone(result), true);
});

test('src is `Some<T>`, callback returns `None`', (t) => {
    t.plan(2);

    const EXPECTED = Symbol('expected');
    const src = createSome(EXPECTED);

    const result = andThenForOption(src, (s) => {
        t.is(s, EXPECTED);
        return createNone();
    });

    t.is(isNone(result), true);
});

test('src is `Some<T>`, callback returns `Some<T>`', (t) => {
    t.plan(3);

    const EXPECTED = Symbol('expected');
    const src = createSome(EXPECTED);

    const result = andThenForOption(src, (s) => {
        t.is(s, EXPECTED);
        return createSome(EXPECTED);
    });

    t.is(isSome(result), true);
    t.is(unwrapOption(result), EXPECTED);
});

test("src is `Some<T>`, callback don't returns `Option<T>`", (t) => {
    t.plan(2);

    const EXPECTED = Symbol('expected');
    const src = createSome(EXPECTED);

    const result = andThenForOption(src, (s) => {
        t.is(s, EXPECTED);

        return 1;
    });

    // This is design and we recommend to use TypeScript or other static type checking.
    t.is(result, 1, `At this moment, we don't do run-time checking for the return value`);
});
