'use strict';

const assert = require('assert');

const { unwrapOrElseFromMaybe } = require('../../__dist/cjs/Maybe/unwrapOrElse');
const { nonNullableValue } = require('../utils');

describe('Maybe::unwrapOrElse', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Math.random();
                const EXPECTED = value;
                let result;
                let e = null;
                let called = 0;

                before(() => {
                    try {
                        result = unwrapOrElseFromMaybe(EXPECTED, () => {
                            called += 1;
                            return DEFAULT_VAL;
                        });
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

                it('should not call recover fn', () => {
                    assert.strictEqual(called, 0);
                });
            });
        }
    });

    describe('pass null', () => {
        const DEFAULT_VAL = Math.random();
        let result;
        let called = 0;
        before(() => {
            result = unwrapOrElseFromMaybe(null, () => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should be the default', () => {
            assert.strictEqual(result, DEFAULT_VAL);
        });

        it('should call recover fn', () => {
            assert.strictEqual(called, 1);
        });
    });

    describe('pass undefined', () => {
        const DEFAULT_VAL = Math.random();
        let result;
        let called = 0;
        before(() => {
            result = unwrapOrElseFromMaybe(undefined, () => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should be the default', () => {
            assert.strictEqual(result, DEFAULT_VAL);
        });

        it('should not call recover fn', () => {
            assert.strictEqual(called, 1);
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
                    unwrapOrElseFromMaybe(src, () => def);
                }, TypeError);
            });
        }
    });
});
