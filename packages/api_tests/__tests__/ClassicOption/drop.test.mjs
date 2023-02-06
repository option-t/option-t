import test from 'ava';

import { createClassicSome, createClassicNone } from 'option-t/esm/ClassicOption';

test('drop `Some<T>`', function (t) {
    const option = createClassicSome(1);
    option.drop();

    t.is(option.toJSON().value, null, 'the inner should be freed');
});

test('drop `None`', function (t) {
    const option = createClassicNone();
    option.drop();

    t.is(option.toJSON().value, null, 'the inner should be freed');
});
