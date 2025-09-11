import test from 'ava';

import { expectTypeOf } from 'expect-type';
import { type Err, type Result, createErr } from 'option-t/plain_result/result';

test('createErr', (t) => {
    const actual = createErr(Math.random());

    t.true(expectTypeOf(actual).toEqualTypeOf<Err<number>>());
    t.true(expectTypeOf(actual).toExtend<Result<unknown, number>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, number>>());
});
