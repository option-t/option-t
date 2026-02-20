Changelogs are moved to [GitHub's release page](https://github.com/option-t/option-t/releases).

## 24.1.1

### Internals

* Update dependencies.


## 24.1.0

This is an empty release to announce that `option-t/lib` will be remove in near ,future major releases.

`option-t/lib/***` has been deprecated in v22.1
but we think some people still continue to use it by some reasons.

Finally, webpack v5 and rollup supports `exports` field in their latest stable version. So we think we remove this feature in near future major releases.

If you are still using them,

1. Please start to try to migrate them.
    - Please file an issue as a new issue and link to [the tracking issue](https://github.com/option-t/option-t/issues/808).
2. Please file your issue if you cannot migrate by some reasons.
    - We're not planning to provide an alternative for deprecated APIs.
      But your problem is serious, we need to resolve it.

#### Migration

- If you're using this, please migrate by following steps:

- `option-t/lib/Option`: Use `option-t/esm/Option` or `option-t/cjs/Option`.
- `option-t/lib/Result`: Use `option-t/esm/Result` or `option-t/cjs/Result`.
- Otherwise, replase `option-t/lib/***` to `option-t/**`.


## 24.0.2

### Documentation 

 Handle '.' by tools/generate_import_path_list_markdown #807 


## 24.0.1

### Internals
* Update dependencies.
* Update 'description' in package.json to clarfy the stance of this package #806
* Update keywords in package.json #805 
* Remove 'main' field from package.json #804 
* Use .cjs extension for all commonjs files #798, #801


## 24.0.0

### Breaking Change

* Update typescript compiler to v4.1 ([#792](https://github.com/option-t/option-t/pull/792)).
    * By this change, we would be able to use some new language features for the future change.
      Then they might make our `d.ts` imcompatible with typescript v3.9 or earlier.
    * This version is only change the baseline.
* Drop Node.js v12 from CI. [#762](https://github.com/option-t/option-t/pull/762)
* Omit unused generic type parameters from `unwrap()`/`unwrapErr()`/`unwrapOr()` for PlainResult. [#793](https://github.com/option-t/option-t/pull/793)
    * This would cause some compile error if you specify type parameters for them explicitly.

### Documentation

* Add some memories about why we use same shape. [#765](https://github.com/option-t/option-t/pull/765)
* Move the document related to wrapper objects to `docs/`. [#764](https://github.com/option-t/option-t/pull/764)


### Internals

* Update dependencies.
* Add Node.js v15 to CI [#762](https://github.com/option-t/option-t/pull/762)
* Run tests directly from ava. [#758](https://github.com/option-t/option-t/pull/758)


## 23.0.2

* Update dependencies.

### Documentation

* Add some memories about why we use same shape for PlainResult. [#753](https://github.com/option-t/option-t/pull/753)
* Add some note why we deprecated a wrapper object. [#754](https://github.com/option-t/option-t/pull/754)


## 23.0.1

### Documentation

* Clean up some documents. [#723](https://github.com/option-t/option-t/pull/723)

### Internals

* Update dependencies.
* Avoid to create a function object for each calling `drop()` for `PlainResult`. [#727](https://github.com/option-t/option-t/pull/727)
* Convert scripts to ESM in `tools/` [#652](https://github.com/option-t/option-t/pull/652)


## 23.0.0

### Breaking Changes

* Update typescript compiler to v4.0 ([#716](https://github.com/option-t/option-t/pull/716)).
    * By this change, we would be able to use some new language features for the future change.
      Then they might make our `d.ts` imcompatible with typescript v3.9 or earlier.
    * This version is only change the baseline.


### Documentation

* Stop to update the link to compare each tags in this file.
    * We can compare them by  [GitHub's release page](https://github.com/option-t/option-t/releases) now.


## 22.2.4

[See more details](https://github.com/option-t/option-t/compare/v22.4.3...v22.4.4).

### Internals

* Use prettier to format codes. [#714](https://github.com/option-t/option-t/pull/714)
* Update dependencies.


## 22.4.3

[See more details](https://github.com/option-t/option-t/compare/v22.4.2...v22.4.3).

### Internals

* Use dependabot v2 configuration. [#672](https://github.com/option-t/option-t/pull/672).
* Move to GitHub Actions from CircleCI. [#443](https://github.com/option-t/option-t/issues/443).
* Refactor CI workflow.


## 22.4.2

[See more details](https://github.com/option-t/option-t/compare/v22.4.1...v22.4.2).

### Bug Fix

* Fix the return type of `asMutResult()` as `Mutable`. [#670](https://github.com/option-t/option-t/pull/670).

### Documentation

* Add sections to docs/public_apis.md. [#656](https://github.com/option-t/option-t/pull/656).

### Internals

* Update dependencies.


## 22.4.1

[See more details](https://github.com/option-t/option-t/compare/v22.4.0...v22.4.1).

### Documentation

* Add [docs/public_api_list.md](./docs/public_api_list.md) to list all public API paths
  for conditional exports [#655](https://github.com/option-t/option-t/pull/655).


## 22.4.0

[See more details](https://github.com/option-t/option-t/compare/v22.3.2...v22.4.0).

### New Feature

#### Support conditional exports for public API paths. [#575](https://github.com/option-t/option-t/pull/575).

* If toolchains support [conditional exports](https://nodejs.org/api/esm.html#esm_conditional_exports),
  you can load modules with a same path from both commonjs and ES Module. 
* We tested this feature on Node.js v12.7 or v14.
* Some legacy APIs have not marked for this yet.
* The following list is all:

<details>

* `option-t/Maybe`
* `option-t/Maybe/and`
* `option-t/Maybe/andThen`
* `option-t/Maybe/expect`
* `option-t/Maybe/map`
* `option-t/Maybe/Maybe`
* `option-t/Maybe/mapOr`
* `option-t/Maybe/mapOrElse`
* `option-t/Maybe/or`
* `option-t/Maybe/orElse`
* `option-t/Maybe/tap`
* `option-t/Maybe/unwrap`
* `option-t/Maybe/unwrapOr`
* `option-t/Maybe/unwrapOrElse`
* `option-t/Maybe/xor`
* `option-t/Nullable`
* `option-t/Nullable/and`
* `option-t/Nullable/andThen`
* `option-t/Nullable/expect`
* `option-t/Nullable/map`
* `option-t/Nullable/mapOr`
* `option-t/Nullable/mapOrElse`
* `option-t/Nullable/Nullable`
* `option-t/Nullable/or`
* `option-t/Nullable/orElse`
* `option-t/Nullable/tap`
* `option-t/Nullable/unwrap`
* `option-t/Nullable/unwrapOr`
* `option-t/Nullable/unwrapOrElse`
* `option-t/Nullable/xor`
* `option-t/PlainOption`
* `option-t/PlainOption/and`
* `option-t/PlainOption/andThen`
* `option-t/PlainOption/asMut`
* `option-t/PlainOption/drop`
* `option-t/PlainOption/expect`
* `option-t/PlainOption/filter`
* `option-t/PlainOption/flatten`
* `option-t/PlainOption/map`
* `option-t/PlainOption/mapOr`
* `option-t/PlainOption/mapOrElse`
* `option-t/PlainOption/okOr`
* `option-t/PlainOption/okOrElse`
* `option-t/PlainOption/Option`
* `option-t/PlainOption/or`
* `option-t/PlainOption/orElse`
* `option-t/PlainOption/transpose`
* `option-t/PlainOption/tap`
* `option-t/PlainOption/unwrap`
* `option-t/PlainOption/unwrapOr`
* `option-t/PlainOption/unwrapOrElse`
* `option-t/PlainOption/xor`
* `option-t/PlainResult`
* `option-t/PlainResult/and`
* `option-t/PlainResult/andThen`
* `option-t/PlainResult/asMut`
* `option-t/PlainResult/drop`
* `option-t/PlainResult/expect`
* `option-t/PlainResult/flatten`
* `option-t/PlainResult/map`
* `option-t/PlainResult/mapErr`
* `option-t/PlainResult/mapOr`
* `option-t/PlainResult/mapOrElse`
* `option-t/PlainResult/or`
* `option-t/PlainResult/orElse`
* `option-t/PlainResult/Result`
* `option-t/PlainResult/tap`
* `option-t/PlainResult/toOption`
* `option-t/PlainResult/transpose`
* `option-t/PlainResult/unwrap`
* `option-t/PlainResult/unwrapOr`
* `option-t/PlainResult/unwrapOrElse`
* `option-t/Undefinable`
* `option-t/Undefinable/and`
* `option-t/Undefinable/andThen`
* `option-t/Undefinable/expect`
* `option-t/Undefinable/map`
* `option-t/Undefinable/mapOr`
* `option-t/Undefinable/mapOrElse`
* `option-t/Undefinable/or`
* `option-t/Undefinable/orElse`
* `option-t/Undefinable/tap`
* `option-t/Undefinable/Undefinable`
* `option-t/Undefinable/unwrap`
* `option-t/Undefinable/unwrapOr`
* `option-t/Undefinable/unwrapOrElse`
* `option-t/Undefinable/xor`

</details>

### Internals

* Update dependencies.


## 22.3.2

[See more details](https://github.com/option-t/option-t/compare/v22.3.1...v22.3.2).

### Bugfix

* Export `flatten()` from PlainResult/index. ([#611](https://github.com/option-t/option-t/pull/611))
    * This follow up [#608](https://github.com/option-t/option-t/pull/608)


## 22.3.1

[See more details](https://github.com/option-t/option-t/compare/v22.3.0...v22.3.1).

### Internals

*  Remove renamer-cli from depdendencies. ([#610](https://github.com/option-t/option-t/pull/610)) 


## 22.3.0

[See more details](https://github.com/option-t/option-t/compare/v22.2.4...v22.3.0).

### New Feature

* Implement `flatten()` for PlainResult. ([#608](https://github.com/option-t/option-t/pull/608))


### Internals

* Update dependencies.
* Add more test cases. ([#609](https://github.com/option-t/option-t/pull/609))


## 22.2.4

[See more details](https://github.com/option-t/option-t/compare/v22.2.3...v22.2.4).

### Internals

* Update dependencies.
* Fix the order of arguments for eslint-cli. ([#606](https://github.com/option-t/option-t/pull/606))


## 22.2.3

[See more details](https://github.com/option-t/option-t/compare/v22.2.2...v22.2.3).

### Bug Fix

* Fix `ERR_PACKAGE_PATH_NOT_EXPORTED` error on loading `option-t`. ([#602](https://github.com/option-t/option-t/pull/602))
    * This problem was reproducible with Node.js v13.10 or later.


## 22.2.2

[See more details](https://github.com/option-t/option-t/compare/v22.2.1...v22.2.2).

## Internals

* Add exist paths to 'exports' fields in package.json. ([#579](https://github.com/option-t/option-t/pull/579))
    * By the behavior of Node.js v13.8,
      if we add `exports` field once even if its object is empty `{}`,
      user could not load all subpaths by `option-t/esm/Bar/Foo`.
      This causes a breaking change. So I added these entries to keep the backward compatibility.


## 22.2.1

[See more details](https://github.com/option-t/option-t/compare/v22.2.0...v22.2.1).

### Internals

* Generate package.json to allow to transform it. ([#573](https://github.com/option-t/option-t/pull/573), [#574](https://github.com/option-t/option-t/pull/574))
* Update dependencies.


## 22.2.0

[See more details](https://github.com/option-t/option-t/compare/v22.1.2...v22.2.0).

### New Features

* Add `mapOr()` for `PlainResult<T, E>`. ([#572](https://github.com/option-t/option-t/pull/572))

### Documentations

* Fix changelog outline.


## 22.1.2

[See more details](https://github.com/option-t/option-t/compare/v22.1.1...v22.1.2).

### Not recommend to use `tap()` for `Nullable`/`Undefinable`/`Maybe` generally ([#571](https://github.com/option-t/option-t/pull/571)).

* We added these functions to
    * Sort with other types.
    * Future enhancement for pipelining functions.
* But in generally, simple `if` statement or similar way would be readable and efficient.
    * `if (!!v) { ... }` or `if (v) { }` are completely same behavior, more straight way, and the standard way.
* We'll continue to provide these functions including for `PlainOption`/`PlainResult`.
    * For `PlainOption`/`PlainResult`, we think that this kind of functions are useful
      because `tap()` can hide to touch their properties.


### Internals

* Update dependencies.


## 22.1.1

[See more details](https://github.com/option-t/option-t/compare/v22.1.0...v22.1.1).

### Internals

* Update dependencies.
* Stop to use Reviewable. ([#544](https://github.com/option-t/option-t/pull/544))


## 22.1.0

[See more details](https://github.com/option-t/option-t/compare/v22.0.2...v22.1.0).

### Deprecate `option-t/lib/***` ([#527](https://github.com/option-t/option-t/pull/527))

* __This does not mean that we will remove `option-t/lib` in the next release.__
* For the future relase, we will stop to publish `option-t/lib/***`.
    * This is a preparation for it.
    * To do this, we need dual (cjs+mjs) package support by Node.js
* If you depend on it, you should move to `option-t/esm` (recommended) or `option-t/cjs`.
* [See the PR](https://github.com/option-t/option-t/pull/527) to know more details.


### Internals

* Add configs to allow to write `.mjs`. ([#525](https://github.com/option-t/option-t/pull/525))
* Lock _latest_ Node.js executor to `node:13-buster`. ([#528](https://github.com/option-t/option-t/pull/528))



## 22.0.2

[See more details](https://github.com/option-t/option-t/compare/v22.0.1...v22.0.2).

### Internals

* Fix the custom babel plugin: Early return correctly if import/export declaration does not have StrngLiteral as `source`.
  ([#523](https://github.com/option-t/option-t/pull/523))


## 22.0.1

[See more details](https://github.com/option-t/option-t/compare/v22.0.0...v22.0.1).

### Documentation

* Fix dead link in CHANGELOG.md

### Internals

* Clean up the custom babel plugin to rewrite import/export path with `.mjs`. ([#522](https://github.com/option-t/option-t/pull/522))


## 22.0.0 

[See more details](https://github.com/option-t/option-t/compare/v21.1.0...v22.0.0).

### Breaking Change

#### We remove files which ES Module but has `.js` from either `esm/` or `lib/`.

* We remove `.js` files from `esm/` ([#504](https://github.com/option-t/option-t/pull/504))
  and we supply `.mjs` extension for all import/export declaration by
  [#520](https://github.com/option-t/option-t/pull/520)/[#521](https://github.com/option-t/option-t/pull/521).
* By this change, you can import `import 'option-t/esm/Nullable/index.mjs';`
  or `import 'option-t/lib/Nullable/index.mjs';` after Node.js v13.
* However, this change may cause these problems:
    * If your module bundler does not support `.mjs`, it will raise some errors.
    * If you import files in `esm/` with `.js` extensions, it will raise some errors.


## 21.1.0

* [See more details](https://github.com/option-t/option-t/compare/v21.0.2...v21.1.0).

### Features

*  Implement `xor()` for `Maybe<T>`. ([#411](https://github.com/option-t/option-t/pull/411))

### Internals

* Update dependencies.
* Revendor eslint configs. ([#519](https://github.com/option-t/option-t/pull/519))


## 21.0.2

* [See more details](https://github.com/option-t/option-t/compare/v21.0.1...v21.0.2).

### Internals

* Use TypeScript compiler v3.7 stable. ([#501](https://github.com/option-t/option-t/pull/501))
* Use babel compiler v7.7. ([#499](https://github.com/option-t/option-t/pull/499))


## 21.0.1

### Internals

* Migrate all tests to ava.
    * By this change, we removed mocha.
* We always transform test code via TypeScript compiler.

### Others

* [See more details](https://github.com/option-t/option-t/compare/v21.0.0...v21.0.1).


## 21.0.0

### Breaking Changes

* Update typescript compiler to v3.7 ([#427](https://github.com/option-t/option-t/pull/427)).
    * By this change, we would be able to use some new language features for the future change.
      Then they might make our `d.ts` imcompatible with typescript v3.6 or earlier.
    * This version is only change the baseline.
* Replace the minimum support version of Node.js from v10 to v12.
* [See more details](https://github.com/option-t/option-t/compare/v20.3.1...v21.0.0).


## 20.3.1

* Update a bunch of dependencies.
* [See more details](https://github.com/option-t/option-t/compare/v20.3.0...v20.3.1).


## 20.3.0

* Mark legacy `Option<T>` and `Result<T, E>` as _deprecated_ ([#462](https://github.com/option-t/option-t/pull/462)).
    * This does mean that we don't recommend to use them in your newer code.
    * This does not mean that we drop them soon.
* [See more details](https://github.com/option-t/option-t/compare/v20.2.4...v20.3.0).


## 20.2.4

* Remove power-assert ([#446](https://github.com/option-t/option-t/pull/446)).
* Rename all tests ([#452](https://github.com/option-t/option-t/pull/452)).
* Update dev dependencies.
* See more details: [v20.2.3...v20.2.4](https://github.com/option-t/option-t/compare/v20.2.3...v20.2.4).


## 20.2.3

### Documents

* Fix changelogs.

## 20.2.2

### Internals

* [Migrate to CircleCI](https://github.com/option-t/option-t/milestone/2).
* Update dev dependencies.
* See more details: [v20.2.1...v20.2.2](https://github.com/option-t/option-t/compare/v20.2.1...v20.2.2).


## 20.2.1

### Internals

* Enable `reportUnusedDisableDirectives` to warn unused disable ESLint directives [#428](https://github.com/option-t/option-t/pull/428)).


## 20.2.0

### New Feature

* Implement `xor()` [#409](https://github.com/option-t/option-t/pull/409)).
    * We have not completed to implement this for `Maybe<T>`.
      We added the signature but we don't implement the actual implementation for it
      because there are considerable options such [Nullish Coalescing Proposal](https://github.com/tc39/proposal-nullish-coalescing)
      or [Optional Chaining Proposal](https://github.com/TC39/proposal-optional-chaining).

### Internals

* Update dev dependencies.
    * See [v20.1.1...v20.2.0](https://github.com/option-t/option-t/compare/v20.1.1...v20.2.0).


## 20.1.1

Fix the changelog we missed to update in v20.1.0.


### Documentations

* Add comments to not recommend to create `PlainOption`/`PlainResult` without factory functions ([#395](https://github.com/option-t/option-t/pull/395)).

### Internals

* Add the test to ensure that required properties exist on objects for `PlainOption`/`PlainResult` ([#395](https://github.com/option-t/option-t/pull/395)).
* Add tests for `PlainOption`/`PlainResult`.
    * ([#392](https://github.com/option-t/option-t/pull/392))
    * ([#394](https://github.com/option-t/option-t/pull/394))
* Update dependencies.
    * ([#397](https://github.com/option-t/option-t/pull/397))
    * ([#398](https://github.com/option-t/option-t/pull/398))
    * ([#399](https://github.com/option-t/option-t/pull/399))
    * ([#400](https://github.com/option-t/option-t/pull/400))
    * ([#401](https://github.com/option-t/option-t/pull/401))
    * ([#402](https://github.com/option-t/option-t/pull/402))
    * ([#404](https://github.com/option-t/option-t/pull/404))
    * ([#405](https://github.com/option-t/option-t/pull/405))


## 20.1.0

### New Features

* Add `flatten()` for `PlainOption` ([#389](https://github.com/option-t/option-t/pull/389)).
* Add `filter()` for `PlainOption` ([#390](https://github.com/option-t/option-t/pull/390)).

## 20.0.6

### Documentations

* Add comments which explains undocumented design ([#391](https://github.com/option-t/option-t/pull/391)).


## 20.0.5

### Documentations

* Add comments for operators of `PlainOption`/`PlainResult` ([#385](https://github.com/option-t/option-t/pull/385)).

### Internals

* Allow to compile with TypeScript 3.5 ([#381](https://github.com/option-t/option-t/pull/381)).
* Updete `devDependencies`.


## 20.0.4

### Documentations

* Add comments why we don't recommend to use wrapper objects ([#379](https://github.com/option-t/option-t/pull/379)).
    * We have already written this reason in README.


## 20.0.3

### Bug fix

* Fix misusing `assert.notStrictEqual()` in the test for `Option<T>.flatMap()`.
  ([#373](https://github.com/option-t/option-t/pull/373))
    * This is the bug only for our unit testing, not for our production code.


## 20.0.2

### Internal Change

* Introduce [dependabot](https://dependabot.com/) ([#370](https://github.com/option-t/option-t/issues/370)).
* Update babel. ([#372](https://github.com/option-t/option-t/issues/372)).


## 20.0.1

_`v20.0.0` is a missing number_.

### Breaking Changes

- Remove deprecated APIs ([#364](https://github.com/option-t/option-t/issues/364)).
    - `new Some()` for `lib/Option`.
    - `new None()` for `lib/Option`.
    - `new Ok()` for `lib/Result`.
    - `new Err()` for `lib/Result`.
- Disallow import from 'option-t' ([#365](https://github.com/option-t/option-t/issues/365)).
    - These style importing will no longer work.
        - `import {} from 'option-t';`
        - `const OptionT = require('option-t');`
    - For the future, we might provide all APIs from this entry points.



## 19.3.0

### Deprecations

- Mark deprecated APIs. [#361](https://github.com/option-t/option-t/pull/361) & [#363](https://github.com/option-t/option-t/pull/363)
  These are deprecated for a long time since `v14.1` ([#232](https://github.com/option-t/option-t/issues/232)).
  We'll remove them in the next major release.
    - `new Some()` for `lib/Option`.
    - `new None()` for `lib/Option`.
    - `new Ok()` for `lib/Result`.
    - `new Err()` for `lib/Result`.

### Internal Change

- Update dev dependencies.
    - [#360](https://github.com/option-t/option-t/pull/360)
    - [#357](https://github.com/option-t/option-t/pull/357)
    - [#358](https://github.com/option-t/option-t/pull/358)
- Stop to use `export *`. ([#362](https://github.com/option-t/option-t/issues/362)).


## 19.2.1

### Internal Change

* Update dev dependencies. [#354](https://github.com/option-t/option-t/pull/354)
* Migrate to use typescript-eslint. [#350](https://github.com/option-t/option-t/issues/350) 
* Use `fs.promises` directly in our toolchain. [#353](https://github.com/option-t/option-t/issues/353)


## 19.2.0

### New Features

* Introduce `transpose()` for `PlainOption<Result<T, E>>` & `PlainResult<Option<T>, E>`. ([#348](https://github.com/option-t/option-t/pull/348))


## 19.1.2

### Documentations

* Fix the link to the idiom about express progressive data. ([#347](https://github.com/option-t/option-t/pull/347))


## 19.1.1

### Documentations

* Add the idiom to express progressive data. ([#346](https://github.com/option-t/option-t/pull/346))


## 19.1.0

### New Features

* Introduce `Not***` types for `Nullable`, `Undefinable`, and `Maybe`. ([#344](https://github.com/option-t/option-t/pull/344))
    * These ensure statically that the type will not be _nullable_ by TypeScript's conditional type.
        * `NotNullAndUndefined<T>` will not be `null | undefined`.
        * `NotNull<T>` will not be `null`.
        * `NotUndefined<T>` will not be `undefined`.
    * We use `Not***` prefixes for these type because typescript compiler has `NonNullable<T>` as its builtin type.
    * We might make a function's type signature more strict for the future in [#345](https://github.com/option-t/option-t/pull/345)
      by these types.
        * You can try it via `npm install option-t@next` or `yarn add option-t@next`. Your feedback is welcome!


## 19.0.0

### Breaking Changes

#### Drop Node v8 support ([#338](https://github.com/option-t/option-t/pull/338))

* This does not mean that this code will not run with Node.js v8 immediately.
* But this allow to introduce a change which is incompatible with Node v8.


#### Reorganize modules to place `Mut***` in `PlainOption` & `PlainResult` ([#341](https://github.com/option-t/option-t/pull/341))

##### Motivation

* This improve the intelliSense provided by vscode (tsserver) for `PlainOption/Plain` & `PlainResult`.
    * e.g. The previous one is shown as `Readonly<MutSome<T>>`. This is not straight forward.
* * `Mut**` is only used in unsafe operation to improve extreme performance issue.
    * We don't have to expose it in almost case.

##### What's changed

* Change `.ok` property on `MutOption<T>` and `MutResult<T, E>` to mutable.
* Removed `MutSome<T>`, `MutOk<T>`, and `MutErr<E>`.
    * We cannot (or it's hard to) ensure their types statically if we allow to change `.ok`.
* Enforce import `{PlainOption, PlainResult}/asMut` to use `MutOption<T>` or `MutResult<T, E>`.
    * These types are extreme usecase. I think user should import them explicitly.


### New Features

#### Introduce unsafe destructing function for `PlainOption` & `PlainResult` ([#342](https://github.com/option-t/option-t/pull/342))

* This introduce these functions to allow to cut off the reference to the internal values from the outer container object.
    * `PlainOption/drop`
        * `unsafeDropForOption()`
    * `PlainResult/drop`
        * `unsafeDropBothForResult()`
        * `unsafeDropOkForResult()`
        * `unsafeDropErrForResult()`
* These functions might be _unsafe_ in some case. So we add `unsafe` prefixes to them at this moment.
  The unsafe example is here:

 ```javascript
 const some = createSome(1);
 isSome(some); // -> true.
 unsafeDropForOption(some, (some) => {
     some.ok = false;
 });
 isSome(some); // -> false. This is dangerous by breaking the immutability of `PlainOption/Option` unexpectedly.
 ```


### Others

- Refactoring Build System.


## 18.2.0

### Documentations

#### Add the guide to no recommendation to use _wrapper objects (`optiont-/{cjs,esm,lib}/Option<T>` & `optiont-/{cjs,esm,lib}/Result<T, E>`)_ in almost case.
([#337](https://github.com/option-t/option-t/pull/337))

* Basically, we recommend to use _utility types & functions_.
* _Wrapper objects_ has some downside if your project has multiple versions of this package in its project dependencies.
    * `instanceof` might not work expectedly if you `(a instanceof b)` in this case.
      This is confusable behavior.
        * `a` is created by the constructor provided by the version _a_ of this.
        * `b` is the constructor provided by the version _b_ of this.
    * Broat bundle size unnecessarily.
        * It's hard for almost JS code minifier to minify a property on prototype chain.
* So we decide to no-recommend _wrapper objects_ without any strong motivation.
    * This does not mean to make them obsolete or deprecate **now**.
    * We don't have any concrete plan to deprecate these API.
    * Of course, however, we would lower priorities of them.


## 18.1.2

- Fix the failure to release [#332](https://github.com/option-t/option-t/issues/332).


## 18.1.1

### Internal Change

- Update dependencies. ([#328](https://github.com/option-t/option-t/pull/328))
- Add ESLint as the linter for TypeScript. ([#329](https://github.com/option-t/option-t/pull/329))
- Overhaul build system. ([#330](https://github.com/option-t/option-t/pull/330))


## 18.1.0

### New Feature

- Add `mapOrElse()` operation for `Result<T, E>` & `PlainResult<T, E>`. [#327](https://github.com/option-t/option-t/pull/327)


## 18.0.3

### Internal Change

- Move to use @babel/preset-env to tranform code from set plugins directly. [#323](https://github.com/option-t/option-t/pull/323)
    - This might cause some regression...


## 18.0.2

### API

- Relax `this` type for callback functions. [#322](https://github.com/option-t/option-t/pull/322)
    - This change is for TypeScript 3.2's `strictBindCallApply` option.


### Internal Change

- Update dependencies.
    - [#319](https://github.com/option-t/option-t/pull/319)
    - [#320](https://github.com/option-t/option-t/pull/320)
    - [#321](https://github.com/option-t/option-t/pull/321)


## 18.0.1

### Internal Change

- Lock yarnpkg on CI to v1.10.1 ([#318](https://github.com/option-t/option-t/pull/318).
    - This changes only effects for a contributor.
    - This avoids the problem like [317](https://github.com/option-t/option-t/pull/317).


## 18.0.0

### Breaking Changes

- Update typescript compiler to v3.0 ([#314](https://github.com/option-t/option-t/pull/314)).

### Internal Change

- Update dependencies ([#314](https://github.com/option-t/option-t/pull/314)).


## 17.1.2

- Port some tests to avajs
    - [#310](https://github.com/option-t/option-t/pull/310)
    - [#311](https://github.com/option-t/option-t/pull/311)
    - [#312](https://github.com/option-t/option-t/pull/312)


## 17.1.1

- Overhaul README.md. ([#303](https://github.com/option-t/option-t/pull/303))
- Update dependencies. ([#304](https://github.com/option-t/option-t/pull/304))


## 17.1.0

- Add `"SideEffects": false` to help webpack's tree shaking. ([#295](https://github.com/option-t/option-t/pull/295))
- Update `devDependencies`. ([#296](https://github.com/option-t/option-t/pull/296))


## 17.0.0

### Breaking Change

- Obsolete `instanceof` checking for `lib/Option` and `lib/Result`. ([#287](https://github.com/option-t/option-t/pull/287))
    - We preserve constructors: `Ok`, `Err`, `Some`, and `None` for a backward compatibility.
    - We don't have any plan to remove these constructors. If we remove them, we might provide some refactoring scripts.
- Overhaul type definitions for `lib/Option` and `lib/Result`. ([#287](https://github.com/option-t/option-t/pull/287))
    - If your code use their type definitions, this may breaks your code.
- Rename `ResultBase._is_ok` to `ResultBase._isOk`. ([#287](https://github.com/option-t/option-t/pull/287))
    - These are private APIs. You should not use this.



## 16.1.1

### Documentations

- Update README.
 ([#284](https://github.com/option-t/option-t/pull/284))
 ([#285](https://github.com/option-t/option-t/pull/285))
 ([#286](https://github.com/option-t/option-t/pull/286))


## 16.1.0

### Enhancement

- `index.js` exports `createSome` and `createNone` for `lib/Option`. ([#283](https://github.com/option-t/option-t/pull/283))
    - This follows up [#235](https://github.com/option-t/option-t/pull/235).
    - By this change, you can write `import { createSome } from 'option-t';`.
        - We don't recommend this usage because this is kept for the backward compatibility.
          However, if your code still uses `import { Some, None } from 'option-t'`, then you can migrate them.



## 16.0.0

### Breaking Change

#### Throw `TypeError` if you "null" value as default value to  `unwrapOr()`/`unwrapOrElse` operation for `Maybe`/`Nullable`/`Undefinable`. ([#278](https://github.com/option-t/option-t/pull/278))

- As we warning in v14.3.0, we assert a default value for `unwrapOr()`/`unwrapOrElse` operation for `Maybe`/`Nullable`/`Undefinable`.
- In these case, these functions will throw `TypeError`.
    - Pass these type as a default value for `unwrapOr()`
        - `null` for `unwrapOrFromNullable()`
        - `undefined` for `unwrapOrFromUndefinable()`
        - `null` or `undefined` for `unwrapOrFromMaybe()`
    - Pass these type as the result of default value factory function for `unwrapOrElse()`
        - `null` for `unwrapOrElseFromNullable()`
        - `undefined` for `unwrapOrElseFromUndefinable()`
        - `null` or `undefined` for `unwrapOrElseFromMaybe()`

### Internal Change

- Update Lint rules. ([#279](https://github.com/option-t/option-t/pull/279))
- Update `devDependencies`. ([#280](https://github.com/option-t/option-t/pull/280))


## 15.0.1

### Documentations

- Add the jsdoc comment to constructors which are planned to deprecate in [#232](https://github.com/option-t/option-t/issues/232).
 ([#277](https://github.com/option-t/option-t/pull/277))


## 15.0.0

### Breaking Change

- Rename `lib/utils` -> `lib/shared`. ([#276](https://github.com/option-t/option-t/pull/276))
    - If you use `option-t/lib/utils`, please replace with `option-t/lib/shared`.
- Return the input value on `tap(`) for `Maybe`/`Nullable`/`Undefinable`/`PlainOption`/`PlainResult`. ([#271](https://github.com/option-t/option-t/pull/271))
    - This function returned `void` previously.
    - You would not have to change your code if you don't use the returned value (e.g. `const bar: void = tap(input, fn)` or `somefunc(tap(input, fn))`).


### New Features

- Implement `okOr()`/`okOrElse()` for `PlainOption`. ([#275](https://github.com/option-t/option-t/pull/275))


## 14.4.2

### Internal Change

- Deduplicate error message strings for `Maybe`/`Nullable`/`Undefinable`. ([#272](https://github.com/option-t/option-t/pull/272))


### Documentations

- Fix the changelog.


## 14.4.1

### Documentations

- Fix the changelog.


## 14.4.0

### New Features

#### Add factory functions for `lib/Option` and `lib/Result`. ([#235](https://github.com/option-t/option-t/pull/235))

- This introduces:
    - `createSome<T>(v: T)` and `createNone<T>()` for `lib/Option`.
    - `createOk<T, E>(v: T)` and `createErr<T, E>(e: E)` for `lib/Result`.
- These are migration plans for ([#232](https://github.com/option-t/option-t/issues/232)).
    - We may make these obsolete for the future. So we recommend to use these factory functions instead of these costructors.
        - `new Some()` for `lib/Option`.
        - `new None()` for `lib/Option`.
        - `new Ok()` for `lib/Result`.
        - `new Err()` for `lib/Result`.


### Documentations

- Add the comment for some functions:
    - `map()` for `Maybe`/`Nullable`/`Undefinable`. ([#259](https://github.com/option-t/option-t/pull/259))
    - `mapOr()` for `Maybe`/`Nullable`/`Undefinable`. ([#262](https://github.com/option-t/option-t/pull/262))
    - `andThen()` for `Maybe`/`Nullable`/`Undefinable`. ([#261](https://github.com/option-t/option-t/pull/261))
    - `mapOrElse()` for `Maybe`/`Nullable`/`Undefinable`. ([#263](https://github.com/option-t/option-t/pull/263))
    - `orElse()` for `Maybe`/`Nullable`/`Undefinable`. ([#259](https://github.com/option-t/option-t/pull/259))
    - `and()` for `Maybe`/`Nullable`/`Undefinable`. ([#265](https://github.com/option-t/option-t/pull/265))
    - `or()` for `Maybe`/`Nullable`/`Undefinable`. ([#266](https://github.com/option-t/option-t/pull/266))
    - `tap()` for `Maybe`/`Nullable`/`Undefinable`. ([#264](https://github.com/option-t/option-t/pull/264))


### Internal Changes

- Remove needless `.babelrc`. ([#257](https://github.com/option-t/option-t/pull/257))
- Use mocha's `spec` reporter on CI env. ([#260](https://github.com/option-t/option-t/pull/260))


## 14.3.0

### Notable Change (Documentations)

- We don't recommend to pass a nullable value to the _def_ argument for `unwrapOr(v, def)`.
  ([#253](https://github.com/option-t/option-t/pull/253))
    - We may [assert the value for the future](https://github.com/option-t/option-t/issues/254).
- We don't recommend to return a nullable value as the result of _def_ argument for `unwrapOrElse(v, def)`.
　([#253](https://github.com/option-t/option-t/pull/253))
    - We may [assert the value for the future](https://github.com/option-t/option-t/issues/254).


### Internal Change

- Upgrade our TypeScript version to v2.7. ([#255](https://github.com/option-t/option-t/pull/255))
    - We don't introdue any new syntaxes by this change.
      So we'd not like to mark this as _major_.
- Reconfig tsconfig.json. ([#256](https://github.com/option-t/option-t/pull/256))
- Update our `devDependencies`. ([#252](https://github.com/option-t/option-t/pull/252))
    - If you're just an user, this change does not related to you.

## 14.2.2

### Documentations

- Add the comment for some functions
    - `expect()` for `Maybe`/`Nullable`/`Undefinable`. ([#250](https://github.com/option-t/option-t/pull/250))
    - `unwrap()` for `Maybe`/`Nullable`/`Undefinable`. ([#251](https://github.com/option-t/option-t/pull/251))

### Internal Change

- Update dependencies. ([#252](https://github.com/option-t/option-t/pull/252))


## 14.2.1

### Internal Change & Documentations

- Add the comment why `map()` for `Maybe`/`Nullable`/`Undefinable` throw the `TypeError` if the _selector_ returns a nullable type.
  ([#236](https://github.com/option-t/option-t/pull/236))


## 14.2.0

### Internal Change

- Stabilize the shape for `PlainOption<T>`/`PlainResult<T, E>`. ([#231](https://github.com/option-t/option-t/pull/231))
    - By this change, `None.val` in `lib/PlainOption/Option`, and `Ok.err`/`Err.val` in `lib/PlainResult/Result` would be filled with
     `undefined` and they are [`[[Enumerable]]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).
    - We don't think this is a breaking change because this library would not be used with `for-in` statement and others.
        - If you use these object with those operations, please don't do that.


## 14.1.0

### Notable Change

#### Deprecate `instanceof` checking for `Some`/`None` in `option-t/lib/Option` and `Ok`/`Err` in `option-t/lib/Result`.

- We plan to deprecate `instanceof` checking for above objects for the future release to stabilize object shapes of them for the performance reason.
    - See [#232](https://github.com/option-t/option-t/issues/232).
- __At this major version, we will not obsolete them. But we might make them be obsolete for the next or the next-next major release__.
- Instead use `Option<T>.isSome`, `Option<T>.isNone`, `Result<T, E>.isOk()`, or `Result<T, E>.isErr()`.


## 14.0.0

### Breaking Change

- Remove `do()` functions ([#230](https://github.com/option-t/option-t/pull/230)).
    - You can migrate your code with v13.2.
- Remove `option-t/cjs/PlainResult/Function` and `option-t/esm/PlainResult/Function`.
    - This is a part of refactoring internal types.  ([#223](https://github.com/option-t/option-t/pull/223))
    - This would affect TypeScript user.


## 13.2.0

### Enhancement

#### Add `tap()` functions (Rename `do()` functions to `tap()` at all) ([#229](https://github.com/option-t/option-t/pull/229))

We rename `do()` functions to `tap()` at all to sort with [`rxjs`](https://github.com/ReactiveX/rxjs)
or [`ixjs`](https://github.com/ReactiveX/IxJS).
We leave `do()` as an alias for `tap()` with a backward compatibility.
You code will works well if you don't change your code on updating this version.

_But it will be gone in the next major release_. We recommends to change your code.
Basic migration guides is here:

- Instead of `DoFn`, import `TapFn` from `option-t/***utils/Function`.
- If you use `import { doOnA } from 'option-t/***/A/do';`, instead use `import { tapA } from 'option-t/***/A/tap';`.
- If you use `import AMod from 'option-t/***/A'; AMod.do();`, instead use `import AMod from 'option-t/***/A'; AMod.tap();`.

If you'd like to know more details see https://github.com/option-t/option-t/pull/229.


## 13.1.2

### Bug fix

- Publish `lib/` to npm correctly.  ([#227](https://github.com/option-t/option-t/pull/227))


## 13.1.1

### Documentation

- Fix the indent problem in README.md.  ([#225](https://github.com/option-t/option-t/pull/225))


## 13.1.0

### Enhancement

- Add `lib/` directory which contains both of commonjs style `.js` file and es module style `.mjs` file. ([#224](https://github.com/option-t/option-t/pull/224))
    - Please see _How to import_ section in [README.md](./README.md).


## 13.0.0

### Breaking Change

- Unship a source map. ([#220](https://github.com/option-t/option-t/pull/220))
    - Our shipping code is down-level transformed. But ours not a complicated transform. We can read the transformed code.
    - For debugging purpose, Showing _transformed_ code would be better if it's not complicated.
    - Thus We stop to ship a source map.
- Remove license header comment. ([#222](https://github.com/option-t/option-t/pull/222))
    - After we merged [#221](https://github.com/option-t/option-t/pull/221), we can remove them.
    - If you expect that a minifier preserve `@license` comment to preserve license comment,
      you should care this.


## Enhancement

- Add [LICENSE.MIT](./LICENSE.MIT). ([#221](https://github.com/option-t/option-t/pull/221))


## 12.0.0

### Breaking Change

- Rename from `lib/` to `cjs/`. ([#218](https://github.com/option-t/option-t/pull/218))
    - If you use `option-t/lib`, please replace it with `option-t/cjs`


### Enhancement

- You can use `import { ok, err, } from 'option-t/esm/PlainResult';` instead of `import { toOptionFromOk, toOptionFromErr, } from 'option-t/esm/PlainResult';`. ([#219](https://github.com/option-t/option-t/pull/219))


## 11.0.0

### Breaking Change

- Rename functions. ([#208](https://github.com/option-t/option-t/pull/208))
    - `option-t/lib/Maybe`
        - `/and`: `andMaybe()` -> `andForMaybe()`
        - `/or`: `orMaybe()` -> `orForMaybe()`
    - `option-t/lib/Nullable`
        - `/and`: `andNullable()` -> `andForNullable()`
        - `/or`: `orNullable()` -> `orForNullable()`
    - `option-t/lib/Undefinable`
        - `/and`: `andUndefinable()` -> `andForUndefinable()`
        - `/or`: `orUndefinable()` -> `orForUndefinable()`
    - `option-t/lib/PlainOption`
        - `/or`: `orOption()` -> `orForOption()`
    - `option-t/lib/PlainResult`
        - `/or`: `orResult()` -> `orForResult()`


### Internals

- Inline `isUndefined()`/`isNotUndefined()` by hand to decrease calling a function. ([#209](https://github.com/option-t/option-t/pull/209))
- Inline `isSome()`/`isNone()` by hand to decrease calling a function.  ([#210](https://github.com/option-t/option-t/pull/210))
- Inline `isOk()`/`isErr()` by hand to decrease calling a function.  ([#211](https://github.com/option-t/option-t/pull/211))
- Inline `isNotNullAndUndefined()`/`isNullOrUndefined()` by hand to decrease calling a function.  ([#212](https://github.com/option-t/option-t/pull/212))


## 10.0.1

### Internals

- Inline `isNull()`/`isNotNull()` by hand to decrease calling a function. ([#207](https://github.com/option-t/option-t/pull/207))


## 10.0.0

### Breaking Change

- Remove to support Node v6 LTS. ([#204](https://github.com/option-t/option-t/pull/204))


### Internals

- Update dev dependnecies. ([#202](https://github.com/option-t/option-t/pull/202))


## 9.0.3

### Bug fix

- Fix the bug which does not emit some modules as ES module syntax into `esm/`. ([#201](https://github.com/option-t/option-t/pull/201))
    - This fixes that some files in `option-t/esm` are not ES module.
        - `option-t/esm`
        - `option-t/esm/Option`
        - `option-t/esm/Result`

### Internals

- Clean up internals types. ([#200](https://github.com/option-t/option-t/pull/200))


## 9.0.2

### Internals

- We transfer this repository from [github:saneyuki/option-t.js](https://github.com/saneyuki/option-t.js) to [github:karen-irc/option-t](https://github.com/option-t/option-t).


## 9.0.1

### Internals

- Use `babel-plugin-transform-es2015-block-scoping` to use `const` / `let` for plain js files under `src/`. ([#198](https://github.com/option-t/option-t/pull/198))


## 9.0.0

### Breaking Change

- Change the internal design for `Option<T>`. ([#195](https://github.com/option-t/option-t/pull/195))
- Rethink `PlainResult/do`. ([#197](https://github.com/option-t/option-t/pull/197))
    - Add `doOnBoth` for `PlainResult/do`.
    - Change exporting from `PlainResult/index`. You need to change `import { do, doErr, } from 'option-t/PlainResult';` -> `import { doOnOk, doOnErr, } from 'option-t/PlainResult';`.


## 8.0.1

### Bug fix

- Fix the serious problems.
    - `PlainOption.isSome()` and `PlainResult.isOk()` returns wrong results. ([#196](https://github.com/option-t/option-t/pull/196))


## 8.0.0

## Enhancement

- Add `.mjs` code to `option-t/es6` directory. ([#191](https://github.com/option-t/option-t/pull/191))
- Clean up README.md ([#193](https://github.com/option-t/option-t/pull/193))
- Add type aliases for a plain object ([#194](https://github.com/option-t/option-t/pull/194))
    - See [`option-t/PlainOption`](./src/PlainOption/index.ts) and [`option-t/PlainResult`](./src/PlainResult/index.ts).
    - __CAUTION: This is still expetimental APIs. We might change an interface for the future with the braking change__

## Breaking Change

- Rename `option-t/es6` to `option-t/esm` ([#192](https://github.com/option-t/option-t/pull/192))


## 7.0.1

### Bug fix

- `Maybe::unwrap()` should throw more detailed message. ([#186](https://github.com/option-t/option-t/pull/186))


## 7.0.0

## Enhancement

- Implement more APIs for [`Maybe`](https://github.com/option-t/option-t/tree/master/src/Maybe) module ([#185](https://github.com/option-t/option-t/pull/185))


### Breaking Change

- Rename: ([#184](https://github.com/option-t/option-t/pull/184))
    - `Maybe::isSomeValue()` -> `Maybe::isNotNullAndUndefined()`


## 6.1.0

### Enhancement

- Enhancement for tree shaking via a bundler ([#177](https://github.com/option-t/option-t/pull/177)).
    - Add ES module syntax version to `es6/` directory.
    - You can use them with `option-t/es6/**`.
    - By this change, the output code size may be more smaller
      if you use a bundler which supports tree shaking like [webpack2](https://webpack.js.org/guides/tree-shaking/)
      or [rollup.js](https://github.com/rollup/rollup).


## 6.0.0

### Breaking Change

- Upgrade dependencies. ([#172](https://github.com/option-t/option-t/pull/172))
    - This includes upgrading TypeScript to 2.3.
- Drop support node v4. ([#173](https://github.com/option-t/option-t/pull/173))
- Upgrade our language baseline to ES5 ([#174](https://github.com/option-t/option-t/pull/174))
    - If you use this package for a product targeted to ES3 environment (e.g. ~IE8),
      You need to care about it.
- Rename: ([#176](https://github.com/option-t/option-t/pull/176))
    - `Maybe::isUndefinedOrNull()` -> `Maybe::isNullOrUndefined()`
    - `Maybe::isSomeActual()` -> `Maybe::isSomeValue()`


## 5.0.0

### Breaking Change

- By ([#169](https://github.com/option-t/option-t/pull/169)),
    - You can use `andThen()` function from `option-t/lib/Nullable` or `option-t/lib/Undefinable`.
    - We drop to support for `flatMap()` for `Nullable` or `Undefinable`.
        - It's too hard to undarstand that "flatMap" operation for `T | undefined` or `T | null`.

### Enhancement

- You can use `orElse()` function from `option-t/lib/Nullable` or `option-t/lib/Undefinable`. ([#170](https://github.com/option-t/option-t/pull/170))


## 4.1.0

### New Feature

#### Add utility functions for values which may be `null` or `undefined` ([#167](https://github.com/option-t/option-t/pull/167))

- This is just utility function for their "null value" in ECMA262 world. 
- __This is experimental feature__. Their names are not stable.
- You can use them by:
    - `const Nullable = require('option-t/lib/Nullable');` for `null`
    - `const Undefinable = require('option-t/lib/Undefinable');` for `undefined`
    - `const Maybe = require('option-t/lib/Maybe');` for `null` or `undefined`


## 4.0.0

### Breaking Change

- Remove `engines` field from package.json.  ([#163](https://github.com/option-t/option-t/pull/163))
- All distribution codes are in `lib/` now. ([#164](https://github.com/option-t/option-t/pull/164))
    - If you use `require('option-t/src/Result')`, please change to `require('option-t/lib/Result')`

### Enhancement

- Add `yarn.lock` for library developers ([#162](https://github.com/option-t/option-t/pull/162))


## 3.0.0

### Breaking Change

- Rewrite d.ts ([#157](https://github.com/option-t/option-t/pull/157))
    - By this change, you might have some failure to compile your code with this library.
      So we think this would be a breaking change.


## 2.1.1

### Bug fix

- Revert [#152](https://github.com/option-t/option-t/pull/152) by ([#155](https://github.com/option-t/option-t/issues/155)).


## 2.1.0

### Enhancement

- Use `never` type. ([#154](https://github.com/option-t/option-t/pull/154))
- Use [literal type](https://github.com/Microsoft/TypeScript/pull/9407). ([#152](https://github.com/option-t/option-t/pull/152))


## 2.0.2 (including 2.0.1)

### Bug fix

- Fix the bug which cannot pack files correctly. ([#150](https://github.com/option-t/option-t/pull/150))


## 2.0.0

### Breaking Change

- `this` type are specfied for callbacks ([#142](https://github.com/option-t/option-t/pull/142))
    - This change requires to use TypeScript 2.0 or highers.
- Drop to support `classic` module resolutions ([#145](https://github.com/option-t/option-t/pull/145))
    - Use `--moduleResolution node` or others.

### Internals

- Use TypeScript v2.0 ([#141](https://github.com/option-t/option-t/pull/141))


## 1.0.0

### Breaking Change (Possible)

- These would causes `TypeError` instread of `Error`. ([#132](https://github.com/option-t/option-t/pull/132))
    - `Option<T>.unwrap()`
    - `Option<T>.expect()`
    - `Result<T, E>.unwrap()`
    - `Result<T, E>.unwrapErr()`
    - `Result<T, E>.expect()`

### Internals

- Remove Node v5 from CI. ([#136](https://github.com/option-t/option-t/pull/136))


### Documentation

* Add links to pull request for CHANGELOG.md. ([#129](https://github.com/option-t/option-t/pull/129))
* Fix the sample code of casting from `Option<T>` to `Promise`. ([#130](https://github.com/option-t/option-t/pull/130))


## 0.18.3

### Documentation

* Fix the link to API documentations.([#128](https://github.com/option-t/option-t/pull/128))


## 0.18.2

### Documentation

* Add more descriptions about runtime nullability checking in README.md ([#127](https://github.com/option-t/option-t/pull/127))


## 0.18.1

### Documentation

* Add some semantics description to README.md ([#126](https://github.com/option-t/option-t/pull/126))


## 0.18.0

### Breaking Change

#### Remove `Option<T>.asPromise()` ([#125](https://github.com/option-t/option-t/pull/125))

In previous version (~v0.17), we provide `Option<T>.asPromise()` utility method casting from `Option<T>` to `Promise`.
Its methods always treats `None` as a rejected `Promise`.
But there are various cases which we would not like to cast to a Promise from an Optional type with single way,
there are various context to handle a `None` value.

Thus we don't provide a default way to cast to `Promise`. Please define a most suitable way to your project.
You can write a custom cast function or use `Option<T>.mapOrElse()`.

```typescript
// This functon treats `None` as a rejected `Promise`
function castToPromise1(option: Option<T>): Promise<T> {
  return option.mapOrElse(() => Promise.reject(), (v: T) => Promise.resolve(v));
}

// This function treats `None` as a `Promise` which is fulfilled with a tagged union object.
function castToPromise2(option: Option<T>): Promise<{ ok: boolean; value: T }> {
  const result = {
    ok: false,
    value: undefined,
  };

  return option.mapOrElse(() => {
    return Promise.resolve(result);
  }, (v: T) => {
    result.ok = true;
    result.value = v;
    return Promise.resolve(result);
  });
}
```


## 0.17.2

### Internals

- Rename internal types' naming in `Result.d.ts`. ([#122](https://github.com/option-t/option-t/pull/122))


## 0.17.1

### Internals

- Update ESLint to v2.3.0. ([#109](https://github.com/option-t/option-t/pull/109))
- Enable lint for `/test/` dir. ([#110](https://github.com/option-t/option-t/pull/110))
- Use `assert.strictEqual()` instead of `assert.ok()`. ([#112](https://github.com/option-t/option-t/pull/112))
- Split off `OptionT.d.ts` from '/option-t.es6.d.ts'. ([#115](https://github.com/option-t/option-t/pull/115))

### Polish

- Throw `TypeError` instead of `Error` if a callbacks for `Option<T>.andThen()` / `orElse()` returns
  non `Option<T>` type. ([#116](https://github.com/option-t/option-t/pull/116))

### New Feature

#### Introduce `Result<T, E>`

We introduce the new experimental feature `Result<T, E>` which is inspired by
Rust's [`std::result::Result<T, E>`](https://doc.rust-lang.org/std/result/enum.Result.html) by [#88][issue88], [#111][pr111].

See [`/src/Result.ts`](./src/Result.d.ts) for more details.

This feature is *not* exported by default now.
If you'd like to use it, let's try to import this:

##### CommonJS:

```javascript
const ResultMod = require('option-t/src/Result');
const Ok = ResultMod.Ok;
const Err = ResultMod.Err;
```

##### TypeScript (+ES6 module syntax)

```typescript
import {Result, Ok, Err, ResultBase} from 'option-t/src/Result';
```


[issue88]: https://github.com/option-t/option-t/issues/88
[pr111]: https://github.com/option-t/option-t/pull/111


#### `Option<T>.drop()` can take a custom destructor function

Now, `Option<T>.drop()` can take a custom destructor function by [#118](https://github.com/option-t/option-t/pull/118).
So you can pass a custom destructor function to dispose the inner value.

```javascript
const some = new Some(largeSensitiveObject);
some.drop((v) => v.dispose());
```


## 0.16.3

### Bug fix

- Fix the compile error of `option-t.d.ts`. ([PR106](https://github.com/option-t/option-t/pull/106))
    - This catches up [pr105](https://github.com/option-t/option-t/pull/105)

## 0.16.2

### Bug fix

- Revert [#97][pr97] to [fix the compile error on tsc nightly](https://github.com/option-t/option-t/issues/103)

[pr97]: https://github.com/option-t/option-t/pull/97


## 0.16.1

a missing version.


## 0.16.0

### Breaking Change

* Remove Support iojs. [#98][pr98]
    * Support only after NodeJS 4.2 LTS.
* `Option<T>` is just either `Some<T>` or `None<T>`. [#99][pr99]
    * The previous interface `Option<T>` was renamed to `OptionMethods<T>`, and marked it as a private.
        * This is just only for a defensive programming style.
        * If you get a new problem by this change, please file a new issue. We'll consider to republish it.

[pr98]: https://github.com/option-t/option-t/pull/98
[pr99]: https://github.com/option-t/option-t/pull/99


### Polish

* Define `Option<T>.isSome` and `OptionT.isNone` as a type guard function. [#97][pr97]
    * This causes the __breaking change__ which cannot compile `~typescript@1.7.x`.


### Internal

* Upgrade TypeScript compiler which our supports to `^1.8.0`. [#94][pr94], [#97][pr97]
* Upgrde ESLint to `^1.10.1`. [#95](https://github.com/option-t/option-t/pull/95)

[pr94]: https://github.com/option-t/option-t/pull/94
[pr97]: https://github.com/option-t/option-t/pull/97


## 0.15.0

* This version drops to support Node.js v0.10.
    * This version would work on Node.js v0.10
    * But we don't ensure to work on it in a future release.

### Internal

* Add Node.js v5 as a CI tested environment [#89](https://github.com/option-t/option-t/pull/89)
* Remove Node.js v0.10 from a CI tested environment [#90](https://github.com/option-t/option-t/pull/90)
    * This change does not have any effects to existed codes.

### Documentation

* Polish the documentation about casting to `Promise` [#91](https://github.com/option-t/option-t/pull/91)


## 0.14.2

### Documentation

* Update README.md's 'semantics' section. [#85](https://github.com/option-t/option-t/pull/85)


## 0.14.1

### Bug Fix

* Support TypeScript 1.6 stable's `--moduleResolution node` mode. [#83](https://github.com/option-t/option-t/pull/83)


## 0.14.0

### Breaking Change

* Change `OptionBase` type definition to [abstract class](https://github.com/Microsoft/TypeScript/issues/3578). ([#81][pr81])
    * We require __TypeScript 1.6__ to use this feature.

### Internal

* Upgrade TypeScript compiler which our supports to `^1.6.0-beta`. [#76][pr76]

[pr76]: https://github.com/option-t/option-t/pull/76
[pr81]: https://github.com/option-t/option-t/pull/81


## 0.13.0

### New Feature

* Expose `OptionBase` to TypeScript's type definition.
    * __NOTICE__:
        * In general purpose, __you must not use this object__.
        * You can only this object if you need to cooperate with some libralies
          like `React.PropTypes` which are use `instanceof` checking to work together with
          others in the pure JavaScript world.
          The typical case is [TSX (TypeScript JSX) syntax](https://github.com/Microsoft/TypeScript/wiki/JSX).
        * Our basic stance is that _you don't use this and need not it in almost case_.
    * See also [#77](https://github.com/option-t/option-t/pull/77)

### Internal

* Support Node.js v4. [#79](https://github.com/option-t/option-t/pull/79)


## 0.12.3

### Bug Fix

* Fix the bug whic is `SomeInstance instanceof None` will be `true`. ([#78](https://github.com/option-t/option-t/pull/78))


## 0.12.2

### Documentation

* Add API documentations to TypeScript's type definition.


## 0.12.1

### Documentation

* Fix to forget the bump up version in CHANGELOG.md.

## 0.12.0

### New Feature

* Support `typings` field in package.json for TypeScript.
    * See more details: https://github.com/Microsoft/TypeScript/pull/4352


### Breaking Change

* TypeScript's type definition only support ES6 target officially.
    * You may continue to use this package without make your code to ES6 target.
      See more details: [#72](https://github.com/option-t/option-t/pull/72)


## 0.11.0

### Breaking Change

* Remove `OptionT.OptionT`. ( [#67](https://github.com/option-t/option-t/pull/67) )
    * This was marked as deprecated in 0.10.x.


## 0.10.1

### Documentation

* Fix typos in changelog.


## 0.10.0

### New Feature

* Add `OptionT.OptionBase`.
    * This change also marks `OptionT.OptionT` as deprecated.
    * We recommend to use this new base object instead of `OptionT.OptionT`.
      See more details ( [#66](https://github.com/option-t/option-t/pull/66) ).


## 0.9.3

### Internal

* Add `keywords` section to package.json.


## 0.9.2

### New Feature

* Support 'typescript' in package.json for [tsd][tsd] & [dtsm][dtsm]. ([#62][PR62])
    * This does not affect this library's API model. Thus we release this as patch version.
    * Thanks [@gifnksm](https://github.com/gifnksm)!

[PR62]: https://github.com/option-t/option-t/pull/62
[tsd]: https://github.com/Definitelytyped/tsd
[dtsm]: https://github.com/vvakame/dtsm


## 0.9.1

### Bug Fix

* Fix the compiler error if we use tsc's '--noImplicitAny' flag (#58)


## 0.9.0

### New Feature
* Make `Option<T>.mapOr()` and `Option<T>.mapOrElse()` stable.
    * We accept current signitures of these APIs as stable.
      When Rust's upstream changes these APIs, we might follow them
      with bumping our major version.
    * Rust might change these API signitures. see: [rust-lang/rfcs#1025](https://github.com/rust-lang/rfcs/issues/1025).


## 0.8.0

### New Feature
* Add `Option<T>.asPromise()`.


## 0.7.1

### Bug Fix
* Fix `Uncaught TypeError: Illegal invocation` on browsers.


## 0.7.0

### New Feature
* Add `Option<T>.isNone`.
* Add `Option<T>.unwrapOr()`.
* Add `Option<T>.unwrapOrElse()`.
* Add `Option<T>.expect()`.
* Add some experimental APIs. These are unstable.
    * Add `Option<T>.mapOr()`.
    * Add `Option<T>.mapOrElse()`.


## 0.6.0

### Update Documentation
* JSDoc: Change `Option<T>` used as parameter/return value to non-nullable type.
    * This might cause some compile error if you use closure compiler's advanced optimization.
* JSDoc: Remove needless `@template` annotations.

## 0.5.5

### Update Documentation
* Don't preserve the needless license block when minifying.


## 0.5.4

### Update Documentation
* Fix JSDoc.
    * Add `@extends` annotation to `Some` & `None`.
    * Fix warning of closure compiler.

## 0.5.3

### Internal
* Use `OptionT` to check whether the object is `Option<T>`.


## 0.5.2

### Internal
* Share the same object as prototype between `OptionT.Some` and `OptionT.None`.


## 0.5.1

### Update Documentation
* Remove `@nosideeffect` annotation from `Option<T>.isSome`. It was a invalid annotation.


## 0.5.0

### Breaking Change
* `OptionType<T>` is obsolated. This API will be no longer supported.

## 0.4.0

### New Feature
* Add `Option<T>.and()`.
* Add `Option<T>.or()`.
* Add `Option<T>.orElse()`.
* Export the definition of `Option<T>.andThen()`.


### Update Documentation
* Fix JSDoc in OptionT.js


## 0.3.0

### New Feature

* Add new interfaces. These constructors make interfaces more clear and explicit.
    * `OptionT.Some()` constructor creates a `Some<T>` representation.
    * `OptionT.None()` constructor creates a `None` representation.
    * `OptionT.Option<T>` interface means `Option<T>`.
        * This can be used only on an environment having a interface in its type system (e.g. TypeScript).
        * If you'd like to check whether the object `option` is `Option<T>` or not
          in an environment like `React.PropTypes` which has no interface feature,
          you can use `option instanceof OptionT.OptionT` to check the object.
          But this way is not a tier-1 approach. We recommend to use a interface strongly.
          (Thus we don't export `OptionT` to the type definition for TypeScript).
* Add type definitions for TypeScript.


### Deprecations
* `OptionT.OptionType()` is now deprecated. This will be removed in future release.
    * Of cource, this constructor is simple api,
      but it don't handle `None` or `Some<T>` properly if we pass `undefined` value.
      In some case, this api cannot differentiate whether the `undefined` value means `None`
      or "the value returns `undefined` correctly". [See more derails](https://github.com/option-t/option-t/issues/17).


## 0.2.0

* __New Feature__
    * Add methods:
        * `unwrap()`
        * `map()`
        * `flatMap()`
        * `drop()`

## 0.1.5

* __Documentation__
    * Write more descriptions to README.md.


## 0.1.4

* __Documentation__
    * Fix JSDoc.


## 0.1.0

* Initial Release.
