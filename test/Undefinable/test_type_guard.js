'use strict';

const assert = require('assert');
const Undefinable = require('../../cjs/Undefinable');

describe('Undefinable::isNotUndefined', () => {
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
        [undefined, false],
        [null, true],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(input)}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(Undefinable.isNotUndefined(input), expected);
        });
    });
});

describe('Undefinable::isUndefined', () => {
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
        [undefined, true],
        [null, false],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(input)}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(Undefinable.isUndefined(input), expected);
        });
    });
});
