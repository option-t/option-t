/**
 *  This module provies that the Result/Either type interface whose APIs are inspired
 *  by Rust's [`std::result::Result<T, E>`](https://doc.rust-lang.org/std/result/index.html).
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
 *      const a: Result<number, string> = createOk(1);
 *      const b: Result<number, string> = someOperator(a);
 *
 *      // Results of these comparison are undefined.
 *      a === b;
 *      Object.is(a, b);
 *  ```
 */
export { Result, Ok, Err, createOk, createErr, isOk, isErr } from './Result';

export { andForResult as and } from './and';
export { andThenForResult as andThen } from './andThen';
export { andThenAsyncForResult as andThenAsync } from './andThenAsync';
export { expectIsOk as expect, expectIsErr as expectErr } from './expect';
export { flattenForResult as flatten } from './flatten';
export { mapForResult as map } from './map';
export { mapOrForResult as mapOr } from './mapOr';
export { mapOrElseForResult as mapOrElse } from './mapOrElse';
export { mapErrForResult as mapErr } from './mapErr';
export { orForResult as or } from './or';
export { orElseForResult as orElse } from './orElse';
export { orElseAsyncForResult as orElseAsync } from './orElseAsync';
export { tapOk, tapErr, tapBoth } from './tap';
export { transposeForResult as transpose } from './transpose';
export {
    toOptionFromOk,
    toOptionFromErr,
    toOptionFromOk as ok,
    toOptionFromErr as err,
} from './toOption';
export { unwrapFromResult as unwrap, unwrapErrFromResult as unwrapErr } from './unwrap';
export { unwrapOrFromResult as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrapOrElse';
