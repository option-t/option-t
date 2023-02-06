import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from '../../__dist/esm/ClassicOption/ClassicOption.js';

test('self is `None`', function (t) {
    const EXPECTED = 1;

    const none = createClassicNone();
    const result = none.mapOr(EXPECTED, function () {
        t.pass('the passed function should not be called');
    });

    t.is(result, EXPECTED);
});

test('self is `Some<T>`', function (t) {
    t.plan(2);

    const EXPECTED = 1;
    const DEFAULT = 2;

    const some = createClassicSome('bar');
    const result = some.mapOr(DEFAULT, function (val) {
        t.not(val, EXPECTED);
        return EXPECTED;
    });

    t.is(result, EXPECTED, 'the returned value shoule be `Some<T>`: 1');
});
