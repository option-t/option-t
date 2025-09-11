import test from 'ava';

import { expectTypeOf } from 'expect-type';
import { type Ok, type Result, createOk } from 'option-t/plain_result/result';

test('createOk', (t) => {
    const actual = createOk(Math.random());

    t.true(expectTypeOf(actual).toEqualTypeOf<Ok<number>>());
    t.true(expectTypeOf(actual).toExtend<Result<number, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<number, never>>());
});
