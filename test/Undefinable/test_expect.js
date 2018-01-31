'use strict';

const assert = require('assert');
const { expectNotUndefined } = require('../../cjs/Undefinable/expect');
const { nonNullableValue } = require('../utils');

describe('Undefinable::expect', () => {

    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                const EXPECTED_MSG = 'expected test';
                // eslint-disable-next-line
                let result;
                let e = null;
                before(() => {
                    try {
                        result = expectNotUndefined(EXPECTED, EXPECTED_MSG);
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
        const EXPECTED_MSG = 'expected test';
        // eslint-disable-next-line
        let result;
        let e = null;
        before(() => {
            try {
                result = expectNotUndefined(null, EXPECTED_MSG);
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
        const EXPECTED_MSG = 'expected test';
        let e = null;
        before(() => {
            try {
                expectNotUndefined(undefined, EXPECTED_MSG);
            }
            catch (expected) {
                e = expected;
            }
        });

        it('should throw error', () => {
            assert.strictEqual(e instanceof TypeError, true);
        });

        it('the error contains expected message', () => {
            assert.strictEqual(e.message.includes(EXPECTED_MSG), true);
        });
    });
});
