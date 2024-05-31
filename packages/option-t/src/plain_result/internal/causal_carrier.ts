import { ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW } from './error_message.js';

const WRAPPER_NAME = 'CausalCarrierError' as const;

export class CausalCarrierError<E> extends Error {
    override name: typeof WRAPPER_NAME = WRAPPER_NAME;

    constructor(cause: E) {
        super(ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW, {
            cause,
        });
    }
}
