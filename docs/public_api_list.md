# All public API paths

- You can import these paths from both `require()` and `import()`.
- To import these, your toolchains must support [package.json's conditional exports](https://nodejs.org/api/esm.html#esm_conditional_exports).

## Maybe

Basic APIs are exported here:

- [`option-t/maybe`](../packages/option-t/src/maybe/index.ts)
- [`option-t/maybe/namespace`](../packages/option-t/src/maybe/namespace.ts) (We don't recommend to use this without TypeScript due to it would be hard to follow future breaking changes.)

### Core Primitives

- [`option-t/maybe/maybe`](../packages/option-t/src/maybe/core/maybe.ts)

### Operators

- [`option-t/maybe/and`](../packages/option-t/src/maybe/operators/and.ts)
- [`option-t/maybe/and_then`](../packages/option-t/src/maybe/operators/and_then.ts)
- [`option-t/maybe/and_then_async`](../packages/option-t/src/maybe/operators/and_then_async.ts)
- [`option-t/maybe/filter`](../packages/option-t/src/maybe/operators/filter.ts)
- [`option-t/maybe/filter_async`](../packages/option-t/src/maybe/operators/filter_async.ts)
- [`option-t/maybe/inspect`](../packages/option-t/src/maybe/operators/inspect.ts)
- [`option-t/maybe/map`](../packages/option-t/src/maybe/operators/map.ts)
- [`option-t/maybe/map_async`](../packages/option-t/src/maybe/operators/map_async.ts)
- [`option-t/maybe/map_or`](../packages/option-t/src/maybe/operators/map_or.ts)
- [`option-t/maybe/map_or_async`](../packages/option-t/src/maybe/operators/map_or_async.ts)
- [`option-t/maybe/map_or_else`](../packages/option-t/src/maybe/operators/map_or_else.ts)
- [`option-t/maybe/map_or_else_async`](../packages/option-t/src/maybe/operators/map_or_else_async.ts)
- [`option-t/maybe/ok_or`](../packages/option-t/src/maybe/operators/ok_or.ts)
- [`option-t/maybe/ok_or_else`](../packages/option-t/src/maybe/operators/ok_or_else.ts)
- [`option-t/maybe/ok_or_else_async`](../packages/option-t/src/maybe/operators/ok_or_else_async.ts)
- [`option-t/maybe/or`](../packages/option-t/src/maybe/operators/or.ts)
- [`option-t/maybe/or_else`](../packages/option-t/src/maybe/operators/or_else.ts)
- [`option-t/maybe/or_else_async`](../packages/option-t/src/maybe/operators/or_else_async.ts)
- [`option-t/maybe/to_nullable`](../packages/option-t/src/maybe/operators/to_nullable.ts)
- [`option-t/maybe/to_plain_result`](../packages/option-t/src/maybe/operators/to_plain_result.ts)
- [`option-t/maybe/to_undefinable`](../packages/option-t/src/maybe/operators/to_undefinable.ts)
- [`option-t/maybe/unwrap_or`](../packages/option-t/src/maybe/operators/unwrap_or.ts)
- [`option-t/maybe/unwrap_or_else`](../packages/option-t/src/maybe/operators/unwrap_or_else.ts)
- [`option-t/maybe/unwrap_or_else_async`](../packages/option-t/src/maybe/operators/unwrap_or_else_async.ts)
- [`option-t/maybe/xor`](../packages/option-t/src/maybe/operators/xor.ts)
- [`option-t/maybe/zip`](../packages/option-t/src/maybe/operators/zip.ts)
- [`option-t/maybe/zip_with`](../packages/option-t/src/maybe/operators/zip_with.ts)
- [`option-t/maybe/zip_with_async`](../packages/option-t/src/maybe/operators/zip_with_async.ts)




## Nullable

Basic APIs are exported here:

- [`option-t/nullable`](../packages/option-t/src/nullable/index.ts)
- [`option-t/nullable/namespace`](../packages/option-t/src/nullable/namespace.ts) (We don't recommend to use this without TypeScript due to it would be hard to follow future breaking changes.)

### Core Primitives

- [`option-t/nullable/nullable`](../packages/option-t/src/nullable/core/nullable.ts)

### Operators

- [`option-t/nullable/and`](../packages/option-t/src/nullable/operators/and.ts)
- [`option-t/nullable/and_then`](../packages/option-t/src/nullable/operators/and_then.ts)
- [`option-t/nullable/and_then_async`](../packages/option-t/src/nullable/operators/and_then_async.ts)
- [`option-t/nullable/filter`](../packages/option-t/src/nullable/operators/filter.ts)
- [`option-t/nullable/filter_async`](../packages/option-t/src/nullable/operators/filter_async.ts)
- [`option-t/nullable/inspect`](../packages/option-t/src/nullable/operators/inspect.ts)
- [`option-t/nullable/map`](../packages/option-t/src/nullable/operators/map.ts)
- [`option-t/nullable/map_async`](../packages/option-t/src/nullable/operators/map_async.ts)
- [`option-t/nullable/map_or`](../packages/option-t/src/nullable/operators/map_or.ts)
- [`option-t/nullable/map_or_async`](../packages/option-t/src/nullable/operators/map_or_async.ts)
- [`option-t/nullable/map_or_else`](../packages/option-t/src/nullable/operators/map_or_else.ts)
- [`option-t/nullable/map_or_else_async`](../packages/option-t/src/nullable/operators/map_or_else_async.ts)
- [`option-t/nullable/ok_or`](../packages/option-t/src/nullable/operators/ok_or.ts)
- [`option-t/nullable/ok_or_else`](../packages/option-t/src/nullable/operators/ok_or_else.ts)
- [`option-t/nullable/ok_or_else_async`](../packages/option-t/src/nullable/operators/ok_or_else_async.ts)
- [`option-t/nullable/or`](../packages/option-t/src/nullable/operators/or.ts)
- [`option-t/nullable/or_else`](../packages/option-t/src/nullable/operators/or_else.ts)
- [`option-t/nullable/or_else_async`](../packages/option-t/src/nullable/operators/or_else_async.ts)
- [`option-t/nullable/to_plain_result`](../packages/option-t/src/nullable/operators/to_plain_result.ts)
- [`option-t/nullable/to_undefinable`](../packages/option-t/src/nullable/operators/to_undefinable.ts)
- [`option-t/nullable/unwrap_or`](../packages/option-t/src/nullable/operators/unwrap_or.ts)
- [`option-t/nullable/unwrap_or_else`](../packages/option-t/src/nullable/operators/unwrap_or_else.ts)
- [`option-t/nullable/unwrap_or_else_async`](../packages/option-t/src/nullable/operators/unwrap_or_else_async.ts)
- [`option-t/nullable/xor`](../packages/option-t/src/nullable/operators/xor.ts)
- [`option-t/nullable/zip`](../packages/option-t/src/nullable/operators/zip.ts)
- [`option-t/nullable/zip_with`](../packages/option-t/src/nullable/operators/zip_with.ts)
- [`option-t/nullable/zip_with_async`](../packages/option-t/src/nullable/operators/zip_with_async.ts)




## PlainOption (deprecated)

Basic APIs are exported here:

- [`option-t/plain_option`](../packages/option-t/src/deprecated/plain_option/index.ts)
- [`option-t/plain_option/namespace`](../packages/option-t/src/deprecated/plain_option/namespace.ts) (We don't recommend to use this without TypeScript due to it would be hard to follow future breaking changes.)

### Core Primitives

- [`option-t/plain_option/option`](../packages/option-t/src/deprecated/plain_option/option.ts)

### Operators

- [`option-t/plain_option/and`](../packages/option-t/src/deprecated/plain_option/and.ts)
- [`option-t/plain_option/and_then`](../packages/option-t/src/deprecated/plain_option/and_then.ts)
- [`option-t/plain_option/and_then_async`](../packages/option-t/src/deprecated/plain_option/and_then_async.ts)
- [`option-t/plain_option/equal`](../packages/option-t/src/deprecated/plain_option/equal.ts)
- [`option-t/plain_option/filter`](../packages/option-t/src/deprecated/plain_option/filter.ts)
- [`option-t/plain_option/flatten`](../packages/option-t/src/deprecated/plain_option/flatten.ts)
- [`option-t/plain_option/from_result`](../packages/option-t/src/deprecated/plain_option/from_result.ts)
- [`option-t/plain_option/inspect`](../packages/option-t/src/deprecated/plain_option/inspect.ts)
- [`option-t/plain_option/map`](../packages/option-t/src/deprecated/plain_option/map.ts)
- [`option-t/plain_option/map_async`](../packages/option-t/src/deprecated/plain_option/map_async.ts)
- [`option-t/plain_option/map_or`](../packages/option-t/src/deprecated/plain_option/map_or.ts)
- [`option-t/plain_option/map_or_async`](../packages/option-t/src/deprecated/plain_option/map_or_async.ts)
- [`option-t/plain_option/map_or_else`](../packages/option-t/src/deprecated/plain_option/map_or_else.ts)
- [`option-t/plain_option/map_or_else_async`](../packages/option-t/src/deprecated/plain_option/map_or_else_async.ts)
- [`option-t/plain_option/ok_or`](../packages/option-t/src/deprecated/plain_option/ok_or.ts)
- [`option-t/plain_option/ok_or_else`](../packages/option-t/src/deprecated/plain_option/ok_or_else.ts)
- [`option-t/plain_option/or`](../packages/option-t/src/deprecated/plain_option/or.ts)
- [`option-t/plain_option/or_else`](../packages/option-t/src/deprecated/plain_option/or_else.ts)
- [`option-t/plain_option/or_else_async`](../packages/option-t/src/deprecated/plain_option/or_else_async.ts)
- [`option-t/plain_option/to_nullable`](../packages/option-t/src/deprecated/plain_option/to_nullable.ts)
- [`option-t/plain_option/to_undefinable`](../packages/option-t/src/deprecated/plain_option/to_undefinable.ts)
- [`option-t/plain_option/transpose`](../packages/option-t/src/deprecated/plain_option/transpose.ts)
- [`option-t/plain_option/unsafe/as_mut`](../packages/option-t/src/deprecated/plain_option/unsafe/as_mut.ts)
- [`option-t/plain_option/unsafe/drop`](../packages/option-t/src/deprecated/plain_option/unsafe/drop.ts)
- [`option-t/plain_option/unwrap_or`](../packages/option-t/src/deprecated/plain_option/unwrap_or.ts)
- [`option-t/plain_option/unwrap_or_else`](../packages/option-t/src/deprecated/plain_option/unwrap_or_else.ts)
- [`option-t/plain_option/unwrap_or_else_async`](../packages/option-t/src/deprecated/plain_option/unwrap_or_else_async.ts)
- [`option-t/plain_option/xor`](../packages/option-t/src/deprecated/plain_option/xor.ts)




## PlainResult

Basic APIs are exported here:

- [`option-t/plain_result`](../packages/option-t/src/plain_result/index.ts)
- [`option-t/plain_result/namespace`](../packages/option-t/src/plain_result/namespace.ts) (We don't recommend to use this without TypeScript due to it would be hard to follow future breaking changes.)

### Core Primitives

- [`option-t/plain_result/result`](../packages/option-t/src/plain_result/core/result.ts)

### Operators

- [`option-t/plain_result/and`](../packages/option-t/src/plain_result/operators/and.ts)
- [`option-t/plain_result/and_then`](../packages/option-t/src/plain_result/operators/and_then.ts)
- [`option-t/plain_result/and_then_async`](../packages/option-t/src/plain_result/operators/and_then_async.ts)
- [`option-t/plain_result/deprecated/try_catch_with_assert_error`](../packages/option-t/src/plain_result/deprecated/try_catch_with_assert_error.ts) (__deprecated__)
- [`option-t/plain_result/deprecated/try_catch_with_assert_error_async`](../packages/option-t/src/plain_result/deprecated/try_catch_with_assert_error_async.ts) (__deprecated__)
- [`option-t/plain_result/deprecated/unwrap_or_throw_error`](../packages/option-t/src/plain_result/deprecated/unwrap_or_throw_error.ts) (__deprecated__. Use `option-t/plain_result/unwrap_or_throw` instead.)
- [`option-t/plain_result/deprecated/unwrap_or_throw_unknown`](../packages/option-t/src/plain_result/deprecated/unwrap_or_throw_unknown.ts) (__deprecated__. Use `option-t/plain_result/unwrap_or_throw` instead.)
- [`option-t/plain_result/equal`](../packages/option-t/src/plain_result/operators/equal.ts)
- [`option-t/plain_result/flatten`](../packages/option-t/src/plain_result/operators/flatten.ts)
- [`option-t/plain_result/from_promise_settled_result`](../packages/option-t/src/plain_result/operators/from_promise_settled_result.ts)
- [`option-t/plain_result/inspect`](../packages/option-t/src/plain_result/operators/inspect.ts)
- [`option-t/plain_result/is_err_and`](../packages/option-t/src/plain_result/operators/is_err_and.ts)
- [`option-t/plain_result/is_ok_and`](../packages/option-t/src/plain_result/operators/is_ok_and.ts)
- [`option-t/plain_result/map`](../packages/option-t/src/plain_result/operators/map.ts)
- [`option-t/plain_result/map_async`](../packages/option-t/src/plain_result/operators/map_async.ts)
- [`option-t/plain_result/map_err`](../packages/option-t/src/plain_result/operators/map_err.ts)
- [`option-t/plain_result/map_err_async`](../packages/option-t/src/plain_result/operators/map_err_async.ts)
- [`option-t/plain_result/map_or`](../packages/option-t/src/plain_result/operators/map_or.ts)
- [`option-t/plain_result/map_or_async`](../packages/option-t/src/plain_result/operators/map_or_async.ts)
- [`option-t/plain_result/map_or_else`](../packages/option-t/src/plain_result/operators/map_or_else.ts)
- [`option-t/plain_result/map_or_else_async`](../packages/option-t/src/plain_result/operators/map_or_else_async.ts)
- [`option-t/plain_result/or`](../packages/option-t/src/plain_result/operators/or.ts)
- [`option-t/plain_result/or_else`](../packages/option-t/src/plain_result/operators/or_else.ts)
- [`option-t/plain_result/or_else_async`](../packages/option-t/src/plain_result/operators/or_else_async.ts)
- [`option-t/plain_result/to_nullable`](../packages/option-t/src/plain_result/operators/to_nullable.ts)
- [`option-t/plain_result/to_undefinable`](../packages/option-t/src/plain_result/operators/to_undefinable.ts)
- [`option-t/plain_result/transpose`](../packages/option-t/src/plain_result/operators/transpose.ts)
- [`option-t/plain_result/try_catch`](../packages/option-t/src/plain_result/operators/try_catch.ts)
- [`option-t/plain_result/try_catch_async`](../packages/option-t/src/plain_result/operators/try_catch_async.ts)
- [`option-t/plain_result/unsafe/as_mut`](../packages/option-t/src/plain_result/unsafe/as_mut.ts)
- [`option-t/plain_result/unsafe/drop`](../packages/option-t/src/plain_result/unsafe/drop.ts)
- [`option-t/plain_result/unwrap_or`](../packages/option-t/src/plain_result/operators/unwrap_or.ts)
- [`option-t/plain_result/unwrap_or_else`](../packages/option-t/src/plain_result/operators/unwrap_or_else.ts)
- [`option-t/plain_result/unwrap_or_else_async`](../packages/option-t/src/plain_result/operators/unwrap_or_else_async.ts)
- [`option-t/plain_result/unwrap_or_throw`](../packages/option-t/src/plain_result/operators/unwrap_or_throw.ts)




## Undefinable

Basic APIs are exported here:

- [`option-t/undefinable`](../packages/option-t/src/undefinable/index.ts)
- [`option-t/undefinable/namespace`](../packages/option-t/src/undefinable/namespace.ts) (We don't recommend to use this without TypeScript due to it would be hard to follow future breaking changes.)

### Core Primitives

- [`option-t/undefinable/undefinable`](../packages/option-t/src/undefinable/core/undefinable.ts)

### Operators

- [`option-t/undefinable/and`](../packages/option-t/src/undefinable/operators/and.ts)
- [`option-t/undefinable/and_then`](../packages/option-t/src/undefinable/operators/and_then.ts)
- [`option-t/undefinable/and_then_async`](../packages/option-t/src/undefinable/operators/and_then_async.ts)
- [`option-t/undefinable/filter`](../packages/option-t/src/undefinable/operators/filter.ts)
- [`option-t/undefinable/filter_async`](../packages/option-t/src/undefinable/operators/filter_async.ts)
- [`option-t/undefinable/inspect`](../packages/option-t/src/undefinable/operators/inspect.ts)
- [`option-t/undefinable/map`](../packages/option-t/src/undefinable/operators/map.ts)
- [`option-t/undefinable/map_async`](../packages/option-t/src/undefinable/operators/map_async.ts)
- [`option-t/undefinable/map_or`](../packages/option-t/src/undefinable/operators/map_or.ts)
- [`option-t/undefinable/map_or_async`](../packages/option-t/src/undefinable/operators/map_or_async.ts)
- [`option-t/undefinable/map_or_else`](../packages/option-t/src/undefinable/operators/map_or_else.ts)
- [`option-t/undefinable/map_or_else_async`](../packages/option-t/src/undefinable/operators/map_or_else_async.ts)
- [`option-t/undefinable/ok_or`](../packages/option-t/src/undefinable/operators/ok_or.ts)
- [`option-t/undefinable/ok_or_else`](../packages/option-t/src/undefinable/operators/ok_or_else.ts)
- [`option-t/undefinable/ok_or_else_async`](../packages/option-t/src/undefinable/operators/ok_or_else_async.ts)
- [`option-t/undefinable/or`](../packages/option-t/src/undefinable/operators/or.ts)
- [`option-t/undefinable/or_else`](../packages/option-t/src/undefinable/operators/or_else.ts)
- [`option-t/undefinable/or_else_async`](../packages/option-t/src/undefinable/operators/or_else_async.ts)
- [`option-t/undefinable/to_nullable`](../packages/option-t/src/undefinable/operators/to_nullable.ts)
- [`option-t/undefinable/to_plain_result`](../packages/option-t/src/undefinable/operators/to_plain_result.ts)
- [`option-t/undefinable/unwrap_or`](../packages/option-t/src/undefinable/operators/unwrap_or.ts)
- [`option-t/undefinable/unwrap_or_else`](../packages/option-t/src/undefinable/operators/unwrap_or_else.ts)
- [`option-t/undefinable/unwrap_or_else_async`](../packages/option-t/src/undefinable/operators/unwrap_or_else_async.ts)
- [`option-t/undefinable/xor`](../packages/option-t/src/undefinable/operators/xor.ts)
- [`option-t/undefinable/zip`](../packages/option-t/src/undefinable/operators/zip.ts)
- [`option-t/undefinable/zip_with`](../packages/option-t/src/undefinable/operators/zip_with.ts)
- [`option-t/undefinable/zip_with_async`](../packages/option-t/src/undefinable/operators/zip_with_async.ts)



