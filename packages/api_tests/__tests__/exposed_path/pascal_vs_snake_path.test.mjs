/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */
import { createRequire } from 'node:module';
import test from 'ava';
const require = createRequire(import.meta.url);

const classic = Object.freeze({
    ClassicOption: 'classic_option',
    ClassicResult: 'classic_result',
});

const maybe = Object.freeze({
    'Maybe': 'maybe',
    'Maybe/Maybe': 'maybe/maybe',
    'Maybe/and': 'maybe/and',
    'Maybe/andThen': 'maybe/and_then',
    'Maybe/andThenAsync': 'maybe/and_then_async',
    'Maybe/filter': 'maybe/filter',
    'Maybe/filterAsync': 'maybe/filter_async',
    'Maybe/inspect': 'maybe/inspect',
    'Maybe/map': 'maybe/map',
    'Maybe/mapAsync': 'maybe/map_async',
    'Maybe/mapOr': 'maybe/map_or',
    'Maybe/mapOrAsync': 'maybe/map_or_async',
    'Maybe/mapOrElse': 'maybe/map_or_else',
    'Maybe/mapOrElseAsync': 'maybe/map_or_else_async',
    'Maybe/namespace': 'maybe/namespace',
    'Maybe/okOr': 'maybe/ok_or',
    'Maybe/okOrElse': 'maybe/ok_or_else',
    'Maybe/okOrElseAsync': 'maybe/ok_or_else_async',
    'Maybe/or': 'maybe/or',
    'Maybe/orElse': 'maybe/or_else',
    'Maybe/orElseAsync': 'maybe/or_else_async',
    'Maybe/toNullable': 'maybe/to_nullable',
    'Maybe/toPlainResult': 'maybe/to_plain_result',
    'Maybe/toUndefinable': 'maybe/to_undefinable',
    'Maybe/unwrapOr': 'maybe/unwrap_or',
    'Maybe/unwrapOrElse': 'maybe/unwrap_or_else',
    'Maybe/unwrapOrElseAsync': 'maybe/unwrap_or_else_async',
    'Maybe/xor': 'maybe/xor',
    'Maybe/zip': 'maybe/zip',
    'Maybe/zipWith': 'maybe/zip_with',
});

const nullable = Object.freeze({
    'Nullable': 'nullable',
    'Nullable/Nullable': 'nullable/nullable',
    'Nullable/and': 'nullable/and',
    'Nullable/andThen': 'nullable/and_then',
    'Nullable/andThenAsync': 'nullable/and_then_async',
    'Nullable/filter': 'nullable/filter',
    'Nullable/filterAsync': 'nullable/filter_async',
    'Nullable/inspect': 'nullable/inspect',
    'Nullable/map': 'nullable/map',
    'Nullable/mapAsync': 'nullable/map_async',
    'Nullable/mapOr': 'nullable/map_or',
    'Nullable/mapOrAsync': 'nullable/map_or_async',
    'Nullable/mapOrElse': 'nullable/map_or_else',
    'Nullable/mapOrElseAsync': 'nullable/map_or_else_async',
    'Nullable/namespace': 'nullable/namespace',
    'Nullable/okOr': 'nullable/ok_or',
    'Nullable/okOrElse': 'nullable/ok_or_else',
    'Nullable/okOrElseAsync': 'nullable/ok_or_else_async',
    'Nullable/or': 'nullable/or',
    'Nullable/orElse': 'nullable/or_else',
    'Nullable/orElseAsync': 'nullable/or_else_async',
    'Nullable/toPlainResult': 'nullable/to_plain_result',
    'Nullable/toUndefinable': 'nullable/to_undefinable',
    'Nullable/unwrapOr': 'nullable/unwrap_or',
    'Nullable/unwrapOrElse': 'nullable/unwrap_or_else',
    'Nullable/unwrapOrElseAsync': 'nullable/unwrap_or_else_async',
    'Nullable/xor': 'nullable/xor',
    'Nullable/zip': 'nullable/zip',
    'Nullable/zipWith': 'nullable/zip_with',
    'Nullable/zipWithAsync': 'nullable/zip_with_async',
});

