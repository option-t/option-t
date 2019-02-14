'use strict';

const assert = require('assert');

const { mapForUndefinable } = require('../../__dist/cjs/Undefinable/map');
const { nonNullableValue } = require('../utils');

describe('Undefinable::mapForUndefinable', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = mapForUndefinable(EXPECTED, (v) => {
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
            result = mapForUndefinable(null, (v) => {
                called += 1;
                return v;
            });
        });

        it('should the expected result', () => {
            assert.strictEqual(result, null);
        });

        it('should call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });

    describe('pass undefined', () => {
        let called = 0;
        before(() => {
            mapForUndefinable(undefined, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('assert that do not return Undefinable<*> as the selector\'s result', () => {
        const testcases = [
            [1, undefined],
        ];
        for (const [src, def] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}`, () => {
                assert.throws(() => {
                    mapForUndefinable(src, (_v) => def);
                }, TypeError);
            });
        }
    });
});
