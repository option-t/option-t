import { fromOkToOption, fromErrToOption } from '../plain_option/from_result.js';

/**
 *  @deprecated
 *  Use {@link fromErrToOption} in `option-t/PlainOption/fromResult` instead.
 */
export const toOptionFromOk: typeof fromOkToOption = fromOkToOption;

/**
 *  @deprecated
 *  Use {@link fromErrToOption} in `option-t/PlainOption/fromResult` instead.
 */
export const toOptionFromErr: typeof fromErrToOption = fromErrToOption;
