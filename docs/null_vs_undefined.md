# null vs undefined - Which should we use?

## Abstract

Which should we use? 

Generally, a programming language has a way to represent that _there is none_ or _an absence of values_. For example, we know _null_ as a most famous approach. However, unlike other languages, JavaScript has both of `null` and `undefined` to represent  it. This interesting characteristic often confuse a developer in programming activity and ask them what is the best way to express none.

In this document, we try to shed a light to this complex thing and to provide a suggestion that is useful tips in your programming with JavaScript.

At first, we explore why JavaScript has these 2 way to represent a none value by the history of evolution of ECMA262 and related spec. Second, we investigate how major toolchains treats both `null` and `undefined`. Finally, we 

## Introduction

In JavaScript, there are multiple ways to represent an absence of values.

For example,

TODO:

## History

[_JavaScript: The First 20 Years_ (ACM SIGPLAN  HOPL IV)](https://dl.acm.org/doi/10.1145/3386327) says:

> JavaScript 1.0 has two special values that represent the absence of a useful data value. Uninitialized variables are set to the special value _undefined_. This is also the value returned when a program attempts to access the value of a non-existent property of an object. In JavaScript 1.0 the value _undefined_ may be accessible by declaring and accessing an uninitialized variable. The value `null` is intended to represent “”no object” in contexts where an object value is expected. It is modeled after Java’s `null` value and it facilitates integration of JavaScript with objects implemented using Java. Throughout its entire history the existence of these two similar but observably different values has caused confusion among JavaScript programmers many of whom are uncertain about when they should use one of them instead of the other. 

> Accessing the value of a non-existent property usually returns the value _undefined_. However, in JavaScript 1.0/1.1 the value `null` is returned if a non-existent property value is accessed using bracket notation and the property key is the string representation of a non-negative integer. 


https://twitter.com/search?q=from%3Abrendaneich%20null&src=typed_query&f=live

TODO:

## Today’s definitions

In this section, we see how today’s ECMA262 and related specs treats `null` and `undefined`.

TODO:

#### ECMAScript
By the observation from the history, we knew 

* In ECMAScript world, `undefined` is used as the result of some computation as an _absence of values_ in almost case.
* `null` is used in
    * Bridging with hosting environment (e.g. WebEngine) via some conventions including WebIDL.
* Loose equal operator (`==`) will be `true` if we compare `null == undefined`.

TODO:

#### Optional arguments
JavaScript can call a function without fulfillment all arguments. In a below example, second argument, `b`, would be `undefined` if we only pass 1st argument on calling `bar`.

```javascript
function bar(a, b) {
    console.log(typeof b === 'undefined');
}

bar(1); // this will emit `true`
```

##### Some exceptions in builtin objects
In pre-ES5 era, there is some exceptions to express _absence of values_. For example, 
* `RegExp.prototype.exec()` returns `null` if the there is no matched substring.
* TODO:

##### null coalescing operator
From ES2020, ECMAScript introduced [_null coalescing operator_](https://en.wikipedia.org/wiki/Null_coalescing_operator) as form as  `leftExpr ?? rightExpr`.

This expression returns `rightExpr` if `leftExpr` is `null` or `undefined`. So this expression accepts both  `null` and `undefined` as   nullable value. Additionally, this operations is equal to `orForMaybe()` in this package.

##### optional chaining operator
From ES2020, ECMAScript introduced _optional chaining operator_ as form as `a?.b`.

This expression returns `undefined` if `a` is `null` or `undefined`. Otherwise, this returns the value of `a.b`.

#### WHATWG WebIDL

https://github.com/karen-irc/karen/pull/724

TODO:

#### eco systems

TODO: nodejs
TODO: react v17

## How toolchains treats

#### TypeScript

From TypeScript v2.0, TypeScript compiler introduce `strictNullCheck` option that is behind a `strict` option. With enabling this option, TypeScript treats `null`  and  `undefined` as different types.

and optional arguments, TypeScript compiler treats it as undefined.

TODO:

#### Flowtype

https://flow.org/en/docs/types/maybe/
Flowtype also has same degree type refinement as TypeScript

TODO:

#### Closure Compiler

https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System
closure compiler is bit tricky.

TODO:

## Wrapping up

TODO:


### controversial advise

* In real application development, we think there is no best practice about which we should use either null or undefined.
    * If I have to choose a word, it might be good to use null because it express there is no value and smooth combination with DOM.
    * The important thing is to uniform a way in your project.
        * Use null
        * Use undefined
        * Mixing them with supported by tools like TypeScript.
* For creating convention, this library provides powerful features. inter conversion, bunch of similar utility functions under same customs. 
* This library would help to rule _absence of values_ all in your project.
