/* eslint-disable @typescript-eslint/no-magic-numbers */
import test from 'ava';

import { expectTypeOf } from 'expect-type';
import { type Ok, type Result, createOk } from 'option-t/plain_result/result';

test('createOk', (t) => {
    const actual = createOk(Math.random());

    t.true(expectTypeOf(actual).toEqualTypeOf<Ok<number>>());
    t.true(expectTypeOf(actual).toExtend<Result<number, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<number, never>>());
});

test('const type param', (t) => {
    const actual = createOk(123);

    t.true(expectTypeOf(actual).toEqualTypeOf<Ok<123>>());
    t.true(expectTypeOf(actual).toExtend<Result<123, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<123, never>>());

    t.true(expectTypeOf(actual).toExtend<Result<number, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<number, never>>());
});
