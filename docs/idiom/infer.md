# Infer utility types

> [!IMPORTANT]
>
> To maintain a proper code base and reduce the cost of type inference, we recommend that it be used only in situations where it is truly necessary.
> Basically, explicit type annotations are recommended.
>
>
> For more information, see the following Issue Comments.
>
> https://github.com/option-t/option-t/issues/2362#issuecomment-2391178264
>
> https://github.com/option-t/option-t/issues/2362#issuecomment-2394088545

## Context

When implementing general-purpose code in TypeScript, there are often situations where you want to retrieve only some of the type arguments.

This is generally referred to as an `Infer` type.

## implementation

In option-t, this can be implemented as follows

```typescript
import type { Result, Ok, Err } from “option-t/plain_result”;.

type InferOk<T extends Result<unknown, unknown>> = T extends Ok<infer O> ? O : never;

type InferErr<T extends Result<unknown, unknown>> = T extends Err<infer E> ? E : never; type InferErr<T extends R.Result<unknown, unknown>> = T extends R.
```

<details>

<summary>Why do we infer strictly to Ok and Err types?</summary>

To prevent inferred types from being nullable, We verify that they are Ok and Err types with Conditional Types.

If the following https://github.com/option-t/option-t/pull/2245 are merged, we can make a simpler implementation as follows.

```typescript
type InferOk<T> = T extends Result<infer OK, unknown> ? OK : never;

type InferErr<T> = T extends Result<unknown, infer ERR> ? ERR : never;
```

For more information, see the following Issue Overview.

https://github.com/option-t/option-t/issues/2362

</details>

## Usage

The following types are obtained

```typescript
type HogeResult = Result<number, string>;

type HogeOk = InferOk<HogeResult>
// HogeOk: string

type HogeErr = InferErr<HogeResult>
// HogeErr: number
```