'use strict';

const assert = require('assert');
const Maybe = require('../../__dist/cjs/Maybe');

describe('Maybe::isSomeActual', () => {
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
        [null, false],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(input)}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(Maybe.isNotNullAndUndefined(input), expected);
        });
    });
});

describe('Maybe::isUndefinedOrNull', () => {
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
        [null, true],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(input)}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(Maybe.isNullOrUndefined(input), expected);
        });
    });
});
