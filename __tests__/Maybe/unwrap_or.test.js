'use strict';

const assert = require('assert');
const { unwrapOrFromMaybe } = require('../../__dist/cjs/Maybe/unwrapOr');
const { nonNullableValue } = require('../utils');

describe('Maybe::unwrapOr', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Math.random();
                const EXPECTED = value;
                let result;
                let e = null;
                before(() => {
                    try {
                        result = unwrapOrFromMaybe(EXPECTED, DEFAULT_VAL);
                    }
                    catch (expected) {
                        e = expected;
                    }
                });

                it('should the expected result', () => {
                    assert.strictEqual(result, EXPECTED);
                });

                it('should not throw error', () => {
                    assert.strictEqual(e, null);
                });
            });
        }
    });

    describe('pass null', () => {
        const DEFAULT_VAL = Math.random();
        let result;
        before(() => {
            result = unwrapOrFromMaybe(null, DEFAULT_VAL);
        });

        it('should be the default', () => {
            assert.strictEqual(result, DEFAULT_VAL);
        });
    });

    describe('pass undefined', () => {
        const DEFAULT_VAL = Math.random();
        let result;
        before(() => {
            result = unwrapOrFromMaybe(undefined, DEFAULT_VAL);
        });

        it('should be the default', () => {
            assert.strictEqual(result, DEFAULT_VAL);
        });
    });

    describe('should not accept Maybe<*> as default', () => {
        const testcases = [
            [undefined, undefined],
            [undefined, null],
            [null, undefined],
            [null, null],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    unwrapOrFromMaybe(src, def);
                }, TypeError);
            });
        }
    });
});
