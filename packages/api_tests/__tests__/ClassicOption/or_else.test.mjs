import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from 'option-t/__dist/esm/ClassicOption/ClassicOption.js';

test('self is `None`, param returns `Some<T>`', function (t) {
    const EXPECTED = 1;
    const none = createClassicNone();
    const option = none.orElse(function () {
        return createClassicSome(EXPECTED);
    });

    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});

test('self is `None`, param returns `None`', function (t) {
    const none = createClassicNone();
    const option = none.orElse(function () {
        return createClassicNone();
    });

    t.is(option.isNone, true);
});

test("self is `None`, param don't return `Option<T>`", function (t) {
    const none = createClassicNone();

    t.throws(
        () => {
            none.orElse(function () {
                return 'barfoo';
            });
        },
        {
            instanceOf: TypeError,
            message: "Option<T>.orElse()' param `fn` should return `Option<T>`.",
        }
    );
});

test('self is `Some<T>`, param returns `Some<T>`', function (t) {
    const EXPECTED = 1;
    const some = createClassicSome(EXPECTED);
    const option = some.orElse(function () {
        t.fail('shoule not call callback');
        return createClassicSome(3);
    });

    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});

test('self is `Some<T>`, param returns `None`', function (t) {
    const EXPECTED = 1;

    const some = createClassicSome(EXPECTED);
    const option = some.orElse(function () {
        t.fail('shoule not call callback');
        return createClassicNone();
    });
    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});
