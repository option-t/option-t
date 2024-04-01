import { fromOkToOption, fromErrToOption } from '../plain_option/from_result.js';

/**
 *  @deprecated 40.5.0
 *  Use {@link fromOkToOption} in `option-t/PlainOption/fromResult` instead.
 */
export const toOptionFromOk: typeof fromOkToOption = fromOkToOption;

/**
 *  @deprecated 40.5.0
 *  Use {@link fromErrToOption} in `option-t/PlainOption/fromResult` instead.
 */
export const toOptionFromErr: typeof fromErrToOption = fromErrToOption;
