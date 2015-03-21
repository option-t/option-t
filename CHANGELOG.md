# Changelog

## x.y.z

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
