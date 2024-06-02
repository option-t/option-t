import { ERR_MSG_CALLED_WITH } from '../../internal/error_message.js';

const OK_TYPE_STR = '`Ok`';
const ERR_TYPE_STR = '`Err`';

export const ERR_MSG_UNWRAP_OK_BUT_INPUT_IS_ERR = ERR_MSG_CALLED_WITH + ERR_TYPE_STR;
export const ERR_MSG_UNWRAP_ERR_BUT_INPUT_IS_OK = ERR_MSG_CALLED_WITH + OK_TYPE_STR;

export const ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW =
    'Carrying `E` in ' + ERR_TYPE_STR + ' instead of throwing it directly. See `.cause`';

const MSG_BUILTIN_ERROR_INSTANCE_OF_CURRENT_REALM = 'an instance of `Error` of the current realm.';

export const ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE =
    'The thrown value is not ' + MSG_BUILTIN_ERROR_INSTANCE_OF_CURRENT_REALM;

export const ERR_MSG_CONTAINED_TYPE_E_SHOULD_BE_BUILTIN_ERROR_INSTANCE =
    'The contained E should be ' + MSG_BUILTIN_ERROR_INSTANCE_OF_CURRENT_REALM;

export const ERR_MSG_DOT_CAUSE_PROPS_IS_NOT_CURRENT_REALM_BUILTIN_ERROR_INSTANCE =
    'This `.cause` is not ' + MSG_BUILTIN_ERROR_INSTANCE_OF_CURRENT_REALM;
