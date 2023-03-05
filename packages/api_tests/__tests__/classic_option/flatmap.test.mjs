import test from 'ava';

import { createClassicSome, createClassicNone } from 'option-t/ClassicOption';

test('self is `None`', function (t) {
    const none = createClassicNone();
    const option = none.flatMap(function () {
        t.fail('the passed function should not be called');
        return undefined;
    });
    t.is(option.isNone, true);
});

test('self is `Some<T>`, callback returns `None`', function (t) {
    const some = createClassicSome(1);

    const option = some.flatMap(function () {
        return createClassicNone();
    });

    t.is(option.isNone, true);
});

test('self is `Some<T>`, callback returns `Some<T>`', function (t) {
    const EXPECTED = '1';
    const some = createClassicSome(1);

    const option = some.flatMap(function (val) {
        t.is(val !== EXPECTED, true);
        return createClassicSome(EXPECTED);
    });
    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});

test("self is `Some<T>`, `fn` don't returns `Option<T>`", function (t) {
    const some = createClassicSome(1);
    t.throws(
        () => {
            some.flatMap(function (val) {
                const rv = 'hoge';
                t.not(val, rv);
                return rv;
            });
        },
        {
            instanceOf: TypeError,
            message: "Option<T>.flatMap()' param `fn` should return `Option<T>`.",
        }
    );
});
