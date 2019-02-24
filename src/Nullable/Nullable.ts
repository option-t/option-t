export type NotNull<T> = T extends null ? never : T;

// XXX:
// If we define `type Nullable<T> = NotNull<T> | null`,
// the following case would be compile error.
//
// ``` typescript
//  function bar<T>(input: T): Nullable<T> {
//      if (Math.random() > 0.5) {
//          return input; // <- compile error.
//          // Type 'T' is not assignable to type 'Nullable<T>'.
//          // Type 'T' is not assignable to type 'NotNull<T>'.ts(2322)
//      }
//      return null;
//  }
//  ```
//
// This is less ergonomic with generics.
// So we don't define this as `NotNull<T> | null`.
export type Nullable<T> = T | null;

export function isNotNull<T>(v: Nullable<T>): v is NotNull<T> {
    return v !== null;
}

export function isNull<T>(v: Nullable<T>): v is null {
    return v === null;
}
