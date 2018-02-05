import {
    ERR_MSG_SELECTOR_MUST_NOT_RETURN,
    ERR_MSG_CALLED_WITH,
    ERR_MSG_DEF_MUST_NOT_BE,
    ERR_MSG_DEF_MUST_NOT_RETURN,
} from '../shared/ErrorMessage';

const NO_VAL_VALUE_TYPE_STR = '`null` or `undefined`';

export const ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE = ERR_MSG_SELECTOR_MUST_NOT_RETURN + NO_VAL_VALUE_TYPE_STR;
export const ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE = ERR_MSG_CALLED_WITH + NO_VAL_VALUE_TYPE_STR;
export const ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_MAYBE = ERR_MSG_DEF_MUST_NOT_BE + NO_VAL_VALUE_TYPE_STR;
export const ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE = ERR_MSG_DEF_MUST_NOT_RETURN + NO_VAL_VALUE_TYPE_STR;

