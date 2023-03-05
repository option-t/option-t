import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
    ClassicOptionBase,
    ClassicSomeConstructor as Some,
    ClassicNoneConstructor as None,
} from 'option-t/ClassicOption';

test('`Some<T>`', function (t) {
    const option = createClassicSome(1);
    t.is(option instanceof ClassicOptionBase, true);
});

test('`None`', function (t) {
    const option = createClassicNone();
    t.is(option instanceof ClassicOptionBase, true);
});

test('`Some<T> by Constructor`', function (t) {
    const option = new Some(1);
    t.true(option instanceof ClassicOptionBase, 'is instanceof ClassicOptionBase');
    t.false(option instanceof Some, 'is not instanceof Some');
});

test('`None by Constructor`', function (t) {
    const option = new None();
    t.is(option instanceof ClassicOptionBase, true);
    t.false(option instanceof None, 'is not instanceof None');
});

test('prototype should be frozen', (t) => {
    t.true(Object.isFrozen(ClassicOptionBase.prototype));
});
