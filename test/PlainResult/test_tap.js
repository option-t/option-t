'use strict';

const assert = require('assert');

const {
    createErr,
    createOk,
} = require('../../cjs/PlainResult/Result');
const {
    tapErr,
    tapOk,
    tapBoth,
} = require('../../cjs/PlainResult/tap');

describe('PlainResult::tap', () => {
    describe('tapOk()', () => {
        describe('input is Ok()', () => {
            const INPUT_INNER = Symbol('input');

            // eslint-disable-next-line
            let input;
            // eslint-disable-next-line
            let actual;
            let called = 0;
            // eslint-disable-next-line
            let arg;

            before(() => {
                input = createOk(INPUT_INNER);
                actual = tapOk(input, (v) => {
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

        describe('input is Err()', () => {
            const INPUT_INNER = Symbol('input');

            // eslint-disable-next-line
            let input;
            // eslint-disable-next-line
            let actual;
            let called = 0;
            // eslint-disable-next-line
            let arg;

            before(() => {
                input = createErr(INPUT_INNER);
                actual = tapOk(input, (v) => {
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

    describe('tapErr()', () => {
        describe('input is Ok()', () => {
            const INPUT_INNER = Symbol('input');

            // eslint-disable-next-line
            let input;
            // eslint-disable-next-line
            let actual;
            let called = 0;
            // eslint-disable-next-line
            let arg;

            before(() => {
                input = createOk(INPUT_INNER);
                actual = tapErr(input, (v) => {
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

        describe('input is Err()', () => {
            const INPUT_INNER = Symbol('input');

            // eslint-disable-next-line
            let input;
            // eslint-disable-next-line
            let actual;
            let called = 0;
            // eslint-disable-next-line
            let arg;

            before(() => {
                input = createErr(INPUT_INNER);
                actual = tapErr(input, (v) => {
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
    });

    describe('tapBoth()', () => {
        describe('input is Ok()', () => {
            const INPUT_INNER = Symbol('input');

            // eslint-disable-next-line
            let input;
            // eslint-disable-next-line
            let actual;
            let calledOk = 0;
            let calledErr = 0;
            // eslint-disable-next-line
            let arg;

            before(() => {
                input = createOk(INPUT_INNER);
                actual = tapBoth(input, (v) => {
                    calledOk += 1;
                    arg = v;
                }, (e) => {
                    calledErr += 1;
                    arg = e;
                });
            });

            it('should be the expect returned', () => {
                assert.strictEqual(input === actual, true);
            });

            it('should call the tap ok fn', () => {
                assert.strictEqual(calledOk, 1);
            });

            it('should call the tap err fn', () => {
                assert.strictEqual(calledErr, 0);
            });

            it('should be the expected arg', () => {
                assert.strictEqual(arg, INPUT_INNER);
            });
        });

        describe('input is Err()', () => {
            const INPUT_INNER = Symbol('input');

            // eslint-disable-next-line
            let input;
            // eslint-disable-next-line
            let actual;
            let calledOk = 0;
            let calledErr = 0;
            // eslint-disable-next-line
            let arg;

            before(() => {
                input = createErr(INPUT_INNER);
                actual = tapBoth(input, (v) => {
                    calledOk += 1;
                    arg = v;
                }, (e) => {
                    calledErr += 1;
                    arg = e;
                });
            });

            it('should be the expect returned', () => {
                assert.strictEqual(input === actual, true);
            });

            it('should call the tap ok fn', () => {
                assert.strictEqual(calledOk, 0);
            });

            it('should call the tap err fn', () => {
                assert.strictEqual(calledErr, 1);
            });

            it('should be the expected arg', () => {
                assert.strictEqual(arg, INPUT_INNER);
            });
        });
    });
});
