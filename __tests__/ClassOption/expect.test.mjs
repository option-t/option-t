import test from 'ava';

import { createSome, createNone } from '../../__dist/cjs/Option.js';

test('unwrap `Some<T>`', function (t) {
    const EXPECTED = 1;
    const option = createSome(EXPECTED);
    t.is(option.expect(), EXPECTED, 'should get the inner');
});

test('unwrap `None`', function (t) {
    const EXPECTED = 'barfoo';

    const none = createNone();
    t.throws(
        () => {
            none.expect(EXPECTED);
        },
        {
            instanceOf: TypeError,
            message: EXPECTED,
        }
    );
});
