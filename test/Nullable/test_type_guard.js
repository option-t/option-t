'use strict';

const assert = require('assert');
const Nullable = require('../../__dist/cjs/Nullable');

describe('Nullable::isNotNull', () => {
    const testcase = [
        [-1, true],
        [0, true],
        [1, true],
        [true, true],
        [false, true],
        ['', true],
        [{}, true],
        [[], true],
        [function(){}, true], // eslint-disable-line no-empty-function
        [Symbol(''), true],
        [undefined, true],
        [null, false],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(input)}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(Nullable.isNotNull(input), expected);
        });
    });
});

describe('Nullable::isNull', () => {
    const testcase = [
        [-1, false],
        [0, false],
        [1, false],
        [true, false],
        [false, false],
        ['', false],
        [{}, false],
        [[], false],
        [function(){}, false], // eslint-disable-line no-empty-function
        [Symbol(''), false],
        [undefined, false],
        [null, true],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(input)}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(Nullable.isNull(input), expected);
        });
    });
});
