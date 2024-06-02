import { isCurrentRealmErrorInstance } from '../../internal/assert.js';
import { ERR_MSG_DOT_CAUSE_PROPS_IS_NOT_CURRENT_REALM_BUILTIN_ERROR_INSTANCE } from './error_message.js';

const WRAPPER_NAME = 'UnknownCausalError' as const;

export class UnknownCausalError extends Error {
    override name: typeof WRAPPER_NAME = WRAPPER_NAME;

    constructor(cause: unknown) {
        super(ERR_MSG_DOT_CAUSE_PROPS_IS_NOT_CURRENT_REALM_BUILTIN_ERROR_INSTANCE, {
            cause,
        });
    }
}

export function wrapWithNewErrorIfCausalIsUnknown(e: unknown): Error {
    if (isCurrentRealmErrorInstance(e)) {
        return e;
    }

    const wrapper = new UnknownCausalError(e);
    return wrapper;
}
