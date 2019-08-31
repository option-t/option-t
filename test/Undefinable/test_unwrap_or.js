'use strict';

const assert = require('assert');
const { unwrapOrFromUndefinable } = require('../../__dist/cjs/Undefinable/unwrapOr');
const { nonNullableValue } = require('../utils');

describe('Undefinable::unwrapOr', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Math.random();
                const EXPECTED = value;
                let result;
                let e = null;
                before(() => {
                    try {
                        result = unwrapOrFromUndefinable(EXPECTED, DEFAULT_VAL);
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
            result = unwrapOrFromUndefinable(null, DEFAULT_VAL);
        });

        it('should be the default', () => {
            assert.strictEqual(result, null);
        });
    });

    describe('pass undefined', () => {
        const DEFAULT_VAL = Math.random();
        let result;
        before(() => {
            result = unwrapOrFromUndefinable(undefined, DEFAULT_VAL);
        });

        it('should be the default', () => {
            assert.strictEqual(result, DEFAULT_VAL);
        });
    });

    describe('should not accept Maybe<*> as default', () => {
        const testcases = [
            [undefined, undefined],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    unwrapOrFromUndefinable(src, def);
                }, TypeError);
            });
        }
    });
});
