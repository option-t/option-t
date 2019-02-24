export type NotNullAndUndefined<T> = T extends (null | undefined) ? never : T;

// XXX:
// If we define `type Maybe<T> = NotNullAndUndefined<T> | null`,
// the following case would be compile error.
//
// ``` typescript
//  function bar<T>(input: T): Maybe<T> {
//      if (Math.random() > 0.5) {
//          return input; // <- compile error.
//          // Type 'T' is not assignable to type 'Maybe<T>'.
//          // Type 'T' is not assignable to type 'NotNullAndUndefined<T>'.ts(2322)
//      }
//      return null;
//  }
//  ```
//
// This is less ergonomic with generics.
// So we don't define this as `NotNullAndUndefined<T> | null`.
export type Maybe<T> = T | null | undefined;

export function isNotNullAndUndefined<T>(v: Maybe<T>): v is NotNullAndUndefined<T> {
    return v !== undefined && v !== null;
}

export function isNullOrUndefined<T>(v: Maybe<T>): v is null | undefined {
    return v === undefined || v === null;
}
