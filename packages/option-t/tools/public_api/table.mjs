/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */
import {
    pathRedirectionForLegacy,
    pathRedirectionForRoot,
    pathRedirectionTo,
    pathRedirectionMarkedAsDeprecated,
    pathRedirectionMarkedAsTypeRoot,
    pathRedirectionMarkedAsTypeRootNamespace,
    pathRedirectionMarkedAsCorePrimitive,
} from './api_path_descriptor.mjs';

const MAYBE_DIR = 'maybe';
const MAYBE_CORE_DIR = `${MAYBE_DIR}/core`;
const MAYBE_OPERARORS_DIR = `${MAYBE_DIR}/operators`;

const NULLABLE_DIR = 'nullable';
const NULLABLE_CORE_DIR = `${NULLABLE_DIR}/core`;
const NULLABLE_OPERARORS_DIR = `${NULLABLE_DIR}/operators`;

const UNDEFINABLE_DIR = 'undefinable';
const UNDEFINABLE_CORE_DIR = `${UNDEFINABLE_DIR}/core`;
const UNDEFINABLE_OPERARORS_DIR = `${UNDEFINABLE_DIR}/operators`;

const PLAIN_OPTION_DIR = 'deprecated/plain_option';

const PLAIN_RESULT_DIR = 'plain_result';
const PLAIN_RESULT_CORE_DIR = `${PLAIN_RESULT_DIR}/core`;
const PLAIN_RESULT_DEPRECATED_DIR = `${PLAIN_RESULT_DIR}/deprecated`;
const PLAIN_RESULT_OPERARORS_DIR = `${PLAIN_RESULT_DIR}/operators`;
const PLAIN_RESULT_UNSAFE_DIR = `${PLAIN_RESULT_DIR}/unsafe`;

