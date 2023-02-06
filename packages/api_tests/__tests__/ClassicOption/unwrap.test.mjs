import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from 'option-t/__dist/esm/ClassicOption/ClassicOption.js';

test('unwrap `Some<T>`', function (t) {
    const EXPECTED = 1;
    const option = createClassicSome(EXPECTED);
    t.is(option.unwrap(), EXPECTED);
});

test('unwrap `None`', function (t) {
    const none = createClassicNone();
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
