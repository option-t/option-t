'use strict';

module.exports = Object.freeze({
    primitiveVal: [-1, 0, 1, true, false, '', 'bar', null],

    objectVal: [
        { bar: 1},
        [1, 2, 3],
    ],

    nonSerializableObjectVal: [
        new Set(),
        new Map(),
        new WeakSet(),
        new WeakMap(),
        new Promise((resolve) => resolve()),
    ],

    funcVal: [ function(){} ], // eslint-disable-line no-empty-function

    symbolVal: [Symbol('')],

    undefinedVal: [undefined],
});
