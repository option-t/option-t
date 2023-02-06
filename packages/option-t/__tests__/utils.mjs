const numeric = [-1, 0, 1];
const boolean = [true, false];
const str = Object.freeze(['', 'bar']);

export const primitiveVal = Object.freeze([...numeric, ...boolean, ...str, null]);

export const objectVal = Object.freeze([{ bar: 1 }, [1, 2, 3]]);

export const nonSerializableObjectVal = Object.freeze([
    new Set(),
    new Map(),
    new WeakSet(),
    new WeakMap(),
    new Promise((resolve) => resolve('this is promise')),
]);

export const funcVal = Object.freeze([function () {}]);
export const symbolVal = Object.freeze([Symbol('')]);
export const undefinedVal = Object.freeze([undefined]);

export const nonNullableValue = Object.freeze([
    ...numeric,
    ...boolean,
    ...str,
    ...objectVal,
    ...nonSerializableObjectVal,
    ...funcVal,
    ...symbolVal,
]);

export const nonNullableValueCaseListForAsync = Object.freeze(
    nonNullableValue.map((input) => {
        if (input instanceof Promise) {
            // Promise will be unwrap recursively automatically.
            // There is no ways to unwrap single level now.
            // So we need to care that.
            return [input, input, 'this is promise'];
        }

        return [input, input, input];
    })
);

export const nonNullableValueCaseListForSync = Object.freeze(
    nonNullableValue.map((input) => {
        return [input, input, input];
    })
);
