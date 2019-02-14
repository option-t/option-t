'use strict';

const assert = require('assert');

const { andThenForUndefinable } = require('../../__dist/cjs/Undefinable/andThen');
const { nonNullableValue } = require('../utils');

describe('Undefinable::andThen', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = andThenForUndefinable(EXPECTED, (v) => {
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
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = andThenForUndefinable(null, (v) => {
                called += 1;
                return v;
            });
        });

        it('should be the expected result', () => {
            assert.strictEqual(result, null);
        });

        it('should call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });

    describe('pass undefined', () => {
        const DEFAULT_VAL = Symbol('');
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = andThenForUndefinable(undefined, (_v) => {
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
