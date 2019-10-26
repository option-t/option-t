import test from 'ava';

import { createSome, createNone, } from '../../__dist/cjs/Option';

test('self is `None`', function (t) {
    const none = createNone();
    const option = none.map(function () { // eslint-disable-line array-callback-return
        t.fail('the passed function should not be called');
    });

    t.is(option.isSome, false);
    t.is(option.isNone, true);
});

test('self is `Some<T>`', function (t) {
    const EXPECTED = '1';

    const some = createSome(1);
    const option = some.map(function (val) {
        t.not(val, EXPECTED);
        return EXPECTED;
    });
    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});
