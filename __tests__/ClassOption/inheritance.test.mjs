import test from 'ava';

import { createSome, createNone, OptionBase, Some, None } from '../../__dist/esm/Option.mjs';

test('`Some<T>`', function (t) {
    const option = createSome(1);
    t.is(option instanceof OptionBase, true);
});

test('`None`', function (t) {
    const option = createNone();
    t.is(option instanceof OptionBase, true);
});

test('`Some<T> by Constructor`', function (t) {
    const option = new Some(1);
    t.true(option instanceof OptionBase, 'is instanceof OptionBase');
    t.false(option instanceof Some, 'is not instanceof Some');
});

test('`None by Constructor`', function (t) {
    const option = new None();
    t.is(option instanceof OptionBase, true);
    t.false(option instanceof None, 'is not instanceof None');
});

test('prototype should be frozen', (t) => {
    t.true(Object.isFrozen(OptionBase.prototype));
});
