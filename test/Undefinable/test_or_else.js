'use strict';

const assert = require('assert');

const { orElseForUndefinable } = require('../../__dist/cjs/Undefinable/orElse');
const { nonNullableValue } = require('../utils');

describe('Undefinable::orElseForUndefinable', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Math.random();
                const EXPECTED = value;
                let result;
                let called = 0;

                before(() => {
                    result = orElseForUndefinable(EXPECTED, () => {
                        called += 1;
                        return DEFAULT_VAL;
                    });
                });

                it('should the expected result', () => {
                    assert.strictEqual(result, EXPECTED);
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
            result = orElseForUndefinable(null, () => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should be the default', () => {
            assert.strictEqual(result, null);
        });

        it('should not call recover fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        const DEFAULT_VAL = Math.random();
        let result;
        let called = 0;
        before(() => {
            result = orElseForUndefinable(undefined, () => {
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
});
