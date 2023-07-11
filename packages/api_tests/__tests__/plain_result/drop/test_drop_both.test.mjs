/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { unsafeDropBothForResult } from 'option-t/PlainResult/drop';

test('with Ok', (t) => {
    const expected = Symbol('');
    const actual = createOk(1);

    unsafeDropBothForResult(
        actual,
        (ok) => {
            ok.ok = false;
            ok.val = expected;
        },
        (_e) => {
            t.fail('Do not enter this path.');
        },
    );

    t.is(actual.ok, false, 'should be modified');
    t.is(actual.val, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('with Err', (t) => {
    const expected = Symbol('');
    const actual = createErr(1);

    unsafeDropBothForResult(
        actual,
        (_ok) => {
            t.fail('Do not enter this path.');
        },
        (err) => {
            err.ok = true;
            err.err = expected;
        },
    );

    t.is(actual.ok, true, 'should be modified');
    t.is(actual.err, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('should throw if the passed value is frozen: Ok', (t) => {
    const input = createOk(Math.random());
    const actual = Object.freeze(input);
    t.throws(
        () => {
            unsafeDropBothForResult(
                actual,
                (_ok) => {
                    t.fail('Do not enter this path. _ok callback');
                },
                (_err) => {
                    t.fail('Do not enter this path. _err callback');
                },
            );
        },
        {
            instanceOf: TypeError,
            message: `input is frozen, cannot cast to mutable`,
        },
    );
});

test('should throw if the passed value is frozen: Err', (t) => {
    const input = createErr(Math.random());
    const actual = Object.freeze(input);
    t.throws(
        () => {
            unsafeDropBothForResult(
                actual,
                (_ok) => {
                    t.fail('Do not enter this path. _ok callback');
                },
                (_err) => {
                    t.fail('Do not enter this path. _err callback');
                },
            );
        },
        {
            instanceOf: TypeError,
            message: `input is frozen, cannot cast to mutable`,
        },
    );
});
