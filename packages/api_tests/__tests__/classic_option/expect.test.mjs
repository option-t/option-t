import test from 'ava';

import { createClassicSome, createClassicNone } from 'option-t/ClassicOption';

test('unwrap `Some<T>`', function (t) {
    const EXPECTED = 1;
    const option = createClassicSome(EXPECTED);
    t.is(option.expect(), EXPECTED, 'should get the inner');
});

test('unwrap `None`', function (t) {
    const EXPECTED = 'barfoo';

    const none = createClassicNone();
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
