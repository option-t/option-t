# How to import

**You can use [these paths](./public_api_list.md) in both of CommonJS style and ES Module style.**

### Examples

```js
import { isNotNull } from 'option-t/Nullable';
import { mapForNullable } from 'option-t/Nullable/map';
import { createOk, isOk } from 'option-t/PlainResult';

// or

const { isNotNull } = require('option-t/Nullable');
const { mapForNullable } = require('option-t/Nullable/map');
const { createOk, isOk } = require('option-t/PlainResult');
```

### Cautions

1. If your project use TypeScript, you need to set TypeScript's `--moduleResolution` with `'bundler'` or `node16`
   or other values that enables to support `exports` field in package.json.
    - If your project still use TypeScript's `--moduleResolution` with `node/node10` setting,
      please use [**`v35`**](https://github.com/option-t/option-t/tree/v35.0.0).
