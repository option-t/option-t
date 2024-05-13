# How to import

**You can use [these paths](./public_api_list.md) in both of CommonJS style and ES Module style.**

### Examples

```ts
// Import only functions or types which you would like to use.
import { isNotNull, type Nullable } from 'option-t/Nullable';
import { unwrapNullable } from 'option-t/Nullable/Nullable';
import { createOk, isOk } from 'option-t/PlainResult';
```

```ts
// You can use `<TypeName>.<operatorName>` style.
import { Nullable } from 'option-t/Nullable/namespace';

declare let numberOrNull: Nullable.Nullable<number>;
const some = Nullable.unwrapOr(numberOrNull, -1);
```

```js
// for commonjs
const { isNotNull } = require('option-t/Nullable');
const { mapForNullable } = require('option-t/Nullable/map');
const { createOk, isOk } = require('option-t/PlainResult');
```

### Cautions

1. If your project use TypeScript, you need to set TypeScript's [`--moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)
   with `bundler`, `node16` or other values that enables to support `exports` field in package.json.
    - If your project still use TypeScript's `--moduleResolution` with `node/node10` setting,
      please use [**`v35`**](https://github.com/option-t/option-t/tree/v35.0.0).
