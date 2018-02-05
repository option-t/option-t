'use strict';

const assert = require('assert');

const {
    createSome,
    createNone,
} = require('../../cjs/PlainOption/Option');
const { tapOption } = require('../../cjs/PlainOption/tap');

describe('PlainOption::tap', () => {
    describe('input is Some', () => {
        const INPUT_INNER = Symbol('input');

        // eslint-disable-next-line
        let input;
        // eslint-disable-next-line
        let actual;
        let called = 0;
        // eslint-disable-next-line
        let arg;

        before(() => {
            input = createSome(INPUT_INNER);
            actual = tapOption(input, (v) => {
                called += 1;
                arg = v;
            });
        });

        it('should be the expect returned', () => {
            assert.strictEqual(input === actual, true);
        });

        it('should call the tap fn', () => {
            assert.strictEqual(called, 1);
        });

        it('should be the expected arg', () => {
            assert.strictEqual(arg, INPUT_INNER);
        });
    });

    describe('input is None', () => {
        const INPUT_INNER = Symbol('input');

        // eslint-disable-next-line
        let input;
        // eslint-disable-next-line
        let actual;
        let called = 0;
        // eslint-disable-next-line
        let arg;

        before(() => {
            input = createNone(INPUT_INNER);
            actual = tapOption(input, (v) => {
                called += 1;
                arg = v;
            });
        });

        it('should be the expect returned', () => {
            assert.strictEqual(input === actual, true);
        });

        it('should call the tap fn', () => {
            assert.strictEqual(called, 0);
        });
    });
});
