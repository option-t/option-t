import test from 'ava';

const { createSome, createNone, } = require('../../__dist/cjs/Option');

test('self is `None`', function (t) {
    const none = createNone();
    const option = none.flatMap(function () {
        t.fail('the passed function should not be called');
    });
    t.is(option.isNone, true);
});

test('self is `Some<T>`, callback returns `None`', function (t) {
    const some = createSome(1);

    const option = some.flatMap(function () {
        return createNone();
    });

    t.is(option.isNone, true);
});

test('self is `Some<T>`, callback returns `Some<T>`', function (t) {
    const EXPECTED = '1';
    const some = createSome(1);

    const option = some.flatMap(function (val) {
        t.is(val !== EXPECTED, true);
        return createSome(EXPECTED);
    });
    t.is(option.isSome, true);
    t.is(option.unwrap(), EXPECTED);
});

test('self is `Some<T>`, `fn` don\'t returns `Option<T>`', function (t) {
    const some = createSome(1);
    t.throws(() => {
        some.flatMap(function (val) {
            const rv = 'hoge';
            t.not(val, rv);
            return rv;
        });
    }, {
        instanceOf: TypeError,
        message: 'Option<T>.flatMap()\' param `fn` should return `Option<T>`.'
    });
});
