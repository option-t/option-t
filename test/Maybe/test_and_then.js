'use strict';

const assert = require('assert');

const { andThenForMaybe } = require('../../__dist/cjs/Maybe/andThen');
const { nonNullableValue } = require('../utils');

describe('Maybe::andThen', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = andThenForMaybe(EXPECTED, (v) => {
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
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = andThenForMaybe(null, (_v) => {
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
        const DEFAULT_VAL = Symbol('');
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = andThenForMaybe(undefined, (_v) => {
                called += 1;
                return DEFAULT_VAL;
            });
        });

        it('should be the expected result', () => {
            assert.strictEqual(result, undefined);
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });
});
