# All public API paths

- You can import these paths from both `require()` and `import()`.
- To import these, your toolchains must support [package.json's conditional exports](https://nodejs.org/api/esm.html#esm_conditional_exports).

## Maybe

Basic APIs are exported here:

- [`option-t/maybe`](../packages/option-t/src/maybe/index.ts)
- [`option-t/maybe/namespace`](../packages/option-t/src/maybe/namespace.ts) (We don't recomment to use this without TypeScript to make it hard to follow future breaking changes.)

### Core Primitives

- [`option-t/maybe/maybe`](../packages/option-t/src/maybe/maybe.ts)

### Operators

- [`option-t/maybe/and`](../packages/option-t/src/maybe/and.ts)
- [`option-t/maybe/and_then`](../packages/option-t/src/maybe/and_then.ts)
- [`option-t/maybe/and_then_async`](../packages/option-t/src/maybe/and_then_async.ts)
- [`option-t/maybe/filter`](../packages/option-t/src/maybe/filter.ts)
- [`option-t/maybe/filter_async`](../packages/option-t/src/maybe/filter_async.ts)
- [`option-t/maybe/inspect`](../packages/option-t/src/maybe/inspect.ts)
- [`option-t/maybe/map`](../packages/option-t/src/maybe/map.ts)
- [`option-t/maybe/map_async`](../packages/option-t/src/maybe/map_async.ts)
- [`option-t/maybe/map_or`](../packages/option-t/src/maybe/map_or.ts)
- [`option-t/maybe/map_or_async`](../packages/option-t/src/maybe/map_or_async.ts)
- [`option-t/maybe/map_or_else`](../packages/option-t/src/maybe/map_or_else.ts)
- [`option-t/maybe/map_or_else_async`](../packages/option-t/src/maybe/map_or_else_async.ts)
- [`option-t/maybe/ok_or`](../packages/option-t/src/maybe/ok_or.ts)
- [`option-t/maybe/ok_or_else`](../packages/option-t/src/maybe/ok_or_else.ts)
- [`option-t/maybe/ok_or_else_async`](../packages/option-t/src/maybe/ok_or_else_async.ts)
- [`option-t/maybe/or`](../packages/option-t/src/maybe/or.ts)
- [`option-t/maybe/or_else`](../packages/option-t/src/maybe/or_else.ts)
- [`option-t/maybe/or_else_async`](../packages/option-t/src/maybe/or_else_async.ts)
- [`option-t/maybe/to_nullable`](../packages/option-t/src/maybe/to_nullable.ts)
- [`option-t/maybe/to_plain_result`](../packages/option-t/src/maybe/to_plain_result.ts)
- [`option-t/maybe/to_undefinable`](../packages/option-t/src/maybe/to_undefinable.ts)
- [`option-t/maybe/unwrap_or`](../packages/option-t/src/maybe/unwrap_or.ts)
- [`option-t/maybe/unwrap_or_else`](../packages/option-t/src/maybe/unwrap_or_else.ts)
- [`option-t/maybe/unwrap_or_else_async`](../packages/option-t/src/maybe/unwrap_or_else_async.ts)
- [`option-t/maybe/xor`](../packages/option-t/src/maybe/xor.ts)
- [`option-t/maybe/zip`](../packages/option-t/src/maybe/zip.ts)
- [`option-t/maybe/zip_with`](../packages/option-t/src/maybe/zip_with.ts)
- [`option-t/maybe/zip_with_async`](../packages/option-t/src/maybe/zip_with_async.ts)




## Nullable

Basic APIs are exported here:

- [`option-t/nullable`](../packages/option-t/src/nullable/index.ts)
- [`option-t/nullable/namespace`](../packages/option-t/src/nullable/namespace.ts) (We don't recomment to use this without TypeScript to make it hard to follow future breaking changes.)

### Core Primitives

- [`option-t/nullable/nullable`](../packages/option-t/src/nullable/nullable.ts)

### Operators

- [`option-t/nullable/and`](../packages/option-t/src/nullable/and.ts)
- [`option-t/nullable/and_then`](../packages/option-t/src/nullable/and_then.ts)
- [`option-t/nullable/and_then_async`](../packages/option-t/src/nullable/and_then_async.ts)
- [`option-t/nullable/filter`](../packages/option-t/src/nullable/filter.ts)
- [`option-t/nullable/filter_async`](../packages/option-t/src/nullable/filter_async.ts)
- [`option-t/nullable/inspect`](../packages/option-t/src/nullable/inspect.ts)
- [`option-t/nullable/map`](../packages/option-t/src/nullable/map.ts)
- [`option-t/nullable/map_async`](../packages/option-t/src/nullable/map_async.ts)
- [`option-t/nullable/map_or`](../packages/option-t/src/nullable/map_or.ts)
- [`option-t/nullable/map_or_async`](../packages/option-t/src/nullable/map_or_async.ts)
- [`option-t/nullable/map_or_else`](../packages/option-t/src/nullable/map_or_else.ts)
- [`option-t/nullable/map_or_else_async`](../packages/option-t/src/nullable/map_or_else_async.ts)
- [`option-t/nullable/ok_or`](../packages/option-t/src/nullable/ok_or.ts)
- [`option-t/nullable/ok_or_else`](../packages/option-t/src/nullable/ok_or_else.ts)
- [`option-t/nullable/ok_or_else_async`](../packages/option-t/src/nullable/ok_or_else_async.ts)
- [`option-t/nullable/or`](../packages/option-t/src/nullable/or.ts)
- [`option-t/nullable/or_else`](../packages/option-t/src/nullable/or_else.ts)
- [`option-t/nullable/or_else_async`](../packages/option-t/src/nullable/or_else_async.ts)
- [`option-t/nullable/to_plain_result`](../packages/option-t/src/nullable/to_plain_result.ts)
- [`option-t/nullable/to_undefinable`](../packages/option-t/src/nullable/to_undefinable.ts)
- [`option-t/nullable/unwrap_or`](../packages/option-t/src/nullable/unwrap_or.ts)
- [`option-t/nullable/unwrap_or_else`](../packages/option-t/src/nullable/unwrap_or_else.ts)
- [`option-t/nullable/unwrap_or_else_async`](../packages/option-t/src/nullable/unwrap_or_else_async.ts)
- [`option-t/nullable/xor`](../packages/option-t/src/nullable/xor.ts)
- [`option-t/nullable/zip`](../packages/option-t/src/nullable/zip.ts)
- [`option-t/nullable/zip_with`](../packages/option-t/src/nullable/zip_with.ts)
- [`option-t/nullable/zip_with_async`](../packages/option-t/src/nullable/zip_with_async.ts)




## PlainOption

Basic APIs are exported here:

- [`option-t/plain_option`](../packages/option-t/src/plain_option/index.ts)
- [`option-t/plain_option/namespace`](../packages/option-t/src/plain_option/namespace.ts) (We don't recomment to use this without TypeScript to make it hard to follow future breaking changes.)

### Core Primitives

- [`option-t/plain_option/option`](../packages/option-t/src/plain_option/option.ts)

### Operators

- [`option-t/plain_option/and`](../packages/option-t/src/plain_option/and.ts)
- [`option-t/plain_option/and_then`](../packages/option-t/src/plain_option/and_then.ts)
- [`option-t/plain_option/and_then_async`](../packages/option-t/src/plain_option/and_then_async.ts)
- [`option-t/plain_option/as_mut`](../packages/option-t/src/plain_option/as_mut.ts)
- [`option-t/plain_option/drop`](../packages/option-t/src/plain_option/drop.ts)
- [`option-t/plain_option/equal`](../packages/option-t/src/plain_option/equal.ts)
- [`option-t/plain_option/filter`](../packages/option-t/src/plain_option/filter.ts)
- [`option-t/plain_option/flatten`](../packages/option-t/src/plain_option/flatten.ts)
- [`option-t/plain_option/from_result`](../packages/option-t/src/plain_option/from_result.ts)
- [`option-t/plain_option/inspect`](../packages/option-t/src/plain_option/inspect.ts)
- [`option-t/plain_option/map`](../packages/option-t/src/plain_option/map.ts)
- [`option-t/plain_option/map_async`](../packages/option-t/src/plain_option/map_async.ts)
- [`option-t/plain_option/map_or`](../packages/option-t/src/plain_option/map_or.ts)
- [`option-t/plain_option/map_or_async`](../packages/option-t/src/plain_option/map_or_async.ts)
- [`option-t/plain_option/map_or_else`](../packages/option-t/src/plain_option/map_or_else.ts)
- [`option-t/plain_option/map_or_else_async`](../packages/option-t/src/plain_option/map_or_else_async.ts)
- [`option-t/plain_option/ok_or`](../packages/option-t/src/plain_option/ok_or.ts)
- [`option-t/plain_option/ok_or_else`](../packages/option-t/src/plain_option/ok_or_else.ts)
- [`option-t/plain_option/or`](../packages/option-t/src/plain_option/or.ts)
- [`option-t/plain_option/or_else`](../packages/option-t/src/plain_option/or_else.ts)
- [`option-t/plain_option/or_else_async`](../packages/option-t/src/plain_option/or_else_async.ts)
- [`option-t/plain_option/to_nullable`](../packages/option-t/src/plain_option/to_nullable.ts)
- [`option-t/plain_option/to_undefinable`](../packages/option-t/src/plain_option/to_undefinable.ts)
- [`option-t/plain_option/transpose`](../packages/option-t/src/plain_option/transpose.ts)
- [`option-t/plain_option/unwrap_or`](../packages/option-t/src/plain_option/unwrap_or.ts)
- [`option-t/plain_option/unwrap_or_else`](../packages/option-t/src/plain_option/unwrap_or_else.ts)
- [`option-t/plain_option/unwrap_or_else_async`](../packages/option-t/src/plain_option/unwrap_or_else_async.ts)
- [`option-t/plain_option/xor`](../packages/option-t/src/plain_option/xor.ts)




## PlainResult

Basic APIs are exported here:

- [`option-t/plain_result`](../packages/option-t/src/plain_result/index.ts)
- [`option-t/plain_result/namespace`](../packages/option-t/src/plain_result/namespace.ts) (We don't recomment to use this without TypeScript to make it hard to follow future breaking changes.)

### Core Primitives

- [`option-t/plain_result/result`](../packages/option-t/src/plain_result/result.ts)

### Operators

- [`option-t/plain_result/and`](../packages/option-t/src/plain_result/and.ts)
- [`option-t/plain_result/and_then`](../packages/option-t/src/plain_result/and_then.ts)
- [`option-t/plain_result/and_then_async`](../packages/option-t/src/plain_result/and_then_async.ts)
- [`option-t/plain_result/as_mut`](../packages/option-t/src/plain_result/as_mut.ts)
- [`option-t/plain_result/drop`](../packages/option-t/src/plain_result/drop.ts)
- [`option-t/plain_result/equal`](../packages/option-t/src/plain_result/equal.ts)
- [`option-t/plain_result/flatten`](../packages/option-t/src/plain_result/flatten.ts)
- [`option-t/plain_result/from_promise_settled_result`](../packages/option-t/src/plain_result/from_promise_settled_result.ts)
- [`option-t/plain_result/inspect`](../packages/option-t/src/plain_result/inspect.ts)
- [`option-t/plain_result/is_err_and`](../packages/option-t/src/plain_result/is_err_and.ts)
- [`option-t/plain_result/is_ok_and`](../packages/option-t/src/plain_result/is_ok_and.ts)
- [`option-t/plain_result/map`](../packages/option-t/src/plain_result/map.ts)
- [`option-t/plain_result/map_async`](../packages/option-t/src/plain_result/map_async.ts)
- [`option-t/plain_result/map_err`](../packages/option-t/src/plain_result/map_err.ts)
- [`option-t/plain_result/map_err_async`](../packages/option-t/src/plain_result/map_err_async.ts)
- [`option-t/plain_result/map_or`](../packages/option-t/src/plain_result/map_or.ts)
- [`option-t/plain_result/map_or_async`](../packages/option-t/src/plain_result/map_or_async.ts)
- [`option-t/plain_result/map_or_else`](../packages/option-t/src/plain_result/map_or_else.ts)
- [`option-t/plain_result/map_or_else_async`](../packages/option-t/src/plain_result/map_or_else_async.ts)
- [`option-t/plain_result/or`](../packages/option-t/src/plain_result/or.ts)
- [`option-t/plain_result/or_else`](../packages/option-t/src/plain_result/or_else.ts)
- [`option-t/plain_result/or_else_async`](../packages/option-t/src/plain_result/or_else_async.ts)
- [`option-t/plain_result/to_nullable`](../packages/option-t/src/plain_result/to_nullable.ts)
- [`option-t/plain_result/to_undefinable`](../packages/option-t/src/plain_result/to_undefinable.ts)
- [`option-t/plain_result/transpose`](../packages/option-t/src/plain_result/transpose.ts)
- [`option-t/plain_result/try_catch`](../packages/option-t/src/plain_result/try_catch.ts)
- [`option-t/plain_result/try_catch_async`](../packages/option-t/src/plain_result/try_catch_async.ts)
- [`option-t/plain_result/unwrap_or`](../packages/option-t/src/plain_result/unwrap_or.ts)
- [`option-t/plain_result/unwrap_or_else`](../packages/option-t/src/plain_result/unwrap_or_else.ts)
- [`option-t/plain_result/unwrap_or_else_async`](../packages/option-t/src/plain_result/unwrap_or_else_async.ts)
- [`option-t/plain_result/unwrap_or_throw`](../packages/option-t/src/plain_result/unwrap_or_throw.ts)
- [`option-t/plain_result/unwrap_or_throw_error`](../packages/option-t/src/plain_result/unwrap_or_throw_error.ts) (__deprecated__. Use `option-t/plain_result/unwrap_or_throw` instead.)
- [`option-t/plain_result/unwrap_or_throw_unknown`](../packages/option-t/src/plain_result/unwrap_or_throw_unknown.ts) (__deprecated__. Use `option-t/plain_result/unwrap_or_throw` instead.)


### Experimental

These paths are experimental. We might cause a breaking change without any major version up.

- [`option-t/plain_result/experimental/try_catch`](../packages/option-t/src/plain_result/experimental/try_catch.ts) (__experimental__)
- [`option-t/plain_result/experimental/try_catch_async`](../packages/option-t/src/plain_result/experimental/try_catch_async.ts) (__experimental__)



## Undefinable

Basic APIs are exported here:

- [`option-t/undefinable`](../packages/option-t/src/undefinable/index.ts)
- [`option-t/undefinable/namespace`](../packages/option-t/src/undefinable/namespace.ts) (We don't recomment to use this without TypeScript to make it hard to follow future breaking changes.)

### Core Primitives

- [`option-t/undefinable/undefinable`](../packages/option-t/src/undefinable/undefinable.ts)

### Operators

- [`option-t/undefinable/and`](../packages/option-t/src/undefinable/and.ts)
- [`option-t/undefinable/and_then`](../packages/option-t/src/undefinable/and_then.ts)
- [`option-t/undefinable/and_then_async`](../packages/option-t/src/undefinable/and_then_async.ts)
- [`option-t/undefinable/filter`](../packages/option-t/src/undefinable/filter.ts)
- [`option-t/undefinable/filter_async`](../packages/option-t/src/undefinable/filter_async.ts)
- [`option-t/undefinable/inspect`](../packages/option-t/src/undefinable/inspect.ts)
- [`option-t/undefinable/map`](../packages/option-t/src/undefinable/map.ts)
- [`option-t/undefinable/map_async`](../packages/option-t/src/undefinable/map_async.ts)
- [`option-t/undefinable/map_or`](../packages/option-t/src/undefinable/map_or.ts)
- [`option-t/undefinable/map_or_async`](../packages/option-t/src/undefinable/map_or_async.ts)
- [`option-t/undefinable/map_or_else`](../packages/option-t/src/undefinable/map_or_else.ts)
- [`option-t/undefinable/map_or_else_async`](../packages/option-t/src/undefinable/map_or_else_async.ts)
- [`option-t/undefinable/ok_or`](../packages/option-t/src/undefinable/ok_or.ts)
- [`option-t/undefinable/ok_or_else`](../packages/option-t/src/undefinable/ok_or_else.ts)
- [`option-t/undefinable/ok_or_else_async`](../packages/option-t/src/undefinable/ok_or_else_async.ts)
- [`option-t/undefinable/or`](../packages/option-t/src/undefinable/or.ts)
- [`option-t/undefinable/or_else`](../packages/option-t/src/undefinable/or_else.ts)
- [`option-t/undefinable/or_else_async`](../packages/option-t/src/undefinable/or_else_async.ts)
- [`option-t/undefinable/to_nullable`](../packages/option-t/src/undefinable/to_nullable.ts)
- [`option-t/undefinable/to_plain_result`](../packages/option-t/src/undefinable/to_plain_result.ts)
- [`option-t/undefinable/unwrap_or`](../packages/option-t/src/undefinable/unwrap_or.ts)
- [`option-t/undefinable/unwrap_or_else`](../packages/option-t/src/undefinable/unwrap_or_else.ts)
- [`option-t/undefinable/unwrap_or_else_async`](../packages/option-t/src/undefinable/unwrap_or_else_async.ts)
- [`option-t/undefinable/xor`](../packages/option-t/src/undefinable/xor.ts)
- [`option-t/undefinable/zip`](../packages/option-t/src/undefinable/zip.ts)
- [`option-t/undefinable/zip_with`](../packages/option-t/src/undefinable/zip_with.ts)
- [`option-t/undefinable/zip_with_async`](../packages/option-t/src/undefinable/zip_with_async.ts)



