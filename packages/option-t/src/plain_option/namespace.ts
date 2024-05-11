/**
 *  @deprecated 37.1.0
 *
 *  Consider to use `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value.
 *  In JavaScript, they satisfy almost use cases. Probably, you might not have to use this type.
 */
// We still use ES2015 as a module format.
// eslint-disable-next-line @typescript-eslint/naming-convention
import * as Option from './internal/intermediate_namespace.js';

export { Option };
