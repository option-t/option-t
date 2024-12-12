import test from 'ava';

import { expectTypeOf } from 'expect-type';
import { Result as PlainResult } from 'option-t/plain_result/namespace';

test('PlainResult::createOk', (t) => {
    const actual = PlainResult.createOk(Math.random());

    t.true(expectTypeOf(actual).toEqualTypeOf<PlainResult.Ok<number>>());
    t.true(expectTypeOf(actual).toMatchTypeOf<PlainResult.Result<number, unknown>>());
    t.true(expectTypeOf(actual).toMatchTypeOf<PlainResult.Result<number, never>>());
});

test('PlainResult::createErr', (t) => {
    const actual = PlainResult.createErr(Math.random());

    t.true(expectTypeOf(actual).toEqualTypeOf<PlainResult.Err<number>>());
    t.true(expectTypeOf(actual).toMatchTypeOf<PlainResult.Result<unknown, number>>());
    t.true(expectTypeOf(actual).toMatchTypeOf<PlainResult.Result<never, number>>());
});
