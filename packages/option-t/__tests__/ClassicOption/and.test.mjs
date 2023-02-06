import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from '../../__dist/esm/ClassicOption/ClassicOption.js';

test('self is `None`, param is `Some<T>`', function (t) {
    const none = createClassicNone();
    const option = none.and(createClassicSome(1));
    t.is(option.isNone, true);
});

test('self is `None`, param is `None`', function (t) {
    const none = createClassicNone();
    const option = none.and(createClassicNone());
    t.is(option.isNone, true, 'the returned value shoule be `None`');
});

test('self is `Some<T>`, param is `Some<T>`', function (t) {
    const EXPECTED = '1';

    const some = createClassicSome(1);
    const option = some.and(createClassicSome(EXPECTED));
    t.is(option.isSome, true, 'the returned value shoule be `Some<T>`: 1');
    t.is(option.unwrap(), EXPECTED, 'the returned value shoule be `Some<T>`: 2');
});

test('self is `Some<T>`, param is `None`', function (t) {
    const some = createClassicSome(1);
    const option = some.and(createClassicNone());

    t.is(option.isNone, true, 'the returned value shoule be `None`');
});
