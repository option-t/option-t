'use strict';

const assert = require('assert');

const { andForUndefinable } = require('../../__dist/cjs/Undefinable/and');
const { nonNullableValue } = require('../utils');

describe('Undefinable::and', () => {
    const LEFT = Symbol('a');
    const RIGHT = Symbol('b');

    const nonNullableValueList = [];
    for (const value of nonNullableValue) {
        const LEFT = Symbol('a');
        const RIGHT = Symbol('b');
        nonNullableValueList.push([value, RIGHT, RIGHT]);
        nonNullableValueList.push([LEFT, value, value]);
        nonNullableValueList.push([value, value, value]);
        nonNullableValueList.push([null, value, value]);
        nonNullableValueList.push([value, null, null]);
        nonNullableValueList.push([undefined, value, undefined]);
        nonNullableValueList.push([value, undefined, undefined]);
    }

    const list = [
        ...nonNullableValueList,
        [null, RIGHT, RIGHT],
        [undefined, RIGHT, undefined],
        [LEFT, RIGHT, RIGHT],
        [LEFT, null, null],
        [LEFT, undefined, undefined],
        [null, null, null],
        [null, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, null, undefined],
    ];

    for (const [a, b, expected] of list) {
        it(`a=${String(a)}, b=${String(b)}`, () => {
            assert.strictEqual(andForUndefinable(a, b), expected);
        });
    }
});
