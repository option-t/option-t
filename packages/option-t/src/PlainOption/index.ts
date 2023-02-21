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
 *      - e.g. `instanceof` will be a problem. See ([#337](https://github.com/option-t/option-t/pull/337)).
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
    type Option,
    type Some,
    type None,
    createSome,
    createNone,
    isSome,
    isNone,
    unwrapSome,
    expectSome,
} from './Option.js';

export { andThenForOption } from './andThen.js';
export { andThenAsyncForOption } from './andThenAsync.js';
export { filterForOption } from './filter.js';
export { flattenForOption } from './flatten.js';
export { inspectOption } from './inspect.js';
export { mapForOption } from './map.js';
export { mapAsyncForOption } from './mapAsync.js';
export { mapOrForOption } from './mapOr.js';
export { mapOrAsyncForOption } from './mapOrAsync.js';
export { mapOrElseForOption } from './mapOrElse.js';
export { mapOrElseAsyncForOption } from './mapOrElseAsync.js';
export { orElseForOption } from './orElse.js';
export { orElseAsyncForOption } from './orElseAsync.js';
export { transposeForOption } from './transpose.js';
export { unwrapOrFromOption } from './unwrapOr.js';
export { unwrapOrElseFromOption } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromOption } from './unwrapOrElseAsync.js';
