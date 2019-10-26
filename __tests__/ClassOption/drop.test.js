import test from 'ava';

import { createSome, createNone, } from '../../__dist/cjs/Option';


test('drop `Some<T>`', function (t) {
    const option = createSome(1);
    option.drop();

    t.is(option.toJSON().value, null, 'the inner should be freed');
});

test('drop `None`', function (t) {
    const option = createNone();
    option.drop();

    t.is(option.toJSON().value, null, 'the inner should be freed');
});
