import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from '../../__dist/esm/ClassicOption/ClassicOption.js';

test('self is `None`', function (t) {
    const EXPECTED = 1;

    const option = createClassicNone();
    const result = option.unwrapOr(EXPECTED);
    t.is(result, EXPECTED);
});

test('self is `Some<T>`', function (t) {
    const EXPECTED = 1;
    const DEFAULT = 10;

    t.not(EXPECTED, DEFAULT);

    const option = createClassicSome(EXPECTED);
    const result = option.unwrapOr(DEFAULT);
    t.is(result, EXPECTED, 'shoule be the wrapped value');
});
