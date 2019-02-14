'use strict';

const assert = require('assert');
const { unwrapNullable } = require('../../__dist/cjs/Nullable/unwrap');
const { nonNullableValue } = require('../utils');

describe('Nullable::unwrap', () => {

    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let e = null;
                before(() => {
                    try {
                        result = unwrapNullable(EXPECTED);
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
        let e = null;
        before(() => {
            try {
                unwrapNullable(null);
            }
            catch (expected) {
                e = expected;
            }
        });

        it('should throw error', () => {
            assert.strictEqual(e instanceof TypeError, true);
        });
    });

    describe('pass undefined', () => {
        // eslint-disable-next-line
        let result;
        let e = null;
        before(() => {
            try {
                result = unwrapNullable(undefined);
            }
            catch (expected) {
                e = expected;
            }
        });

        it('should the expected result', () => {
            assert.strictEqual(result, undefined);
        });

        it('should not throw error', () => {
            assert.strictEqual(e, null);
        });
    });
});
