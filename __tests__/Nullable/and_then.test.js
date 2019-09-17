'use strict';

const assert = require('assert');

const { andThenForNullable } = require('../../__dist/cjs/Nullable/andThen');
const { nonNullableValue } = require('../utils');

describe('Nullable::andThen', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;

                let result;
                let called = 0;

                before(() => {
                    result = andThenForNullable(EXPECTED, (v) => {
                        called += 1;
                        return v;
                    });
                });

                it('should the expected result', () => {
                    assert.strictEqual(result, EXPECTED);
                });

                it('should call selector fn', () => {
                    assert.strictEqual(called, 1);
                });
            });
        }
    });

    describe('pass null', () => {
        const DEFAULT_VAL = Symbol('');
        let result;
        let called = 0;
        before(() => {
            result = andThenForNullable(null, (_v) => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should be the expected result', () => {
            assert.strictEqual(result, null);
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        let result;
        let called = 0;
        before(() => {
            result = andThenForNullable(undefined, (v) => {
                called += 1;
                return v;
            });
        });

        it('should be the expected result', () => {
            assert.strictEqual(result, undefined);
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });
});
