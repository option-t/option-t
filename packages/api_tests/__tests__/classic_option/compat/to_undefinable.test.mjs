import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
    compatToClassicOptionFromUndefinable,
    compatToUndefinableFromClassicOption,
} from 'option-t/ClassicOption';

test(`input is T`, (t) => {
    const EXPECTED = Math.random();
    const actual = compatToClassicOptionFromUndefinable(EXPECTED);

    t.true(actual.isSome, 'isSome');
    t.is(actual.unwrap(), EXPECTED, 'inner value');
});

test(`input is undefined`, (t) => {
    const actual = compatToClassicOptionFromUndefinable(undefined);
    t.false(actual.isSome);
});

test(`input is Classic's Some`, (t) => {
    const EXPECTED = Math.random();
    const input = createClassicSome(EXPECTED);
    const actual = compatToUndefinableFromClassicOption(input);

    t.is(actual, EXPECTED);
});

test(`input is Classic's but contains undefined`, (t) => {
    const input = createClassicSome(undefined);
    t.throws(
        () => {
            compatToUndefinableFromClassicOption(input);
        },
        {
            instanceOf: TypeError,
            message: `ClassicOption<T>'s inner value is undefined. This type cannot be converted to Undefinable<T>`,
        },
    );
});

test(`input is Classic's None`, (t) => {
    const input = createClassicNone();
    const actual = compatToUndefinableFromClassicOption(input);
    t.is(actual, undefined);
});
