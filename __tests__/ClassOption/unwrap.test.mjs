import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/Option.mjs';

test('unwrap `Some<T>`', function (t) {
    const EXPECTED = 1;
    const option = createSome(EXPECTED);
    t.is(option.unwrap(), EXPECTED);
});

test('unwrap `None`', function (t) {
    const none = createNone();
    t.throws(
        () => {
            none.unwrap();
        },
        {
            instanceOf: TypeError,
            message: 'called `unwrap()` on a `None` value',
        }
    );
});
