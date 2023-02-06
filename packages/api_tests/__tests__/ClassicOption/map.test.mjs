import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from '../../__dist/esm/ClassicOption/ClassicOption.js';

test('self is `None`', function (t) {
    const none = createClassicNone();
    const option = none.map(function (v) {
        t.fail('the passed function should not be called');
        return v;
    });

    t.is(option.isSome, false);
    t.is(option.isNone, true);
});

test('self is `Some<T>`', function (t) {
    const EXPECTED = '1';

    const some = createClassicSome(1);
    const option = some.map(function (val) {
        t.not(val, EXPECTED);
        return EXPECTED;
    });
    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});
