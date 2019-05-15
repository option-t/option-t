// Copied from https://raw.githubusercontent.com/cats-oss/eslint-config-abema/b7d54b8100028dcb39b809ea9fbdc34a2ce5a2cd/config/eslintrc_core.js

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

// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    // see more detail: https://eslint.org/docs/rules/
    'rules': {
        // Possible Errors

        'for-direction': 0, // We don't think this is "possible error".
        'getter-return': 1, // https://eslint.org/docs/rules/getter-return
        'no-async-promise-executor': 2, // https://eslint.org/docs/rules/no-async-promise-executor
        // We should reconsider about this after ECMA262 introduces
        // [async iteration](https://github.com/tc39/proposal-async-iteration),
        // But now, we enable this.
        'no-await-in-loop': 1,
        'no-cond-assign': 2, // https://eslint.org/docs/rules/no-cond-assign
        'no-console': 0, // `console`
        'no-constant-condition': 1, // Use "warn" for debugging
        'no-control-regex': 2, // https://eslint.org/docs/rules/no-control-regex
        'no-debugger': 1, // debugger statement
        'no-dupe-args': 2, // https://eslint.org/docs/rules/no-dupe-args
        'no-dupe-keys': 2, // in an object literal.
        'no-duplicate-case': 2, // https://eslint.org/docs/rules/no-duplicate-case
        'no-empty': 2, // https://eslint.org/docs/rules/no-empty
        'no-empty-character-class': 2, // https://eslint.org/docs/rules/no-empty-character-class
        'no-ex-assign': 2, // Ban to reassign to `e` of `catch (e) {}`
        'no-extra-boolean-cast': 0, // Allow to cast to boolean with `!!bar`. This is common idiom.
        'no-extra-parens': [0, 'all', { // We'd like to write extra parens for readability.
            'nestedBinaryExpressions': false,
        }],
        'no-extra-semi': 1,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'], // https://eslint.org/docs/rules/no-inner-declarations
        'no-invalid-regexp': 2, //https://eslint.org/docs/rules/no-invalid-regexp
        'no-irregular-whitespace': 2, // https://eslint.org/docs/rules/no-irregular-whitespace
        'no-misleading-character-class': 2, // https://eslint.org/docs/rules/no-misleading-character-class
        'no-obj-calls': 2, // https://eslint.org/docs/rules/no-obj-calls
        'no-prototype-builtins': 2, // https://eslint.org/docs/rules/no-prototype-builtins
        'no-regex-spaces': 2, // https://eslint.org/docs/rules/no-regex-spaces
        'no-sparse-arrays': 2, // Ban `[,,]`
        'no-template-curly-in-string': 2,
        'no-unexpected-multiline': 1,
        'no-unreachable': 1,
        'no-unsafe-finally': 2, // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-negation': 2, // https://eslint.org/docs/rules/no-unsafe-negation
        // This rule might be useful to detect a typical anti pattern about data race.
        // However, it could not detect the problem if we assign a value into an interim variable
        // because this rule only checks a syntax and ECMA262's semantics without other semantics.
        //
        // Data race is an essential problem of parallel/concurrent programming.
        // Thus I doubt that detecting race condition correctly & statically is hard without introducing other semantics.
        // So we regard this rule as meaningless actually and disable this.
        'require-atomic-updates ': 0, // https://eslint.org/docs/rules/require-atomic-updates
        'use-isnan': 2, // Use `Number.isNaN`
        'valid-typeof': [1, {'requireStringLiterals': true}],

        // Best Practices
        'accessor-pairs': 0, // Allow only getter or setter to define a "read-only" or "write-only" object
        'array-callback-return': [1, { // https://eslint.org/docs/rules/array-callback-return.html
            'allowImplicit': false, // Should return `undefined` explicitly
        }],
        'block-scoped-var': 2, // https://eslint.org/docs/rules/block-scoped-var
        'class-methods-use-this': 0, // A class method does not use `this` in some case.
        'complexity': 0, // We think there is no meaning to measure it in a daily linting.
        'consistent-return': 2,
        'curly': 2, // It's possible error to allow this.
        'default-case': 0, // This is not a problem.
        'dot-location': 0, // This is just a stylistic issue.
        'dot-notation': 2, // We hate reflection by strings. It's possible error.
        'eqeqeq': [2, 'always'], // Don't use loosely equality operator.
        'guard-for-in': 0, // This is an escape hatch to enumerate all members in prototype chain.
        'max-classes-per-file': 0, // We don't have to enable this. https://eslint.org/docs/rules/max-classes-per-file
        'no-alert': 1, // for debugging.
        'no-caller': 2, // Don't touch `arguments` in a normal code.
        'no-case-declarations': 2, // https://eslint.org/docs/rules/no-case-declarations
        'no-div-regex': 2, // https://eslint.org/docs/rules/no-div-regex
        'no-else-return': 0, // `else` branch sometimes means "A or B" explicitly.
        'no-empty-function': 0, // Allow to set a no-op function.
        'no-empty-pattern': 2,
        'no-eq-null': 2, // Sort with `eqeqeq`. We might disable this for Flowtype's semantics for the future.
        'no-eval': 2,
        'no-extend-native': 2, // We don't do this in non-library code.
        'no-extra-bind': 1, // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-label': 2, // https://eslint.org/docs/rules/no-extra-label
        'no-fallthrough': 1,
        'no-floating-decimal': 0, // Allow `0.1` and `.1` in same project.
        'no-global-assign': 2, // https://eslint.org/docs/rules/no-global-assign
        'no-implicit-coercion': [2, { // https://eslint.org/docs/rules/no-implicit-coercion
            'boolean': true,
            'number': true,
            'string': true,
            'allow': ['!!', '+'], // Allow only these patterns.
        }],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-iterator': 2, // Ban the legacy JavaScript syntax
        'no-labels': 2, // Using a label is a rare case
        'no-lone-blocks': 1, // https://eslint.org/docs/rules/no-lone-blocks
        'no-loop-func': 2, // https://eslint.org/docs/rules/no-loop-func
        'no-magic-numbers': [1, {
            // Allow these values which are used commonly in test, flags, or others.
            'ignore': [0, 1],
        }],
        'no-multi-spaces': 1, // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-str': 0, // https://eslint.org/docs/rules/no-multi-str
        'no-new': 1,
        'no-new-func': 1, // Just an escape hatch for optimizing technique.
        'no-new-wrappers': 1, // We don't have to `new` to cast a value. https://eslint.org/docs/rules/no-new-wrappers
        'no-octal': 2,
        'no-octal-escape': 2, // https://eslint.org/docs/rules/no-octal-escape
        'no-param-reassign': [1, {
            'props': true
        }],
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': 0, // https://eslint.org/docs/rules/no-restricted-properties
        'no-return-assign': 2, // This is a problem for readability.
        'no-return-await': 1, // Warn. Because this is not a serious problem which is same degree with `no-return-assign`.
        'no-script-url': 2, // Use an event handler.
        'no-self-assign': [2, { // https://eslint.org/docs/rules/no-self-assign
            'props': true,
        }],
        'no-self-compare': 2, // https://eslint.org/docs/rules/no-self-compare
        'no-sequences': 2, // We're not doing a code golf: https://eslint.org/docs/rules/no-sequences
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 1,
        'no-unused-expressions': 2, // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-labels': 2, // https://eslint.org/docs/rules/no-unused-labels
        'no-useless-call': 1,
        'no-useless-catch': 1, // There is no reason to disable this.
        'no-useless-concat': 1,
        'no-useless-escape': 1,
        'no-useless-return': 1, // https://eslint.org/docs/rules/no-useless-return
        'no-void': 2, // We live in after ES5 : https://eslint.org/docs/rules/no-void
        'no-warning-comments': 0, // We need not always enable this : https://eslint.org/docs/rules/no-warning-comments
        'no-with': 2,
        'prefer-promise-reject-errors': [1, {
            'allowEmptyReject': true, // Enable to create empty rejected one for compositing promises.
        }],
        'radix': 2, // Enforce 2nd argument of `parseInt()`.
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
        'wrap-iife': 0, // https://eslint.org/docs/rules/wrap-iife
        'yoda': 0, // https://eslint.org/docs/rules/wrap-iife

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
        'no-delete-var': 2, // In a general case, we don't have to do this.
        'no-label-var': 2,
        'no-restricted-globals' : [2, // https://eslint.org/docs/rules/no-restricted-globals
            'name', 'top', 'event'
        ],
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-undef': 2, // Ban a variables which are not defined explicitly.
        'no-undefined': 0,
        'no-undef-init': 2,
        'no-unused-vars': [1, { // Not make an error for debugging.
            'vars': 'all',
            'args': 'after-used',
            'argsIgnorePattern': '^_', // Sort with TypeScript compiler's builtin linter.
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^_', // Allow `catch (_e) {...}`
        }],
        'no-use-before-define': [2, { // the measure for Temporary Dead Zone
            'functions': false, //  Function declarations are hoisted.
            'classes': true, // Class declarations are not hoisted. We should warn it.
        }],

        // Node.js & CommonJS
        'callback-return': 0, // https://eslint.org/docs/rules/callback-return
        'global-require': 2,
        'handle-callback-err': 0, // We does not always write for nodejs.
        'no-buffer-constructor': 2,
        'no-mixed-requires': [2, {
            'grouping': true,
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0, // https://eslint.org/docs/rules/no-restricted-modules
        'no-sync': 1,

        // Stylistic Issues
        'array-bracket-newline ': 0,
        'array-bracket-spacing': 0, // https://eslint.org/docs/rules/array-bracket-spacing
        'array-element-newline': 0,
        'block-spacing': 0, // https://eslint.org/docs/rules/block-spacing
        'brace-style': [0, 'stroustrup', { // https://eslint.org/docs/rules/brace-style
            'allowSingleLine': true
        }],
        'camelcase': [2, { // https://eslint.org/docs/rules/camelcase
            'properties': 'always',
            'ignoreDestructuring': false,
        }],
        'capitalized-comments': 0, // we don't think this is a serious problem.
        'comma-dangle': [0, 'never'], // XXX: This rule set does not think about IE8.
        'comma-spacing': [2, { // https://eslint.org/docs/rules/comma-spacing
            'before': false,
            'after': true
        }],
        'comma-style': [1, 'last', {// https://eslint.org/docs/rules/comma-style
            'exceptions': {
                'ArrayPattern': false,
                'ArrowFunctionExpression': false,
                'CallExpression': false,
                'FunctionDeclaration': false,
                'FunctionExpression': false,
                'ImportDeclaration': false,
                'NewExpression': false,
                'ObjectPattern': false,
            },
        }],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'that'],
        'eol-last': [0, 'always'], // we don't have to restrict this. Use EditorConfig.
        'func-call-spacing': 2,
        'func-name-matching': 1,
        'func-names': [0, 'as-needed'], // we don't have to restrict this in most case.
        'func-style': [0, 'declaration', {
            // XXX: a top level functions should be a declaration,
            // but it would be good to allow both forms of declaration/expression.
            'allowArrowFunctions': true,
        }],
        'id-blacklist': 0, // https://eslint.org/docs/rules/id-blacklist
        'id-length': 0, // https://eslint.org/docs/rules/id-length
        'id-match': 0, // https://eslint.org/docs/rules/id-match
        'implicit-arrow-linebreak': [2, 'beside'], // I think 'below' mode is horrible and confusable.
        'indent': [2, 4, {
            'SwitchCase': 1,
            'MemberExpression': 1,
            'CallExpression': {
                'arguments': 'first',
            },
        }],
        'jsx-quotes': [1, 'prefer-single'], // Sort with JavaScript.
        'key-spacing': 0, // https://eslint.org/docs/rules/key-spacing
        'keyword-spacing': [1, {
            'before': true,
            'after': true,
        }],
        'linebreak-style': [2, 'unix'],
        'line-comment-position': 0, // This is needless. https://eslint.org/docs/rules/line-comment-position
        'lines-around-comment': 0, // https://eslint.org/docs/rules/lines-around-comment
        'lines-between-class-members': 0, // https://eslint.org/docs/rules/lines-between-class-members
        'max-depth': [2, 10], // https://eslint.org/docs/rules/max-depth
        'max-len': [2, 256, 4, { // https://eslint.org/docs/rules/max-len
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true,
        }],
        'max-lines': 0, // We trust our code review. https://eslint.org/docs/rules/max-lines
        'max-lines-per-function': 0, // We trust our code review. https://eslint.org/docs/rules/max-lines-per-function
        'max-nested-callback': 0, // https://eslint.org/docs/rules/max-nested-callbacks
        'max-params': 0, // https://eslint.org/docs/rules/max-params
        'max-statements': 0, // https://eslint.org/docs/rules/max-statements
        'max-statements-per-line': [1, { // https://eslint.org/docs/rules/max-statements-per-line
            'max': 1, // Basically, it's bad to place 2 statements into 1 line.
        }],
        'multiline-comment-style': 0, // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-ternary': 0, // We don't have any strong opinion about this.
        'new-cap': 1,
        'new-parens': 2,
        'newline-per-chained-call': [0, { // https://eslint.org/docs/rules/newline-per-chained-call
            'ignoreChainWithDepth': 4, // I don't feel this is a real problem at now...
        }],
        'no-array-constructor': 2, // In almost case, we don't have to use it.
        'no-bitwise': [2, { // In almost case, we don't use bitwise operators...
            'allow': [],
            'int32Hint': true, // https://eslint.org/docs/rules/no-bitwise
        }],
        'no-compare-neg-zero': 1, // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-continue': 0, // https://eslint.org/docs/rules/no-continue
        'no-inline-comments': 0, // https://eslint.org/docs/rules/no-inline-comments
        'no-lonely-if': 1, // https://eslint.org/docs/rules/no-lonely-if
        'no-mixed-operators': 2, // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 1,
        'no-multiple-empty-lines': 0, // Empty lines somtimes means a section of a program.
        'no-negated-condition': 0, // https://eslint.org/docs/rules/no-negated-condition
        'no-nested-ternary': 2, // https://eslint.org/docs/rules/no-nested-ternary
        'no-new-object': 2, // In almost case, we don't have to use it.
        'no-plusplus': 0, // We might use it for loop.
        'no-restricted-syntax': [2,
            // Ban the way to reflection by strings (Enable explicitly if you'd like to use).
            'ForInStatement'
        ],
        'no-tabs': [2, {
            'allowIndentationTabs': false,
        }],
        'no-ternary': 0, // https://eslint.org/docs/rules/no-ternary
        'no-trailing-spaces': 1,
        'no-underscore-dangle': [2, { // Ban the name which starts with `_`.
            'allowAfterThis': true, // allow after this to create a private member.
        }],
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 0, // https://eslint.org/docs/rules/nonblock-statement-body-position
        'object-curly-newline': 0, // Just case by case! https://eslint.org/docs/rules/object-curly-newline
        'object-curly-spacing': 0, // https://eslint.org/docs/rules/object-curly-spacing
        'object-property-newline' : 0, // Disable to allow many properties into single line.
        'one-var': [2, 'never'], // https://eslint.org/docs/rules/one-var
        'one-var-declaration-per-line': 1, // https://eslint.org/docs/rules/one-var-declaration-per-line
        'operator-assignment': 0, // Unlike `i++` or `++i`, this is not a problem
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'padding-line-between-statements': [1,
            /**
             *  This configuration is valid the case:
             *
             *  ```
             *      "use strict";
             *      "use asm";
             *
             *      foo();
             *  ```
             */
            { 'blankLine': 'always', 'prev': 'directive', 'next': '*' },
            { 'blankLine': 'any', 'prev': 'directive', 'next': 'directive' },
        ],
        'prefer-object-spread': 1, // https://eslint.org/docs/rules/prefer-object-spread
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true,
        }],
        'quote-props': 0, // `bar-foo` without quote will be parse error if we disable this rules.
        'semi': [2, 'always'], // Enfoce semicolon.
        'semi-spacing':[2, { // Ban a space char before semicolon.
            'before': false,
            'after': true
        }],
        'semi-style': [1, 'last'],
        'sort-keys': 0, // We don't think this is useful for all object by default.
        'sort-vars': 0, // we don't have to sort vars.
        'space-before-blocks': 0, // https://eslint.org/docs/rules/space-before-blocks
        'space-before-function-paren': [1, { // https://eslint.org/docs/rules/space-before-function-parentheses
            'anonymous': 'ignore',
            'named': 'never',
            'asyncArrow': 'ignore',
        }],
        'space-in-parens': 0,
        'space-infix-ops': 1,
        'space-unary-ops': [1, {
            'words': true, // It's more readable for keywords.
            'nonwords': false, // It's very tired to enforce before/after of `++`/`--`.
        }],
        'spaced-comment': 0,
        'switch-colon-spacing': [1, {
            'after': true,
            'before': false,
        }],
        'template-tag-spacing': 1,
        'unicode-bom': 2, // Ban byte-order-mark
        'wrap-regex': 0,

        // ECMASctipt 6
        'arrow-body-style': 0, // This is just a stylistic issue.
        'arrow-parens': 2, // requires parens for arrow function.
        'arrow-spacing': [1, { // requires space before/after for `=>` of arrow func.
            'before': true,
            'after': true
        }],
        'constructor-super': 2, // check calling `super()` in a derived class.
        'generator-star-spacing': [2, {
            'before': false,
            'after': true
        }],
        'no-class-assign': 2, // Ban to assign the same name of class declaration.
        'no-confusing-arrow': [1, { // Detect confusing arrow func (`=>`) or "great/less than or equal operator" (`>=`, `<=`)
            'allowParens': true,
        }],
        'no-const-assign': 2, // https://eslint.org/docs/rules/no-const-assign
        'no-dupe-class-members': 2, // https://eslint.org/docs/rules/no-dupe-class-members
        'no-duplicate-imports': 1, // https://eslint.org/docs/rules/no-duplicate-imports
        'no-new-symbol': 2, // `Symbol` is not a constructor.
        'no-restricted-imports': 0, // Should specified by for each projects: https://eslint.org/docs/rules/no-restricted-imports
        'no-this-before-super': 2, // https://eslint.org/docs/rules/no-this-before-super
        'no-useless-computed-key': 1,
        'no-useless-constructor': 0, // This is a stylistic issue.
        'no-useless-rename': 1,
        'no-var': 1,
        'object-shorthand': 0,
        'prefer-arrow-callback': [0, {
            'allowNamedFunctions': true, // for debugging stack trace
            'allowUnboundThis': false, // if `true`, ban using `this` without `bind()` in the callback.
        }],
        'prefer-const': [1, {
            'destructuring': 'any', // Let's use `const` if we make one of variables `const`.
        }],
        'prefer-destructuring': 0, // It's not always true that to prefer destructuring.

        // After ECMAScript 2018, this feature improves code readability.
        // But we need to investigate the perf impact if we recommend to named capture group.
        // Until then, we disable this rule.
        'prefer-named-capture-group': 'off',

        'prefer-numeric-literals': 2, // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-rest-params': 1, // Recommend to use rest parameter instead of `arguments`.
        'prefer-spread': 1, // Recommend to use spread operator instead of `Function.prototype.apply`.
        'prefer-template': 0,
        'require-yield': 2, // Detect missing `yield` in a generator function.
        'rest-spread-spacing': [2, 'never'], // clarify 'this is rest/spread operator'.
        // 'sort-import': 0,
        'symbol-description': 2, // Force to pass the description to `Symbol()`.
        'template-curly-spacing': [1, 'never'], // https://eslint.org/docs/rules/template-curly-spacing
        'yield-star-spacing': [1, 'after'], // https://eslint.org/docs/rules/%20yield-star-spacing.html
    }
};
