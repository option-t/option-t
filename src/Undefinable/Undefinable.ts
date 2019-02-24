export type NotUndefined<T> = T extends undefined ? never : T;

// XXX:
// If we define `type Undefinable<T> = NotUndefined<T> | null`,
// the following case would be compile error.
//
// ``` typescript
//  function bar<T>(input: T): Undefinable<T> {
//      if (Math.random() > 0.5) {
//          return input; // <- compile error.
//          // Type 'T' is not assignable to type 'Undefinable<T>'.
//          // Type 'T' is not assignable to type 'NotUndefined<T>'.ts(2322)
//      }
//      return null;
//  }
//  ```
//
// This is less ergonomic with generics.
// So we don't define this as `NotUndefined<T> | null`.
export type Undefinable<T> = T | undefined;

export function isNotUndefined<T>(v: Undefinable<T>): v is NotUndefined<T> {
    return v !== undefined;
}

export function isUndefined<T>(v: Undefinable<T>): v is undefined {
    return v === undefined;
}
