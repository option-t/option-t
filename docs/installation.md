# Installation

```sh
npm install --save option-t

# If you still need a commonjs implementation:
npm install --save option-t@^52

# If you need to supports an environment that does not support ES2017
# without any transform whole of programs including dependencies.
npm install --save option-t@^37

# If your project still...
#   1. Use TypeScript with `--moduleResolution node` or `--moduleResolution node10` setting.
#   2. Or use some other tools that does not support Node.js's package.json's `exports` field.
#       - For example, `eslint-plugin-import@2.27.5`'s `import/no-unresolved` rule would be affected.
npm install --save option-t@^35
```

## Cautions

1. If you would like to work this packages for a more legacy environment (e.g. ES2016 or earlier)
   we recommend to transform whole of codes including your dependencies in your build pipeline.
    - If you need to support ES5 environment, you can use [**`v37`**](https://github.com/option-t/option-t/tree/v37.3.0) too.
1. If your project still use TypeScript's `--moduleResolution` with `node/node10` setting, please use [**`v35`**](https://github.com/option-t/option-t/tree/v35.0.0).


### For TypeScript users

1. If your project use TypeScript, you should set TypeScript's [`--moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)
   or [`--module`](https://www.typescriptlang.org/tsconfig/#module)
   with `bundler`, `node20` or other values that enables to support `exports` field in package.json.
    - If your project still use TypeScript's `--moduleResolution` with `node/node10` setting,
      please use [**`v35`**](https://github.com/option-t/option-t/tree/v35.0.0).
2. If you would like to import this package from CommonJS (as known as [_require(esm)_](https://nodejs.org/docs/latest-v22.x/api/modules.html#loading-ecmascript-modules-using-require)),
   at least with [TypeScript 5.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html), 
   you should set `--module=nodenext` option.
