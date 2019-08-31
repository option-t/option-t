'use strict';

const assert = require('assert');
const { unwrapUndefinable } = require('../../__dist/cjs/Undefinable/unwrap');
const { nonNullableValue } = require('../utils');

describe('Undefinable::unwrap', () => {

    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                let result;
                let e = null;
                before(() => {
                    try {
                        result = unwrapUndefinable(EXPECTED);
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
        let result;
        let e = null;
        before(() => {
            try {
                result = unwrapUndefinable(null);
            }
            catch (expected) {
                e = expected;
            }
        });

        it('should the expected result', () => {
            assert.strictEqual(result, null);
        });

        it('should not throw error', () => {
            assert.strictEqual(e, null);
        });
    });

    describe('pass undefined', () => {
        let e = null;
        before(() => {
            try {
                unwrapUndefinable(undefined);
            }
            catch (expected) {
                e = expected;
            }
        });

        it('should throw error', () => {
            assert.strictEqual(e instanceof TypeError, true);
        });
    });
});
