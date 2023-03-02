# How to import

**You can use [these paths](./public_api_list.md) in both of CommonJS style and ES Module style.**

This package provides some sub directories to import various functions (e.g. `option-t/PlainResult`).
Each of them includes the same directory hierarchy with [under `src`/](../packages/option-t/src/).

### Examples

```js
import { isNotNull } from 'option-t/Nullable';
import { unwrapNullable } from 'option-t/Nullable/unwrap';
import { createOk, isOk } from 'option-t/PlainResult';
```


## If your toolchain _does not_ support `exports` field in package.json...

We provides some backward compatible styles.
_These styles are kept for backward compatibility. You should switch to `option-t/BarFoo` style path_.

### Case: Your project uses a classic bundler or type checker options which does not support `exports` field.

For example, these classic tools or classic options are not support `exports` field of package.json

- webpack v4 or earlier.
- TypeScript with `--moduleResolution node`.
    - TypeScript v4.6 or earlier only have this option.
- or etc.

Then, you can use these paths:

- `option-t/cjs/**` (__*Deprecated*__)
   - This directory provides only commonjs style modules.
   - You can use this path _to import as commonjs forcefully_.
- `option-t/esm/**` (__*Deprecated*__)
   - This directory privides only ES Modules.
   - You can use this path _to import as ES Module forcefully_.

```js
// If your toolchains supports package.json's exports field
import { isNotNull } from 'option-t/esm/Nullable';
import { unwrapNullable } from 'option-t/esm/Nullable/unwrap';
import { createOk, isOk } from 'option-t/esm/PlainResult';

// or

const { isNotNull } = require('option-t/cjs/Nullable');
const { unwrapNullable } = require('option-t/cjs/Nullable/unwrap');
const { createOk, isOk } = require('option-t/cjs/PlainResult');
```
