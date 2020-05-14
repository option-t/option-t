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
} from './Option.ts';

export { andForOption as and } from './and.ts';
export { andThenForOption as andThen } from './andThen.ts';
export { expectIsSome as expect } from './expect.ts';
export { filterForOption as filter } from './filter.ts';
export { flattenForOption as flatten } from './flatten.ts';
export { mapForOption as map } from './map.ts';
export { mapOrForOption as mapOr } from './mapOr.ts';
export { mapOrElseForOption as mapOrElse } from './mapOrElse.ts';
export { orForOption as or } from './or.ts';
export { orElseForOption as orElse } from './orElse.ts';
export { transposeForOption as transpose } from './transpose.ts';
export { tapOption as tap } from './tap.ts';
export { unwrapOption as unwrap } from './unwrap.ts';
export { unwrapOrFromOption as unwrapOr } from './unwrapOr.ts';
export { unwrapOrElseFromOption as unwrapOrElse } from './unwrapOrElse.ts';
