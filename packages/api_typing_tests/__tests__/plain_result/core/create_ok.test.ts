/* eslint-disable @typescript-eslint/no-magic-numbers */
import test from 'ava';

import { expectTypeOf } from 'expect-type';
import { type Ok, type Result, createOk } from 'option-t/plain_result/result';
import type { Mutable } from '../../__helpers__/mutable.js';

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

test('const type param: object', (t) => {
    interface Expect {
        readonly a: 1;
    }

    type MutableExpect = Mutable<Expect>;

    const actual = createOk({
        a: 1,
    });

    t.true(expectTypeOf(actual).toEqualTypeOf<Ok<Expect>>());
    t.true(expectTypeOf(actual).not.toEqualTypeOf<Ok<MutableExpect>>());

    t.true(expectTypeOf(actual).toExtend<Result<Expect, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<Expect, never>>());

    t.true(expectTypeOf(actual).toExtend<Result<MutableExpect, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<MutableExpect, never>>());
});

test('const type param: object: explicit instantiation', (t) => {
    interface Expect {
        a: 1;
    }

    type ReadonlyExpect = Readonly<Expect>;

    const actual = createOk<Expect>({
        a: 1,
    });

    t.true(expectTypeOf(actual).toEqualTypeOf<Ok<Expect>>());
    t.true(expectTypeOf(actual).not.toEqualTypeOf<Ok<ReadonlyExpect>>());

    t.true(expectTypeOf(actual).toExtend<Result<Expect, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<Expect, never>>());

    t.true(expectTypeOf(actual).toExtend<Result<ReadonlyExpect, unknown>>());
    t.true(expectTypeOf(actual).toExtend<Result<ReadonlyExpect, never>>());
});