const plainOption = Object.freeze({
    'PlainOption': 'plain_option',
    'PlainOption/Option': 'plain_option/option',
    'PlainOption/and': 'plain_option/and',
    'PlainOption/andThen': 'plain_option/and_then',
    'PlainOption/andThenAsync': 'plain_option/and_then_async',
    'PlainOption/asMut': 'plain_option/as_mut',
    'PlainOption/drop': 'plain_option/drop',
    'PlainOption/equal': 'plain_option/equal',
    'PlainOption/filter': 'plain_option/filter',
    'PlainOption/flatten': 'plain_option/flatten',
    'PlainOption/fromResult': 'plain_option/from_result',
    'PlainOption/inspect': 'plain_option/inspect',
    'PlainOption/map': 'plain_option/map',
    'PlainOption/mapAsync': 'plain_option/map_async',
    'PlainOption/mapOr': 'plain_option/map_or',
    'PlainOption/mapOrAsync': 'plain_option/map_or_async',
    'PlainOption/mapOrElse': 'plain_option/map_or_else',
    'PlainOption/mapOrElseAsync': 'plain_option/map_or_else_async',
    'PlainOption/namespace': 'plain_option/namespace',
    'PlainOption/okOr': 'plain_option/ok_or',
    'PlainOption/okOrElse': 'plain_option/ok_or_else',
    'PlainOption/or': 'plain_option/or',
    'PlainOption/orElse': 'plain_option/or_else',
    'PlainOption/orElseAsync': 'plain_option/or_else_async',
    'PlainOption/toNullable': 'plain_option/to_nullable',
    'PlainOption/toUndefinable': 'plain_option/to_undefinable',
    'PlainOption/transpose': 'plain_option/transpose',
    'PlainOption/unwrapOr': 'plain_option/unwrap_or',
    'PlainOption/unwrapOrElse': 'plain_option/unwrap_or_else',
    'PlainOption/unwrapOrElseAsync': 'plain_option/unwrap_or_else_async',
    'PlainOption/xor': 'plain_option/xor',
});

const plainResult = Object.freeze({
    'PlainResult': 'plain_result',
    'PlainResult/Result': 'plain_result/result',
    'PlainResult/and': 'plain_result/and',
    'PlainResult/andThen': 'plain_result/and_then',
    'PlainResult/andThenAsync': 'plain_result/and_then_async',
    'PlainResult/asMut': 'plain_result/as_mut',
    'PlainResult/drop': 'plain_result/drop',
    'PlainResult/equal': 'plain_result/equal',
    'PlainResult/flatten': 'plain_result/flatten',
    'PlainResult/fromPromiseSettledResult': 'plain_result/from_promise_settled_result',
    'PlainResult/inspect': 'plain_result/inspect',
    'PlainResult/isErrAnd': 'plain_result/is_err_and',
    'PlainResult/isOkAnd': 'plain_result/is_ok_and',
    'PlainResult/map': 'plain_result/map',
    'PlainResult/mapAsync': 'plain_result/map_async',
    'PlainResult/mapErr': 'plain_result/map_err',
    'PlainResult/mapErrAsync': 'plain_result/map_err_async',
    'PlainResult/mapOr': 'plain_result/map_or',
    'PlainResult/mapOrAsync': 'plain_result/map_or_async',
    'PlainResult/mapOrElse': 'plain_result/map_or_else',
    'PlainResult/mapOrElseAsync': 'plain_result/map_or_else_async',
    'PlainResult/namespace': 'plain_result/namespace',
    'PlainResult/or': 'plain_result/or',
    'PlainResult/orElse': 'plain_result/or_else',
    'PlainResult/orElseAsync': 'plain_result/or_else_async',
    'PlainResult/toNullable': 'plain_result/to_nullable',
    'PlainResult/toUndefinable': 'plain_result/to_undefinable',
    'PlainResult/transpose': 'plain_result/transpose',
    'PlainResult/tryCatch': 'plain_result/try_catch',
    'PlainResult/tryCatchAsync': 'plain_result/try_catch_async',
    'PlainResult/unwrapOr': 'plain_result/unwrap_or',
    'PlainResult/unwrapOrElse': 'plain_result/unwrap_or_else',
    'PlainResult/unwrapOrElseAsync': 'plain_result/unwrap_or_else_async',
    'PlainResult/unwrapOrThrowError': 'plain_result/unwrap_or_throw_error',
});

