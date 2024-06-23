const ERR_MSG_MUST_NOT_RETURN = ' must not return ';

const TRANSFORM_FUNCTION_NAME = '`transformer`';
const RECOVERY_FUNCTION_NAME = '`recoverer`';
const DEFAULT_VALUE_NAME = '`defaultValue`';

export const ERR_MSG_TRANSFORMER_MUST_NOT_RETURN: string =
    TRANSFORM_FUNCTION_NAME + ERR_MSG_MUST_NOT_RETURN;

export const ERR_MSG_CALLED_WITH = 'called with ';

export const ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE: string = DEFAULT_VALUE_NAME + ' must not be ';

export const ERR_MSG_RECOVERER_MUST_NOT_RETURN: string =
    RECOVERY_FUNCTION_NAME + ERR_MSG_MUST_NOT_RETURN;

export const ERR_MSG_INPUT_IS_FROZEN_NOT_CAST_TO_MUTABLE =
    'input is frozen, cannot cast to mutable';
