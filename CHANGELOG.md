# Changelog

## x.y.z

### Internal

* Add Node.js v5 as a CI tested environment [#89](https://github.com/saneyuki/option-t.js/pull/89)


## 0.14.2

### Documentation

* Update README.md's 'semantics' section. [#85](https://github.com/saneyuki/option-t.js/pull/85)


## 0.14.1

### Bug Fix

* Support TypeScript 1.6 stable's `--moduleResolution node` mode. [#83](https://github.com/saneyuki/option-t.js/pull/83)


## 0.14.0

### Breaking Change

* Change `OptionBase` type definition to [abstract class](https://github.com/Microsoft/TypeScript/issues/3578). ([#81][pr81])
  * We require __TypeScript 1.6__ to use this feature.

### Internal

* Upgrade TypeScript compiler which our supports to `^1.6.0-beta`. [#76][pr76]

[pr76]: https://github.com/saneyuki/option-t.js/pull/76
[pr81]: https://github.com/saneyuki/option-t.js/pull/81


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
  * See also [#77](https://github.com/saneyuki/option-t.js/pull/77)

### Internal

* Support Node.js v4. [#79](https://github.com/saneyuki/option-t.js/pull/79)


## 0.12.3

### Bug Fix

* Fix the bug whic is `SomeInstance instanceof None` will be `true`. ([#78](https://github.com/saneyuki/option-t.js/pull/78))


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
    See more details: [#72](https://github.com/saneyuki/option-t.js/pull/72)


## 0.11.0

### Breaking Change

* Remove `OptionT.OptionT`. ( [#67](https://github.com/saneyuki/option-t.js/pull/67) )
  * This was marked as deprecated in 0.10.x.


## 0.10.1

### Documentation

* Fix typos in changelog.


## 0.10.0

### New Feature

* Add `OptionT.OptionBase`.
  * This change also marks `OptionT.OptionT` as deprecated.
  * We recommend to use this new base object instead of `OptionT.OptionT`.
    See more details ( [#66](https://github.com/saneyuki/option-t.js/pull/66) ).


## 0.9.3

### Internal

* Add `keywords` section to package.json.


## 0.9.2

### New Feature

* Support 'typescript' in package.json for [tsd][tsd] & [dtsm][dtsm]. ([#62][PR62])
  * This does not affect this library's API model. Thus we release this as patch version.
  * Thanks [@gifnksm](https://github.com/gifnksm)!

[PR62]: https://github.com/saneyuki/option-t.js/pull/62
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
    or "the value returns `undefined` correctly". [See more derails](https://github.com/saneyuki/option-t.js/issues/17).


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
