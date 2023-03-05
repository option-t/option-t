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
} from './option.js';

export { andThenForOption } from './and_then.js';
export { andThenAsyncForOption } from './and_then_async.js';
export { filterForOption } from './filter.js';
export { flattenForOption } from './flatten.js';
export { inspectOption } from './inspect.js';
export { mapForOption } from './map.js';
export { mapAsyncForOption } from './map_async.js';
export { mapOrForOption } from './map_or.js';
export { mapOrAsyncForOption } from './map_or_async.js';
export { mapOrElseForOption } from './map_or_else.js';
export { mapOrElseAsyncForOption } from './map_or_else_async.js';
export { orElseForOption } from './or_else.js';
export { orElseAsyncForOption } from './or_else_async.js';
export { transposeForOption } from './transpose.js';
export { unwrapOrFromOption } from './unwrap_or.js';
export { unwrapOrElseFromOption } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromOption } from './unwrap_or_else_async.js';
