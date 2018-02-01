'use strict';

const assert = require('assert');

const { unwrapOrElseFromUndefinable } = require('../../cjs/Undefinable/unwrapOrElse');
const { nonNullableValue } = require('../utils');

describe('Undefinable::unwrapOrElse', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Math.random();
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let e = null;
                let called = 0;

                before(() => {
                    try {
                        result = unwrapOrElseFromUndefinable(EXPECTED, () => {
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
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = unwrapOrElseFromUndefinable(null, () => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should the input result', () => {
            assert.strictEqual(result, null);
        });

        it('should not call recover fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        const DEFAULT_VAL = Math.random();
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = unwrapOrElseFromUndefinable(undefined, () => {
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

    describe.skip('should not accept Maybe<*> as default (TODO: #254)', () => {
        const testcases = [
            [undefined, undefined],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    unwrapOrElseFromUndefinable(src, () => def);
                }, TypeError);
            });
        }
    });
});
