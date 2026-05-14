/* eslint-disable @typescript-eslint/no-magic-numbers */
import test from 'ava';

import { expectTypeOf } from 'expect-type';
import { type Err, type Result, createErr } from 'option-t/plain_result/result';
import type { Mutable } from '../../__helpers__/mutable.js';

test('createErr', (t) => {
    const actual = createErr(Math.random());

    t.true(expectTypeOf(actual).toEqualTypeOf<Err<number>>());
    t.true(expectTypeOf(actual).toExtend<Result<unknown, number>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, number>>());
});

test('const type param', (t) => {
    const actual = createErr(123);

    t.true(expectTypeOf(actual).toEqualTypeOf<Err<123>>());
    t.true(expectTypeOf(actual).toExtend<Result<unknown, 123>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, 123>>());

    t.true(expectTypeOf(actual).toExtend<Result<unknown, number>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, number>>());
});

test('const type param: object', (t) => {
    interface Expect {
        readonly a: 1;
    }

    type MutableExpect = Mutable<Expect>;

    const actual = createErr({
        a: 1,
    });

    t.true(expectTypeOf(actual).toEqualTypeOf<Err<Expect>>());
    t.true(expectTypeOf(actual).not.toEqualTypeOf<Err<MutableExpect>>());

    t.true(expectTypeOf(actual).toExtend<Result<unknown, Expect>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, Expect>>());

    t.true(expectTypeOf(actual).toExtend<Result<unknown, MutableExpect>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, MutableExpect>>());
});

test('const type param: object: explicit instantiation', (t) => {
    interface Expect {
        a: 1;
    }

    type ReadonlyExpect = Readonly<Expect>;

    const actual = createErr<Expect>({
        a: 1,
    });

    t.true(expectTypeOf(actual).toEqualTypeOf<Err<Expect>>());
    t.true(expectTypeOf(actual).not.toEqualTypeOf<Err<ReadonlyExpect>>());

    t.true(expectTypeOf(actual).toExtend<Result<unknown, Expect>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, Expect>>());

    t.true(expectTypeOf(actual).toExtend<Result<unknown, ReadonlyExpect>>());
    t.true(expectTypeOf(actual).toExtend<Result<never, ReadonlyExpect>>());
});
