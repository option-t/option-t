'use strict';

const assert = require('assert');
const { unwrapMaybe } = require('../../cjs/Maybe/unwrap');
const { nonNullableValue } = require('../utils');

describe('Maybe::unwrap', () => {

    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let e = null;
                before(() => {
                    try {
                        result = unwrapMaybe(EXPECTED);
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
                unwrapMaybe(null);
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
        let e = null;
        before(() => {
            try {
                unwrapMaybe(undefined);
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
