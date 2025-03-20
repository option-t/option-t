# How to import

**You can import [these paths in the list of public APIs](./docs/public_api_list.md).**

### Examples

```ts
// Import functions and types which you would like to use:
import { type Maybe } from 'option-t/maybe';
import { type Nullable, isNotNull } from 'option-t/nullable';
import { type Undefinable } from 'option-t/undefinable';
import { type Result, createOk, isOk } from 'option-t/plain_result';
```

```ts
// You can also use `<TypeName>.<operatorName>`
import { Nullable } from 'option-t/nullable/namespace';

declare let numberOrNull: Nullable.Nullable<number>;
// IntelliSense can suggest and narrow down by the order of Type -> related operations.
const some = Nullable.unwrapOr(numberOrNull, -1);
```

```ts
// You can import only a specific function by the more detailed path.
import { type Nullable, unwrapNullable } from 'option-t/nullable/nullable';
import { unwrapOrForNullable } from 'option-t/nullable/unwrap_or';
```

### Cautions

1. If your project use TypeScript, you need to set TypeScript's [`--moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)
   with `bundler`, `node16` or other values that enables to support `exports` field in package.json.
    - If your project still use TypeScript's `--moduleResolution` with `node/node10` setting,
      please use [**`v35`**](https://github.com/option-t/option-t/tree/v35.0.0).
