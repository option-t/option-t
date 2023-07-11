import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
    compatToClassicOptionFromNullable,
    compatToNullableFromClassicOption,
} from 'option-t/ClassicOption';

test(`input is T`, (t) => {
    const EXPECTED = Math.random();
    const actual = compatToClassicOptionFromNullable(EXPECTED);

    t.true(actual.isSome, 'isSome');
    t.is(actual.unwrap(), EXPECTED, 'inner value');
});

test(`input is null`, (t) => {
    const actual = compatToClassicOptionFromNullable(null);
    t.false(actual.isSome);
});

test(`input is Classic's Some`, (t) => {
    const EXPECTED = Math.random();
    const input = createClassicSome(EXPECTED);
    const actual = compatToNullableFromClassicOption(input);
    t.is(actual, EXPECTED);
});

test(`input is Classic's but contains null`, (t) => {
    const input = createClassicSome(null);
    t.throws(
        () => {
            compatToNullableFromClassicOption(input);
        },
        {
            instanceOf: TypeError,
            message: `ClassicOption<T>'s inner value is null. This type cannot be converted to Nullable<T>`,
        },
    );
});

test(`input is Classic's None`, (t) => {
    const input = createClassicNone();
    const actual = compatToNullableFromClassicOption(input);
    t.is(actual, null);
});
