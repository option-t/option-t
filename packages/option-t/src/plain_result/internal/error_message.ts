import { ERR_MSG_CALLED_WITH } from '../../internal/error_message.js';

const OK_TYPE_STR = '`Ok`';
const ERR_TYPE_STR = '`Err`';

export const ERR_MSG_UNWRAP_OK_BUT_INPUT_IS_ERR = ERR_MSG_CALLED_WITH + ERR_TYPE_STR;
export const ERR_MSG_UNWRAP_ERR_BUT_INPUT_IS_OK = ERR_MSG_CALLED_WITH + OK_TYPE_STR;
