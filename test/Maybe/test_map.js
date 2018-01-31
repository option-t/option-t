'use strict';

const assert = require('assert');

const { mapForMaybe } = require('../../cjs/Maybe/map');
const { nonNullableValue } = require('../utils');

describe('Maybe::mapForMaybe', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = mapForMaybe(EXPECTED, (v) => {
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
            mapForMaybe(null, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        let called = 0;
        before(() => {
            mapForMaybe(undefined, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('assert that do not return Maybe<*> as the selector\'s result', () => {
        const testcases = [
            [1, undefined],
            [1, null],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    mapForMaybe(src, (_v) => def);
                }, TypeError);
            });
        }
    });
});
