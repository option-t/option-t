'use strict';

const assert = require('assert');

const { unwrapOrElseFromNullable } = require('../../__dist/cjs/Nullable/unwrapOrElse');
const { nonNullableValue } = require('../utils');

describe('Nullable::unwrapOrElse', () => {
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
                        result = unwrapOrElseFromNullable(EXPECTED, () => {
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
            result = unwrapOrElseFromNullable(null, () => {
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
            result = unwrapOrElseFromNullable(undefined, () => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should the input result', () => {
            assert.strictEqual(result, undefined);
        });

        it('should not call recover fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('should not accept Maybe<*> as default', () => {
        const testcases = [
            [null, null],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    unwrapOrElseFromNullable(src, () => def);
                }, TypeError);
            });
        }
    });
});