export const apiTable = Object.freeze({
    '.': pathRedirectionForRoot('index'),

    'classic_option': pathRedirectionForLegacy('deprecated/classic_option/index'),
    'classic_result': pathRedirectionForLegacy('deprecated/classic_result/index'),

    'maybe': pathRedirectionMarkedAsTypeRoot(`${MAYBE_DIR}/index`),
    'maybe/and': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/and`),
    'maybe/and_then': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/and_then`),
    'maybe/and_then_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/and_then_async`),
    'maybe/compat/v54': pathRedirectionMarkedAsDeprecated(
        `${MAYBE_DIR}/compat/v54`,
        'Use `option-t/maybe`.',
    ),
    'maybe/filter': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/filter`),
    'maybe/filter_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/filter_async`),
    'maybe/inspect': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/inspect`),
    'maybe/map': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/map`),
    'maybe/map_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/map_async`),
    'maybe/map_or': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/map_or`),
    'maybe/map_or_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/map_or_async`),
    'maybe/map_or_else': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/map_or_else`),
    'maybe/map_or_else_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/map_or_else_async`),
    'maybe/maybe': pathRedirectionMarkedAsCorePrimitive(`${MAYBE_CORE_DIR}/maybe`),
    'maybe/namespace': pathRedirectionMarkedAsTypeRootNamespace(`${MAYBE_DIR}/namespace`),
    'maybe/ok_or': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/ok_or`),
    'maybe/ok_or_else': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/ok_or_else`),
    'maybe/ok_or_else_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/ok_or_else_async`),
    'maybe/or': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/or`),
    'maybe/or_else': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/or_else`),
    'maybe/or_else_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/or_else_async`),
    'maybe/to_nullable': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/to_nullable`),
    'maybe/to_plain_result': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/to_plain_result`),
    'maybe/to_undefinable': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/to_undefinable`),
    'maybe/unwrap_or': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/unwrap_or`),
    'maybe/unwrap_or_else': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/unwrap_or_else`),
    'maybe/unwrap_or_else_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/unwrap_or_else_async`),
    'maybe/xor': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/xor`),
    'maybe/zip': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/zip`),
    'maybe/zip_with': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/zip_with`),
    'maybe/zip_with_async': pathRedirectionTo(`${MAYBE_OPERARORS_DIR}/zip_with_async`),

    'nullable': pathRedirectionMarkedAsTypeRoot(`${NULLABLE_DIR}/index`),
    'nullable/and': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/and`),
    'nullable/and_then': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/and_then`),
    'nullable/and_then_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/and_then_async`),
    'nullable/compat/v54': pathRedirectionMarkedAsDeprecated(
        `${NULLABLE_DIR}/compat/v54`,
        'Use `option-t/nullable`.',
    ),
    'nullable/filter': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/filter`),
    'nullable/filter_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/filter_async`),
    'nullable/inspect': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/inspect`),
    'nullable/map': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/map`),
    'nullable/map_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/map_async`),
    'nullable/map_or': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/map_or`),
    'nullable/map_or_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/map_or_async`),
    'nullable/map_or_else': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/map_or_else`),
    'nullable/map_or_else_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/map_or_else_async`),
    'nullable/namespace': pathRedirectionMarkedAsTypeRootNamespace(`${NULLABLE_DIR}/namespace`),
    'nullable/nullable': pathRedirectionMarkedAsCorePrimitive(`${NULLABLE_CORE_DIR}/nullable`),
    'nullable/ok_or': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/ok_or`),
    'nullable/ok_or_else': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/ok_or_else`),
    'nullable/ok_or_else_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/ok_or_else_async`),
    'nullable/or': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/or`),
    'nullable/or_else': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/or_else`),
    'nullable/or_else_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/or_else_async`),
    'nullable/to_plain_result': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/to_plain_result`),
    'nullable/to_undefinable': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/to_undefinable`),
    'nullable/unwrap_or': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/unwrap_or`),
    'nullable/unwrap_or_else': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/unwrap_or_else`),
    'nullable/unwrap_or_else_async': pathRedirectionTo(
        `${NULLABLE_OPERARORS_DIR}/unwrap_or_else_async`,
    ),
    'nullable/xor': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/xor`),
    'nullable/zip': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/zip`),
    'nullable/zip_with': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/zip_with`),
    'nullable/zip_with_async': pathRedirectionTo(`${NULLABLE_OPERARORS_DIR}/zip_with_async`),

    'plain_option': pathRedirectionMarkedAsTypeRoot(`${PLAIN_OPTION_DIR}/index`),
    'plain_option/and': pathRedirectionTo(`${PLAIN_OPTION_DIR}/and`),
    'plain_option/and_then': pathRedirectionTo(`${PLAIN_OPTION_DIR}/and_then`),
    'plain_option/and_then_async': pathRedirectionTo(`${PLAIN_OPTION_DIR}/and_then_async`),
    'plain_option/equal': pathRedirectionTo(`${PLAIN_OPTION_DIR}/equal`),
    'plain_option/filter': pathRedirectionTo(`${PLAIN_OPTION_DIR}/filter`),
    'plain_option/flatten': pathRedirectionTo(`${PLAIN_OPTION_DIR}/flatten`),
    'plain_option/from_result': pathRedirectionTo(`${PLAIN_OPTION_DIR}/from_result`),
    'plain_option/inspect': pathRedirectionTo(`${PLAIN_OPTION_DIR}/inspect`),
    'plain_option/map': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map`),
    'plain_option/map_async': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_async`),
    'plain_option/map_or': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or`),
    'plain_option/map_or_async': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or_async`),
    'plain_option/map_or_else': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or_else`),
    'plain_option/map_or_else_async': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or_else_async`),
    'plain_option/namespace': pathRedirectionMarkedAsTypeRootNamespace(
        `${PLAIN_OPTION_DIR}/namespace`,
    ),
    'plain_option/ok_or': pathRedirectionTo(`${PLAIN_OPTION_DIR}/ok_or`),
    'plain_option/ok_or_else': pathRedirectionTo(`${PLAIN_OPTION_DIR}/ok_or_else`),
    'plain_option/option': pathRedirectionMarkedAsCorePrimitive(`${PLAIN_OPTION_DIR}/option`),
    'plain_option/or': pathRedirectionTo(`${PLAIN_OPTION_DIR}/or`),
    'plain_option/or_else': pathRedirectionTo(`${PLAIN_OPTION_DIR}/or_else`),
    'plain_option/or_else_async': pathRedirectionTo(`${PLAIN_OPTION_DIR}/or_else_async`),
    'plain_option/to_nullable': pathRedirectionTo(`${PLAIN_OPTION_DIR}/to_nullable`),
    'plain_option/to_undefinable': pathRedirectionTo(`${PLAIN_OPTION_DIR}/to_undefinable`),
    'plain_option/transpose': pathRedirectionTo(`${PLAIN_OPTION_DIR}/transpose`),
    'plain_option/unsafe/as_mut': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unsafe/as_mut`),
    'plain_option/unsafe/drop': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unsafe/drop`),
    'plain_option/unwrap_or': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unwrap_or`),
    'plain_option/unwrap_or_else': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unwrap_or_else`),
    'plain_option/unwrap_or_else_async': pathRedirectionTo(
        `${PLAIN_OPTION_DIR}/unwrap_or_else_async`,
    ),
    'plain_option/xor': pathRedirectionTo(`${PLAIN_OPTION_DIR}/xor`),

    'plain_result': pathRedirectionMarkedAsTypeRoot(`${PLAIN_RESULT_DIR}/index`),
    'plain_result/and': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/and`),
    'plain_result/and_then': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/and_then`),
    'plain_result/and_then_async': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/and_then_async`,
    ),
    'plain_result/deprecated/try_catch_with_assert_error': pathRedirectionMarkedAsDeprecated(
        `${PLAIN_RESULT_DEPRECATED_DIR}/try_catch_with_assert_error`,
        null,
    ),
    'plain_result/deprecated/try_catch_with_assert_error_async': pathRedirectionMarkedAsDeprecated(
        `${PLAIN_RESULT_DEPRECATED_DIR}/try_catch_with_assert_error_async`,
        null,
    ),
    'plain_result/deprecated/unwrap_or_throw_error': pathRedirectionMarkedAsDeprecated(
        `${PLAIN_RESULT_DEPRECATED_DIR}/unwrap_or_throw_error`,
        'Use `option-t/plain_result/unwrap_or_throw` instead.',
    ),
    'plain_result/deprecated/unwrap_or_throw_unknown': pathRedirectionMarkedAsDeprecated(
        `${PLAIN_RESULT_DEPRECATED_DIR}/unwrap_or_throw_unknown`,
        'Use `option-t/plain_result/unwrap_or_throw` instead.',
    ),
    'plain_result/equal': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/equal`),
    'plain_result/flatten': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/flatten`),
    'plain_result/from_promise_settled_result': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/from_promise_settled_result`,
    ),
    'plain_result/inspect': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/inspect`),
    'plain_result/is_err_and': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/is_err_and`),
    'plain_result/is_ok_and': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/is_ok_and`),
    'plain_result/map': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map`),
    'plain_result/map_async': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map_async`),
    'plain_result/map_err': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map_err`),
    'plain_result/map_err_async': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map_err_async`),
    'plain_result/map_or': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map_or`),
    'plain_result/map_or_async': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map_or_async`),
    'plain_result/map_or_else': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/map_or_else`),
    'plain_result/map_or_else_async': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/map_or_else_async`,
    ),
    'plain_result/namespace': pathRedirectionMarkedAsTypeRootNamespace(
        `${PLAIN_RESULT_DIR}/namespace`,
    ),
    'plain_result/or': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/or`),
    'plain_result/or_else': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/or_else`),
    'plain_result/or_else_async': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/or_else_async`),
    'plain_result/result': pathRedirectionMarkedAsCorePrimitive(`${PLAIN_RESULT_CORE_DIR}/result`),
    'plain_result/to_nullable': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/to_nullable`),
    'plain_result/to_undefinable': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/to_undefinable`,
    ),
    'plain_result/transpose': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/transpose`),
    'plain_result/try_catch': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/try_catch`),
    'plain_result/try_catch_async': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/try_catch_async`,
    ),
    'plain_result/unsafe/as_mut': pathRedirectionTo(`${PLAIN_RESULT_UNSAFE_DIR}/as_mut`),
    'plain_result/unsafe/drop': pathRedirectionTo(`${PLAIN_RESULT_UNSAFE_DIR}/drop`),
    'plain_result/unwrap_or': pathRedirectionTo(`${PLAIN_RESULT_OPERARORS_DIR}/unwrap_or`),
    'plain_result/unwrap_or_else': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/unwrap_or_else`,
    ),
    'plain_result/unwrap_or_else_async': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/unwrap_or_else_async`,
    ),
    'plain_result/unwrap_or_throw': pathRedirectionTo(
        `${PLAIN_RESULT_OPERARORS_DIR}/unwrap_or_throw`,
    ),

    'undefinable': pathRedirectionMarkedAsTypeRoot(`${UNDEFINABLE_DIR}/index`),
    'undefinable/and': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/and`),
    'undefinable/and_then': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/and_then`),
    'undefinable/and_then_async': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/and_then_async`),
    'undefinable/compat/v54': pathRedirectionMarkedAsDeprecated(
        `${UNDEFINABLE_DIR}/compat/v54`,
        'Use `option-t/undefinable`.',
    ),
    'undefinable/filter': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/filter`),
    'undefinable/filter_async': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/filter_async`),
    'undefinable/inspect': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/inspect`),
    'undefinable/map': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/map`),
    'undefinable/map_async': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/map_async`),
    'undefinable/map_or': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/map_or`),
    'undefinable/map_or_async': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/map_or_async`),
    'undefinable/map_or_else': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/map_or_else`),
    'undefinable/map_or_else_async': pathRedirectionTo(
        `${UNDEFINABLE_OPERARORS_DIR}/map_or_else_async`,
    ),
    'undefinable/namespace': pathRedirectionMarkedAsTypeRootNamespace(
        `${UNDEFINABLE_DIR}/namespace`,
    ),
    'undefinable/ok_or': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/ok_or`),
    'undefinable/ok_or_else': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/ok_or_else`),
    'undefinable/ok_or_else_async': pathRedirectionTo(
        `${UNDEFINABLE_OPERARORS_DIR}/ok_or_else_async`,
    ),
    'undefinable/or': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/or`),
    'undefinable/or_else': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/or_else`),
    'undefinable/or_else_async': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/or_else_async`),
    'undefinable/to_nullable': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/to_nullable`),
    'undefinable/to_plain_result': pathRedirectionTo(
        `${UNDEFINABLE_OPERARORS_DIR}/to_plain_result`,
    ),
    'undefinable/undefinable': pathRedirectionMarkedAsCorePrimitive(
        `${UNDEFINABLE_CORE_DIR}/undefinable`,
    ),
    'undefinable/unwrap_or': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/unwrap_or`),
    'undefinable/unwrap_or_else': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/unwrap_or_else`),
    'undefinable/unwrap_or_else_async': pathRedirectionTo(
        `${UNDEFINABLE_OPERARORS_DIR}/unwrap_or_else_async`,
    ),
    'undefinable/xor': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/xor`),
    'undefinable/zip': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/zip`),
    'undefinable/zip_with': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/zip_with`),
    'undefinable/zip_with_async': pathRedirectionTo(`${UNDEFINABLE_OPERARORS_DIR}/zip_with_async`),
});