const undefinable = Object.freeze({
    'Undefinable': 'undefinable',
    'Undefinable/Undefinable': 'undefinable/undefinable',
    'Undefinable/and': 'undefinable/and',
    'Undefinable/andThen': 'undefinable/and_then',
    'Undefinable/andThenAsync': 'undefinable/and_then_async',
    'Undefinable/filter': 'undefinable/filter',
    'Undefinable/filterAsync': 'undefinable/filter_async',
    'Undefinable/inspect': 'undefinable/inspect',
    'Undefinable/map': 'undefinable/map',
    'Undefinable/mapAsync': 'undefinable/map_async',
    'Undefinable/mapOr': 'undefinable/map_or',
    'Undefinable/mapOrAsync': 'undefinable/map_or_async',
    'Undefinable/mapOrElse': 'undefinable/map_or_else',
    'Undefinable/mapOrElseAsync': 'undefinable/map_or_else_async',
    'Undefinable/namespace': 'undefinable/namespace',
    'Undefinable/okOr': 'undefinable/ok_or',
    'Undefinable/okOrElse': 'undefinable/ok_or_else',
    'Undefinable/okOrElseAsync': 'undefinable/ok_or_else_async',
    'Undefinable/or': 'undefinable/or',
    'Undefinable/orElse': 'undefinable/or_else',
    'Undefinable/orElseAsync': 'undefinable/or_else_async',
    'Undefinable/toNullable': 'undefinable/to_nullable',
    'Undefinable/toPlainResult': 'undefinable/to_plain_result',
    'Undefinable/unwrapOr': 'undefinable/unwrap_or',
    'Undefinable/unwrapOrElse': 'undefinable/unwrap_or_else',
    'Undefinable/unwrapOrElseAsync': 'undefinable/unwrap_or_else_async',
    'Undefinable/xor': 'undefinable/xor',
    'Undefinable/zip': 'undefinable/zip',
    'Undefinable/zipWith': 'undefinable/zip_with',
    'Undefinable/zipWithAsync': 'undefinable/zip_with_async',
});

const testcaseTable = {
    ...classic,
    ...maybe,
    ...nullable,
    ...plainOption,
    ...plainResult,
    ...undefinable,
};

for (const [pascalCase, snakeCase] of Object.entries(testcaseTable)) {
    test(`esm: ${pascalCase} === ${snakeCase}`, async (t) => {
        const [pascalCaseModule, snakeCaseModule] = await Promise.all([
            import(`option-t/${pascalCase}`),
            import(`option-t/${snakeCase}`),
        ]);
        t.deepEqual(pascalCaseModule, snakeCaseModule, 'have same items');
        t.is(pascalCaseModule, snakeCaseModule, 'point to same object');
    });

    test(`cjs: ${pascalCase} === ${snakeCase}`, (t) => {
        const pascalCaseModule = require(`option-t/${pascalCase}`);
        const snakeCaseModule = require(`option-t/${snakeCase}`);
        t.deepEqual(pascalCaseModule, snakeCaseModule, 'have same items');
        t.is(pascalCaseModule, snakeCaseModule, 'point to same object');
    });
}
