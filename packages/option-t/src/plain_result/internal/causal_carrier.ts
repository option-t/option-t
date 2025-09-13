import { ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW } from './error_message.js';

/**
 *  XXX:
 *  We should not expose this class constructor as a part of public API surface
 *  due to the same reason of why we should not expose {@link CausalCarrierError}.
 *
 *  We need a breaking change if we want to change this value.
 */
const WRAPPER_NAME = 'CausalCarrierError' as const;

/**
 *  XXX:
 *  We should not expose this class constructor as a part of public API surface.
 *
 *  If we expose this as so, user would try to use this class for `instanceof`
 *  but it's not reliable way for user to check a passed object
 *  is an instance of this class in npm (and other compat pkg managers)'s `node_modules/` design.
 *  if user project contains multiple versions of this package, `instanceof` is completely unreliable.
 *  We should not allow to it for user.
 *
 *  Additionally, empirically, for the situation which this class instance is thrown in,
 *  the uscase of _unwrap_or_throw_ operation,
 *  the most important point is a throwing an something error object rather than
 *  what an object is an instance of a specified class.
 *  We should not expose this.
 */
export class CausalCarrierError<E> extends Error {
    override name: typeof WRAPPER_NAME = WRAPPER_NAME;

    constructor(cause: E) {
        super(ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW, {
            cause,
        });
    }
}
