import test from 'ava';

import { createClassicSome, createClassicNone } from 'option-t/esm/ClassicOption';

test('self is `None`', function (t) {
    const EXPECTED = 1;

    const option = createClassicNone();
    const result = option.unwrapOrElse(function () {
        return EXPECTED;
    });
    t.is(result, EXPECTED);
});

test('self is `Some<T>`', function (t) {
    const EXPECTED = 1;
    const DEFAULT = 100;

    t.not(EXPECTED, DEFAULT);

    const option = createClassicSome(EXPECTED);
    const result = option.unwrapOrElse(function () {
        t.fail('shoule not call callback');
        return DEFAULT;
    });

    t.is(result, EXPECTED, 'shoule be the wrapped value');
});
