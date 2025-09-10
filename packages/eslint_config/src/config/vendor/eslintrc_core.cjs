// Copied from https://raw.githubusercontent.com/cats-oss/eslint-config-abema/832add9307d1c1a82c212a9096a867d8de12d00b/config/eslintrc_core.js

// MIT License
//
// Copyright (c) 2019 CyberAgent, Inc.
// Copyright (c) 2016-2018 VOYAGE GROUP, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
/* eslint no-magic-numbers: 'off' */

'use strict';

module.exports = {
    // see more detail: https://eslint.org/docs/rules/
    rules: {
        // Possible Errors

        // We should reconsider about this after ECMA262 introduces
        // [async iteration](https://github.com/tc39/proposal-async-iteration),
        // But now, we enable this.
        'no-await-in-loop': 1,

        'no-console': 0, // `console`

        'no-template-curly-in-string': 2,

        // This rule might be useful to detect a typical anti pattern about data race.
        // However, it could not detect the problem if we assign a value into an interim variable
        // because this rule only checks a syntax and ECMA262's semantics without other semantics.
        //
        // Data race is an essential problem of parallel/concurrent programming.
        // Thus I doubt that detecting race condition correctly & statically is hard without introducing other semantics.
        // So we regard this rule as meaningless actually and disable this.
        'require-atomic-updates ': 0, // https://eslint.org/docs/rules/require-atomic-updates

        // Best Practices
        'accessor-pairs': 0, // Allow only getter or setter to define a "read-only" or "write-only" object
        'array-callback-return': [
            1,
            {
                // https://eslint.org/docs/rules/array-callback-return.html
                allowImplicit: false, // Should return `undefined` explicitly
            },
        ],
        'block-scoped-var': 2, // https://eslint.org/docs/rules/block-scoped-var
        'complexity': 0, // We think there is no meaning to measure it in a daily linting.
        'consistent-return': 2,
        'default-case': 0, // This is not a problem.

        // Ideally we should make this an error.
        // However, I seem we have some reasons to relax this rule for daily hackability.
        //
        // The 1st argument of redux (at least ~v4) reducer takes `TState | undefined`
        // and the framework code in redux calls their reducer function with `state=undefined`
        // to initialize reducers on calling `combineReducers()` even if we pass an initial state on calling `createState()`.
        //
        // Thus we sometimes write `(state = createInitialState(), action) => { ... };` conviniently with default parameter
        // and redux document also use such pattern.
        // https://github.com/reduxjs/redux/blob/956b0e9e7eb54b8b28994d6990216f8db201823c/src/types/reducers.ts#L5-L32
        //
        // Furthermore, We sometimes look similar patterns if we use _reducer_ function by limitations of a framework or library.
        //
        // Of course, we can write the above redux code and recommend this form:
        //
        // ```javascript
        //  function reducer(state = createNewState(), action) {
        //      ...
        //  }
        //
        //  function reudcer(state, action) {
        //      if (state === undefined) {
        //          return createNewState();
        //      }
        //
        //      ...
        //  }
        // ```
        //
        // But I think that it does not make sense that enforcing to rewrite this popular pattern of today's popular framework.
        // Thus I mark this as `warn` for redux but I strongly recommend to use default parameter syntax only
        // for parameters which the later ones is also allowed to omit.
        //
        // If you're annoy for this warning when you use redux, then it's better for you to disable this rule only for them.
        'default-param-last': 'warn',

        'dot-notation': 2, // We hate reflection by strings. It's possible error.
        'eqeqeq': [2, 'always'], // Don't use loosely equality operator.
        'grouped-accessor-pairs': ['warn', 'getBeforeSet'], // getter/setter should be pairs
        'guard-for-in': 0, // This is an escape hatch to enumerate all members in prototype chain.
        'max-classes-per-file': 0, // We don't have to enable this. https://eslint.org/docs/rules/max-classes-per-file
        'no-alert': 1, // for debugging.
        'no-caller': 2, // Don't touch `arguments` in a normal code.
        'no-constructor-return': 'error', // Generally, we should not return object from _constructor_.
        'no-div-regex': 2, // https://eslint.org/docs/rules/no-div-regex
        'no-else-return': 0, // `else` branch sometimes means "A or B" explicitly.
        'no-empty-function': 0, // Allow to set a no-op function.
        'no-eq-null': 2, // Sort with `eqeqeq`. We might disable this for Flowtype's semantics for the future.
        'no-eval': 2,
        'no-extend-native': 2, // We don't do this in non-library code.
        'no-extra-bind': 1, // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-label': 2, // https://eslint.org/docs/rules/no-extra-label
        'no-implicit-coercion': [
            2,
            {
                // https://eslint.org/docs/rules/no-implicit-coercion
                boolean: true,
                number: true,
                string: true,
                allow: ['!!', '+'], // Allow only these patterns.
            },
        ],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-iterator': 2, // Ban the legacy JavaScript syntax
        'no-labels': 2, // Using a label is a rare case
        'no-lone-blocks': 1, // https://eslint.org/docs/rules/no-lone-blocks
        'no-loop-func': 2, // https://eslint.org/docs/rules/no-loop-func
        'no-magic-numbers': [
            1,
            {
                // Allow these values which are used commonly in test, flags, or others.
                ignore: [0, 1],
            },
        ],
        'no-multi-str': 0, // https://eslint.org/docs/rules/no-multi-str
        'no-new': 1,
        'no-new-func': 1, // Just an escape hatch for optimizing technique.
        'no-new-wrappers': 1, // We don't have to `new` to cast a value. https://eslint.org/docs/rules/no-new-wrappers
        'no-octal-escape': 2, // https://eslint.org/docs/rules/no-octal-escape
        'no-param-reassign': [
            1,
            {
                props: true,
                // 'ignorePropertyModificationsForRegex': [],
            },
        ],
        'no-proto': 2,
        'no-restricted-properties': 0, // https://eslint.org/docs/rules/no-restricted-properties
        'no-return-assign': 2, // This is a problem for readability.
        'no-script-url': 2, // Use an event handler.
        'no-self-compare': 2, // https://eslint.org/docs/rules/no-self-compare
        'no-sequences': 2, // We're not doing a code golf: https://eslint.org/docs/rules/no-sequences
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 1,
        'no-unused-expressions': 2, // https://eslint.org/docs/rules/no-unused-expressions
        'no-useless-call': 1,
        'no-useless-concat': 1,
        'no-useless-return': 1, // https://eslint.org/docs/rules/no-useless-return
        'no-void': 2, // We live in after ES5 : https://eslint.org/docs/rules/no-void
        'no-warning-comments': 0, // We need not always enable this : https://eslint.org/docs/rules/no-warning-comments
        'prefer-promise-reject-errors': [
            1,
            {
                allowEmptyReject: true, // Enable to create empty rejected one for compositing promises.
            },
        ],
        'prefer-regex-literals': 'warn', // We don't have to use the constructor if we don't need create `RegEx` dynamically.
        'radix': 2, // Enforce 2nd argument of `parseInt()`.

        // I don't think this rule is always useful because `await` is not required for async function.
        // If you create a function which return `Promise` and would have some async operation for the future,
        // this rule should be interruption.
        'require-await': 0,

        //  * If you write a code for an environment which does not support `RegExp`'s `u` flag (it would be legacy environment)
        //    without any down-level code transformer, it might be better to disable this rule.
        //  * If you supply `u` flag to regular expression, a parser can detect a syntax error of regular expression.
        //      * `/\w{1,2/u` will be syntax error.
        //      * `/\w{1,2/` will not be a syntax error.
        //        But the current ESLint (5.3) does not have any rules to detect this pattern aggressively.
        //        So we enable this rule as _error_.
        'require-unicode-regexp': 2, // https://eslint.org/docs/rules/require-unicode-regexp
        'vars-on-top': 0, // This is a truly ridiculous convention.
        'yoda': 0, // https://eslint.org/docs/rules/yoda

        // Strict Mode
        'strict': [2, 'global'],

        // Variables

        //  We think it would not be a large problem to disable this rule.
        //
        //  Historically, in ~ES5, we cannot distinguish a variables because there is no `const`.
        //  So it reduces a problems to enforce to initialize a variable with some values.
        //
        //  Historically (again), some developers who lives in ~ES5 assigns various typed values to them
        //  This habit sometimes stagger the type of variables and its bad habit prevents JSVM's optimizations for a long time.
        //  So it has some guide effects for _humans_ to initialize a variable with some value to express the type of its variable.
        //
        //  However, today is post ES6 and we prefer to use `const` declaration by default,
        //  and we have more stuffs to analyze our code on demand.
        //  If we disable this rule, Lacking an initialization for `const` would be a parse error.
        //  we think it's less problem to disable this rule.
        //
        //  And this rule conflicts with the pattern of TypeScript like `let a: T;`.
        //  If we keep to enable this rule, `let: a: T;` would be error
        //  and we need to write `let a: T | null = null;` even if a will not be `null`. This is not useful.
        'init-declarations': 'off',
        'no-label-var': 2,
        'no-restricted-globals': [
            2, // https://eslint.org/docs/rules/no-restricted-globals
            'name',
            'top',
            'event',
        ],
        'no-shadow': 0,
        'no-undefined': 0,
        'no-undef-init': 2,
        'no-use-before-define': [
            2,
            {
                // the measure for Temporary Dead Zone
                functions: false, //  Function declarations are hoisted.
                classes: true, // Class declarations are not hoisted. We should warn it.
            },
        ],

        // Stylistic Issues
        'camelcase': [
            2,
            {
                // https://eslint.org/docs/rules/camelcase
                properties: 'always',
                ignoreDestructuring: false,
            },
        ],
        'capitalized-comments': 0, // we don't think this is a serious problem.
        'consistent-this': [2, 'that'],
        'func-name-matching': 1,
        'func-names': [0, 'as-needed'], // we don't have to restrict this in most case.
        'func-style': [
            0,
            'declaration',
            {
                // XXX: a top level functions should be a declaration,
                // but it would be good to allow both forms of declaration/expression.
                allowArrowFunctions: true,
            },
        ],
        'id-length': 0, // https://eslint.org/docs/rules/id-length
        'id-match': 0, // https://eslint.org/docs/rules/id-match
        'line-comment-position': 0, // This is needless. https://eslint.org/docs/rules/line-comment-position
        'max-depth': [2, 10], // https://eslint.org/docs/rules/max-depth
        'max-lines': 0, // We trust our code review. https://eslint.org/docs/rules/max-lines
        'max-lines-per-function': 0, // We trust our code review. https://eslint.org/docs/rules/max-lines-per-function
        'max-nested-callback': 0, // https://eslint.org/docs/rules/max-nested-callbacks
        'max-params': 0, // https://eslint.org/docs/rules/max-params
        'max-statements': 0, // https://eslint.org/docs/rules/max-statements
        'multiline-comment-style': 0, // https://eslint.org/docs/rules/multiline-comment-style
        'new-cap': 1,
        'no-array-constructor': 2, // In almost case, we don't have to use it.
        'no-bitwise': [
            2,
            {
                // In almost case, we don't use bitwise operators...
                allow: [],
                int32Hint: true, // https://eslint.org/docs/rules/no-bitwise
            },
        ],
        'no-continue': 0, // https://eslint.org/docs/rules/no-continue
        'no-inline-comments': 0, // https://eslint.org/docs/rules/no-inline-comments
        'no-lonely-if': 1, // https://eslint.org/docs/rules/no-lonely-if
        'no-multi-assign': 1,
        'no-negated-condition': 0, // https://eslint.org/docs/rules/no-negated-condition
        'no-nested-ternary': 2, // https://eslint.org/docs/rules/no-nested-ternary
        'no-plusplus': 0, // We might use it for loop.
        'no-restricted-syntax': [
            2,
            // Ban the way to reflection by strings (Enable explicitly if you'd like to use).
            'ForInStatement',
        ],
        'no-ternary': 0, // https://eslint.org/docs/rules/no-ternary
        'no-underscore-dangle': [
            2,
            {
                // Ban the name which starts with `_`.
                allowAfterThis: true, // allow after this to create a private member.
            },
        ],
        'no-unneeded-ternary': 2,
        'one-var': [2, 'never'], // https://eslint.org/docs/rules/one-var
        'operator-assignment': 0, // Unlike `i++` or `++i`, this is not a problem
        'prefer-object-spread': 1, // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-exponentiation-operator': 0, // There is no reason to enforce `**` instead of Math.pow()
        'sort-keys': 0, // We don't think this is useful for all object by default.
        'sort-vars': 0, // we don't have to sort vars.
        'unicode-bom': 2, // Ban byte-order-mark

        // ECMASctipt 6
        'arrow-body-style': 0, // This is just a stylistic issue.
        'no-duplicate-imports': 1, // https://eslint.org/docs/rules/no-duplicate-imports
        'no-restricted-imports': 0, // Should specified by for each projects: https://eslint.org/docs/rules/no-restricted-imports
        'no-useless-computed-key': 1,
        'no-useless-constructor': 0, // This is a stylistic issue.
        'no-useless-rename': 1,
        'no-var': 1,
        'object-shorthand': 0,
        'prefer-arrow-callback': [
            0,
            {
                allowNamedFunctions: true, // for debugging stack trace
                allowUnboundThis: false, // if `true`, ban using `this` without `bind()` in the callback.
            },
        ],
        'prefer-const': [
            1,
            {
                destructuring: 'any', // Let's use `const` if we make one of variables `const`.
            },
        ],
        'prefer-destructuring': 0, // It's not always true that to prefer destructuring.

        // After ECMAScript 2018, this feature improves code readability.
        // But we need to investigate the perf impact if we recommend to named capture group.
        // Until then, we disable this rule.
        'prefer-named-capture-group': 'off',

        'prefer-numeric-literals': 2, // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-rest-params': 1, // Recommend to use rest parameter instead of `arguments`.
        'prefer-spread': 1, // Recommend to use spread operator instead of `Function.prototype.apply`.
        'prefer-template': 0,
        // 'sort-import': 0,
        'symbol-description': 2, // Force to pass the description to `Symbol()`.
    },
};
