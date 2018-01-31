'use strict';

const assert = require('assert');

const { mapForNullable } = require('../../cjs/Nullable/map');
const { nonNullableValue } = require('../utils');

describe('Nullable::mapForNullable', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = mapForNullable(EXPECTED, (v) => {
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
        let called = 0;
        before(() => {
            mapForNullable(null, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = mapForNullable(undefined, (v) => {
                called += 1;
                return v;
            });
        });

        it('should the expected result', () => {
            assert.strictEqual(result, undefined);
        });

        it('should call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });

    describe('assert that do not return Nullable<*> as the selector\'s result', () => {
        const testcases = [
            [1, null],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    mapForNullable(src, (_v) => def);
                }, TypeError);
            });
        }
    });
});
