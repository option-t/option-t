import test from 'ava';

import { compatToClassicOptionFromMaybe } from 'option-t/ClassicOption';

test(`input is T`, (t) => {
    const EXPECTED = Math.random();
    const actual = compatToClassicOptionFromMaybe(EXPECTED);

    t.true(actual.isSome, 'isSome');
    t.is(actual.unwrap(), EXPECTED, 'inner value');
});

test(`input is null`, (t) => {
    const actual = compatToClassicOptionFromMaybe(null);
    t.false(actual.isSome);
});

test(`input is undefined`, (t) => {
    const actual = compatToClassicOptionFromMaybe(undefined);
    t.false(actual.isSome);
});
