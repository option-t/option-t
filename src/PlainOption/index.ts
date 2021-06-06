/**
 *  This module provies that the Option type interface whose APIs are inspired
 *  by Rust's [`std::option::Option<T>`](https://doc.rust-lang.org/std/option/index.html).
 *
 *  We don't use a class to provides this module by these reason:
 *
 *  - Make treeshaking friendly.
 *      - Almost minifier cannot remove functions by default on `.prototype` even if they are unused.
 *  - Relax the incompatible problem by mixing multiple versions of this package
 *    in module dependency tree.
 *      - e.g. `instanceof` will be a problem. See ([#337](https://github.com/karen-irc/option-t/pull/337)).
 *
 *  And some operators might not return a new object and reuse the input
 *  to reduce an object allocation. Thus comparing _this `Option<T>`` is meaningless like a following code.
 *  This is by design because we think this pattern is meaningless.
 *
 *  ```typescript
 *      const a: Option<number> = createSome(1);
 *      const b: Option<number> = someOperator(a);
 *
 *      // Results of these comparison are undefined.
 *      a === b;
 *      Object.is(a, b);
 *  ```
 */

export { Option, Some, None, createSome, createNone, isSome, isNone } from './Option';

export { andForOption as and } from './and';
export { andThenForOption as andThen } from './andThen';
export { andThenAsyncForOption as andThenAsync } from './andThenAsync';
export { equalForOption as equal } from './equal';
export { expectIsSome as expect } from './expect';
export { filterForOption as filter } from './filter';
export { flattenForOption as flatten } from './flatten';
export { mapForOption as map } from './map';
export { mapAsyncForOption as mapAsync } from './mapAsync';
export { mapOrForOption as mapOr } from './mapOr';
export { mapOrElseForOption as mapOrElse } from './mapOrElse';
export { orForOption as or } from './or';
export { orElseForOption as orElse } from './orElse';
export { transposeForOption as transpose } from './transpose';
export { tapOption as tap } from './tap';
export { unwrapOption as unwrap } from './unwrap';
export { unwrapOrFromOption as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromOption as unwrapOrElse } from './unwrapOrElse';
