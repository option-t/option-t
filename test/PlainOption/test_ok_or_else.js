'use strict';

const assert = require('assert');

const { createSome, createNone } = require('../../cjs/PlainOption');
const { okOrElseForPlainOption } = require('../../cjs/PlainOption/okOrElse');
const { unwrapErrFromResult, unwrapFromResult } = require('../../cjs/PlainResult/unwrap');

describe('PlainOption::okOr', () => {
    describe('the input is Some', () => {
        const OK_VAL = Symbol('ok');
        const ERR_VAL = Symbol('err');

        let actual = null;
        let called = 0;
        before(() => {
            const input = createSome(OK_VAL);
            actual = okOrElseForPlainOption(input, () => {
                called += 1;

                return ERR_VAL;
            });
        });

        it('the actual should be Ok', () => {
            assert.strictEqual(actual.ok, true);
        });

        it('the actual should be wrap the expect', () => {
            assert.strictEqual(unwrapFromResult(actual), OK_VAL);
        });

        it('should not call def', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('PlainOption::okOr', () => {
        describe('the input is None', () => {
            const ERR_VAL = Symbol('err');

            let actual = null;
            let called = 0;
            before(() => {
                const input = createNone();
                actual = okOrElseForPlainOption(input, () => {
                    called += 1;

                    return ERR_VAL;
                });
            });

            it('the actual should be Err', () => {
                assert.strictEqual(actual.ok, false);
            });

            it('the actual should be wrap the expect', () => {
                assert.strictEqual(unwrapErrFromResult(actual), ERR_VAL);
            });

            it('should call def', () => {
                assert.strictEqual(called, 1);
            });
        });
    });
});
