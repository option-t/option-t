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

export {
    Option,
    Some,
    None,
    createSome,
    createNone,
    isSome,
    isNone,
    unwrapSome,
    expectSome,
} from './Option.js';

export { andForOption as and } from './and.js';
export { andThenForOption as andThen } from './andThen.js';
export { andThenAsyncForOption as andThenAsync } from './andThenAsync.js';
export { equalForOption as equal } from './equal.js';
export { expectIsSome as expect } from './expect.js';
export { filterForOption as filter } from './filter.js';
export { flattenForOption as flatten } from './flatten.js';
export { inspectOption as inspect } from './inspect.js';
export { mapForOption as map } from './map.js';
export { mapAsyncForOption as mapAsync } from './mapAsync.js';
export { mapOrForOption as mapOr } from './mapOr.js';
export { mapOrAsyncForOption as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForOption as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForOption as mapOrElseAsync } from './mapOrElseAsync.js';
export { orForOption as or } from './or.js';
export { orElseForOption as orElse } from './orElse.js';
export { orElseAsyncForOption as orElseAsync } from './orElseAsync.js';
export { transposeForOption as transpose } from './transpose.js';
export { unwrapSomeFromOption as unwrap } from './unwrap.js';
export { unwrapOrFromOption as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromOption as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromOption as unwrapOrElseAsync } from './unwrapOrElseAsync.js';
