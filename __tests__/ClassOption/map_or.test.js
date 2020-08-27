import test from 'ava';

import { createSome, createNone } from '../../__dist/cjs/Option';

test('self is `None`', function (t) {
    const EXPECTED = 1;

    const none = createNone();
    const result = none.mapOr(EXPECTED, function () {
        t.pass('the passed function should not be called');
    });

    t.is(result, EXPECTED);
});

test('self is `Some<T>`', function (t) {
    t.plan(2);

    const EXPECTED = 1;
    const DEFAULT = 2;

    const some = createSome('bar');
    const result = some.mapOr(DEFAULT, function (val) {
        t.not(val, EXPECTED);
        return EXPECTED;
    });

    t.is(result, EXPECTED, 'the returned value shoule be `Some<T>`: 1');
});
