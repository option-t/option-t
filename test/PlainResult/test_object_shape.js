'use strict';

const assert = require('assert');
const { createOk, createErr, } = require('../../cjs/PlainResult');

describe('The shape of PlainResult::Ok', () => {
    const INNER_VAL = 10;
    let actual = null;
    before(() => {
        actual = createOk(INNER_VAL);
    });

    it('Ok.ok', () => {
        assert.strictEqual(actual.ok, true);
    });

    it('Ok.val', () => {
        assert.strictEqual(actual.val, INNER_VAL);
    });

    it('Ok.err', () => {
        assert.strictEqual(actual.err, undefined);
    });
});

describe('The shape of PlainResult::Err', () => {
    const INNER_VAL = 10;
    let actual = null;
    before(() => {
        actual = createErr(INNER_VAL);
    });

    it('Err.ok', () => {
        assert.strictEqual(actual.ok, false);
    });

    it('Err.val', () => {
        assert.strictEqual(actual.val, undefined);
    });

    it('Err.err', () => {
        assert.strictEqual(actual.err, INNER_VAL);
    });
});
