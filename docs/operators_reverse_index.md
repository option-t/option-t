# Reverse index for operators

This document provides a reverse index for operators by your purpose.
**This document is not comprehensive. This lists up only major operators.**

Furthermore, operators may not be implemented for all types this package provides but we use same semantics whole of this package.

[All public operators list is here](./public_api_list.md)


## Create a container type _Bar_ value.

- _createBar()_

## Check a value is type _Bar_ or not.

- _isBar()_

## Unwrap a value in container.

- _unwrap()_.
- _expect()_
    - This is a useful variant to allow a custom error message if failing unwrapping.


## Unwrap a value with default value.

- _unwrapOr()_
- _unwrapOrElse()_
    - This takes a factory function that produces a default value on demand.
    - This is useful if the value's initialization cost is not cheap.


## Transform an inner value without unwrapping.

- _map()_

## Try to transform an inner value without unwrapping.

- _andThen()_
    - This is just _flatmap_ operation for other libraries.

## Try to recovery from failure case.

- _orElse()_


## Fuse _map()_ + _unwrapOr()_ into a single operator.

- _mapOr()_
- _mapOrElse()_

## Inspect an inner value without unwrapping.

**If you'd like to modify the inner value, you should use _map()_.**

- _inspect()_

## Aync version of operators.

They has _Async_ suffix for their namings. e.g. _mapAsync()_.
