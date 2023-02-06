# How to import

**You can use [these paths](./public_api_list.md) in both of CommonJS style and ES Module style.**

This package provides some sub directories to import various functions (e.g. `option-t/PlainResult`).
Each of them includes the same directory hierarchy with [under `src`/](../packages/option-t/src/).

### Examples

```js
import { isNotNull } from 'option-t/Nullable';
import { unwrapNullable } from 'option-t/Nullable/unwrap';
import { createOk, isOk } from 'option-t/PlainResult';

// If your toolchains supports package.json's exports field
// (if you fail to import by the above style)
import { isNotNull } from 'option-t/lib/Nullable';
import { unwrapNullable } from 'option-t/lib/Nullable/unwrap';
import { createOk, isOk } from 'option-t/lib/PlainResult';
```


## If your toolchain _does not_ support `exports` field in package.json...

We provides some backward compatible styles. __They are *deprecated* but we're no plan to drop them.__

_These styles are kept for backward compatibility. You should switch to `option-t/BarFoo` style path_.


### Case: Your project is still use TypeScript compiler which lacks to support `moduleResolution=node16` or similar options

Use `option-t/lib/**`.

This directory provides both of an ES Module and a CommonJS style module by
[conditional exports](https://nodejs.org/api/packages.html#conditional-exports)
and host an actual `d.ts` file for legacy TypeScript compiler.

This is a most easy path for migrations (e.g. switch to `option-t/BarFoo` style, or switch to ES Module from CommonJS).


### Case: Your project uses a classic bundler which does not support `exports` field.

you can use these paths:

- `option-t/cjs/**` (__*Deprecated*__)
   - This directory provides only commonjs style modules.
- `option-t/esm/**` (__*Deprecated*__)
   - This directory privides only ES Modules.
