'use strict';

const numeric = [-1, 0, 1];
const boolean = [true, false];
const str = ['', 'bar'];

const objectVal = [
    { bar: 1},
    [1, 2, 3],
];

const nonSerializableObjectVal = [
    new Set(),
    new Map(),
    new WeakSet(),
    new WeakMap(),
    new Promise((resolve) => resolve()),
];

const funcVal = [ function(){} ];
const symbolVal = [Symbol('')];

module.exports = Object.freeze({
    primitiveVal: [...numeric, ...boolean, ...str, null],

    objectVal,

    nonSerializableObjectVal,

    funcVal,

    symbolVal,

    undefinedVal: [undefined],

    nonNullableValue: [
        ...numeric,
        ...boolean,
        ...str,
        ...objectVal,
        ...nonSerializableObjectVal,
        ...funcVal,
        ...symbolVal,
    ],
});
