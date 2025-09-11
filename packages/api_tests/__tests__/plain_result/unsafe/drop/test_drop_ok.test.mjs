/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr, isOk } from 'option-t/plain_result/result';
import { unsafeDropOkForResult } from 'option-t/plain_result/unsafe/drop';

test('with Ok', (t) => {
    const expected = Symbol('');
    const actual = createOk(1);

    unsafeDropOkForResult(actual, (ok) => {
        ok.ok = false;
        ok.val = expected;
    });

    t.is(isOk(actual), false, 'should be modified');
    t.is(actual.val, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('with Err', (t) => {
    const actual = createErr(1);

    unsafeDropOkForResult(actual, (_ok) => {
        t.fail('Do not enter this path.');
    });

    t.is(isOk(actual), false, 'should not be modified');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('should throw if the passed value is frozen: Ok', (t) => {
    const input = createOk(Math.random());
    const actual = Object.freeze(input);
    t.throws(
        () => {
            unsafeDropOkForResult(actual, (_ok) => {
                t.fail('Do not enter this path.');
            });
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
            unsafeDropOkForResult(actual, (_ok) => {
                t.fail('Do not enter this path.');
            });
        },
        {
            instanceOf: TypeError,
            message: `input is frozen, cannot cast to mutable`,
        },
    );
});

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
