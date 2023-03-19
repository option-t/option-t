# How to import

**You can use [these paths](./public_api_list.md) in both of CommonJS style and ES Module style.**

### Examples

```js
import { isNotNull } from 'option-t/Nullable';
import { unwrapNullable } from 'option-t/Nullable/unwrap';
import { createOk, isOk } from 'option-t/PlainResult';
```

## Enforce to import as CommonJS or ES Module

You can enforce to import as CommonJS or ES Module forcely without using Node.js [`--conditions`](https://nodejs.org/docs/latest-v18.x/api/cli.html#-ccondition---conditionscondition) CLI option.
_These might be removed for the future. We don't recommend to use them generally._

- `option-t/cjs/**` (__*Deprecated*__)
   - This directory provides only commonjs style modules.
   - You can use this path _to import as commonjs forcefully_.
- `option-t/esm/**` (__*Deprecated*__)
   - This directory privides only ES Modules.
   - You can use this path _to import as ES Module forcefully_.

```js
import { isNotNull } from 'option-t/esm/Nullable';
import { unwrapNullable } from 'option-t/esm/Nullable/unwrap';
import { createOk, isOk } from 'option-t/esm/PlainResult';

// or

const { isNotNull } = require('option-t/cjs/Nullable');
const { unwrapNullable } = require('option-t/cjs/Nullable/unwrap');
const { createOk, isOk } = require('option-t/cjs/PlainResult');
```
