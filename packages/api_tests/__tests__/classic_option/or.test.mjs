import test from 'ava';

import { createClassicSome, createClassicNone } from 'option-t/classic_option';

test('self is `None`, param is `Some<T>`', function (t) {
    const EXPECTED = 1;
    const none = createClassicNone();
    const option = none.or(createClassicSome(EXPECTED));
    t.is(option.isSome, true, 'the returned value shoule be `Some<T>`: 1');
    t.is(option.unwrap(), EXPECTED, 'the returned value shoule be `Some<T>`: 2');
});

test('self is `None`, param is `None`', function (t) {
    const none = createClassicNone();
    const option = none.or(createClassicNone());
    t.is(option.isNone, true, 'the returned value shoule be `None`');
});

test('self is `Some<T>`, param is `Some<T>`', function (t) {
    const EXPECTED = 1;

    const some = createClassicSome(EXPECTED);
    const option = some.or(createClassicSome(3));

    t.is(option.isSome, true, 'the returned value shoule be `Some<T>`: 1');
    t.is(option.unwrap(), EXPECTED, 'the returned value shoule be `Some<T>`: 2');
});

test('self is `Some<T>`, param is `None`', function (t) {
    const EXPECTED = 1;
    const some = createClassicSome(EXPECTED);
    const option = some.or(createClassicNone());
    t.is(option.isSome, true, 'the returned value shoule be `Some<T>`: 1');
    t.is(option.unwrap(), EXPECTED, 'the returned value shoule be `Some<T>`: 2');
});
