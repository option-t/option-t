/**
 * MIT License
 *
 * Copyright (c) 2016 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 * Copyright (c) 2016 Yusuke Suzuki <utatane.tea@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/*eslint quote-props: [2, "always"] */

'use strict';

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
//
// This file should only contains ESLint's builtin rules to increase a portability
// of rulesets.
module.exports = {

    'rules': {
        // Possible Errors

        'for-direction': 0,
        // We should reconsider about this after ECMA262 introduces
        // [async iteration](https://github.com/tc39/proposal-async-iteration),
        // But now, we enable this.
        'no-await-in-loop': 1,
        'no-cond-assign': 2,
        'no-console': 0,
        'no-constant-condition': 1,
        'no-control-regex': 2,
        'no-debugger': 1,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 0,
        'no-extra-parens': [0, 'all', {
            'nestedBinaryExpressions': false,
            'returnAssign': false,
        }],
        'no-extra-semi': 1,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 1,
        'no-unexpected-multiline': 1,
        'no-unreachable': 1,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'use-isnan': 2,
        'valid-jsdoc': [2, {
            'requireReturn': true,
            'requireParamDescription': false,
            'requireReturnDescription': false,
            'preferType': {
                'Boolean': 'boolean',
                'Number': 'number',
                'String': 'string',
                'object': 'Object',
            },
        }],
        'valid-typeof': [2, {
            'requireStringLiterals': false,
        }],

        // Best Practices
        'accessor-pairs': 0, // Allow only getter or setter to define a "read-only" or "write-only" object
        'array-callback-return': 1,
        'block-scoped-var': 1,
        'class-methods-use-this': 0, // Disable for the case of that an overrideed methods which not use `this`.
        'complexity': 0, // check a cyclomatic complexity
        'consistent-return': [2, {
            'treatUndefinedAsUnspecified': true,
        }],
        'curly': 2,
        'default-case': 0, // http://eslint.org/docs/rules/default-case
        'dot-location': 0, // http://eslint.org/docs/rules/dot-location
        'dot-notation': 2, // http://eslint.org/docs/rules/dot-notation
        'eqeqeq': [2, 'always', {
            'null': 'always',
        }],
        'guard-for-in': 0, // http://eslint.org/docs/rules/guard-for-in
        'no-alert': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 0, // http://eslint.org/docs/rules/no-else-return
        'no-empty-function': 1, // http://eslint.org/docs/rules/no-empty-function
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2, // http://eslint.org/docs/rules/no-extend-native
        'no-extra-bind': 1, // http://eslint.org/docs/rules/no-extra-bind
        'no-extra-label': 1, // http://eslint.org/docs/rules/no-extra-label
        'no-fallthrough': 2,
        'no-floating-decimal': 0, // http://eslint.org/docs/rules/no-floating-decimal
        'no-global-assign': 2, // http://eslint.org/docs/rules/no-global-assign
        'no-implicit-coercion': [2, { // http://eslint.org/docs/rules/no-implicit-coercion
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
        'no-lone-blocks': 1, // http://eslint.org/docs/rules/no-lone-blocks
        'no-loop-func': 2, // http://eslint.org/docs/rules/no-loop-func
        // 'no-magic-numbers': [1, { // FIXME: https://github.com/karen-irc/karen/issues/428
        //     'ignore': [],
        //     'ignoreArrayIndexes': false,
        //     'ignoreJSXNumbers': false,
        //     'enforceConst': false,
        //     'detectObjects': false,
        // },
        'no-multi-spaces': 1, // http://eslint.org/docs/rules/no-multi-spaces
        'no-multi-str': 0, // http://eslint.org/docs/rules/no-multi-str
        'no-new': 1, // http://eslint.org/docs/rules/no-new
        'no-new-func': 1,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2, // http://eslint.org/docs/rules/no-octal-escape
        'no-param-reassign': [1, {
            'props': true
        }],
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': [2, // http://eslint.org/docs/rules/no-restricted-properties
        ],
        'no-return-assign': 2,
        'no-return-await': 1,
        'no-script-url': 2,
        'no-self-assign': [2, {
            'props': true,
        }], // http://eslint.org/docs/rules/no-self-assign
        'no-self-compare': 2, //http://eslint.org/docs/rules/no-self-compare
        'no-sequences': 2, // We're not doing a code golf: http://eslint.org/docs/rules/no-sequences
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 1,
        'no-unused-expressions': 2,
        'no-unused-labels': 2, // http://eslint.org/docs/rules/no-unused-labels
        'no-useless-call': 1,
        'no-useless-concat': 1,
        'no-useless-escape': 1, // http://eslint.org/docs/rules/no-useless-escape
        'no-useless-return': 1, // see http://eslint.org/docs/rules/no-useless-return
        'no-void': 2, // We live in after ES5 : http://eslint.org/docs/rules/no-void
        'no-warning-comments': 0, // We need not always enable this : http://eslint.org/docs/rules/no-warning-comments
        'no-with': 2,
        'prefer-promise-reject-errors': [1, {
            'allowEmptyReject': true, // for creating empty rejected one to composite promise.
        }],
        'radix': 2,
        'require-await': 0, // we can define an async function which does not have `await` in its body.
        'vars-on-top': 0, // This is a ridiculous customs: http://eslint.org/docs/rules/vars-on-top
        'wrap-iife': 0, // http://eslint.org/docs/rules/wrap-iife
        'yoda': 0, // http://eslint.org/docs/rules/wrap-iife

        // Strict Mode
        'strict': [2, 'global'],

        // Variables
        'init-declarations': [2, 'always'],
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': [2,
            // We don't have any global variables which we'd like to ban yet. http://eslint.org/docs/rules/no-restricted-globals
            'name', 'top', 'event'
        ],
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 0, // To align with TypeScript, we allow `undefined` as `void` value (like `T | void`).
        'no-undefined': 0,
        'no-unused-vars': [1, {
            'vars': 'all',
            'args': 'after-used',
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^_',
        }],
        'no-use-before-define': [2, {
            'functions': false, //  Function declarations are hoisted.
            'classes': true, // Class declarations are not hoisted. We should warn it.
        }],

        // Node.js
        'callback-return': 0, // http://eslint.org/docs/rules/callback-return
        'global-require': 2,
        'handle-callback-err': 0, // We are not always write for nodejs.
        'no-buffer-constructor': 2,
        'no-mixed-requires': [2, {
            'grouping': true,
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0, // http://eslint.org/docs/rules/no-process-env
        'no-process-exit': 0,
        'no-restricted-modules': 0, // http://eslint.org/docs/rules/no-restricted-modules
        'no-sync': 1, // Bann to use sync method. FIXME: enable this rules as an error.

        // Stylistic Issues
        'array-bracket-newline ': 0,
        'array-bracket-spacing': 0, // http://eslint.org/docs/rules/array-bracket-spacing
        'array-element-newline': 0,
        'block-spacing': 0, // http://eslint.org/docs/rules/block-spacing
        'brace-style': [0, 'stroustrup', { // http://eslint.org/docs/rules/brace-style
            'allowSingleLine': true
        }],
        'camelcase': [2, {
            'properties': 'always'
        }],
        'capitalized-comments': 0, // we don't think this causes some serious problem.
        'comma-dangle': [0, 'never'],
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last', {
            'exceptions': {
                'ArrayPattern': false,
                'ArrowFunctionExpression': false,
                'CallExpression': false,
                'FunctionDeclaration': false,
                'FunctionExpression': false,
                'ImportDeclaration': false,
                'ObjectPattern': false,
            },
        }],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'that'],
        'eol-last': [0, 'always'], // we don't have to restrict this.
        'func-call-spacing': [2, 'never'], // enforce `fn();` style and ban `fn ();`.
        'func-name-matching': 1,
        'func-names': [0, 'as-needed'], // we don't have to restrict this in most case.
        'func-style': [0, 'declaration', {
            'allowArrowFunctions': true,
        }], // XXX: a top level functions should be a declaration, but it would be good to allow both forms of declaration/expression.
        'id-blacklist': 0, // http://eslint.org/docs/rules/id-blacklist
        'id-length': 0, // http://eslint.org/docs/rules/id-length
        'id-match': 0, // http://eslint.org/docs/rules/id-match
        'indent': [2, 4, {
            'SwitchCase': 1,
            'MemberExpression': 1,
            'CallExpression': {
                'arguments': 'first',
            },
        }],
        'jsx-quotes': [1, 'prefer-single'],
        'keyword-spacing': [1, {
            'before': true,
            'after': true,
        }],
        'key-spacing': 0,
        'line-comment-position': 0, // We don't think this is a really important enforcement.
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0, // http://eslint.org/docs/rules/lines-around-comment
        'max-depth': [2, 10], // http://eslint.org/docs/rules/max-depth
        'max-len': [2, 256, 4, { // http://eslint.org/docs/rules/max-len
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true,
        }],
        // 'max-lines': [1, {
        //     'max': 150, // In almost case, we would not use more than this lines.
        //     'skipBlankLines': false,
        //     'skipComments': true, // In some case, uris are longer than max lines.
        // }],
        'max-nested-callback': 0, // http://eslint.org/docs/rules/max-nested-callbacks
        'max-params': 0, // http://eslint.org/docs/rules/max-params
        'max-statements': 0, // http://eslint.org/docs/rules/max-statements
        'max-statements-per-line': [1, { // http://eslint.org/docs/rules/max-statements-per-line
            'max': 1, // In almost case, We don't write 2~ statements in per line.
        }],
        'multiline-ternary': 0,
        'new-cap': [1, {
            'capIsNewExceptionPattern': '',
        }],
        'new-parens': 2,
        'newline-per-chained-call': [0, { // http://eslint.org/docs/rules/newline-per-chained-call
            'ignoreChainWithDepth': 4, // I don't feel this is a really problem at now...
        }],
        'no-array-constructor': 2, // In almost case, we don't have to use `new Array()` without any comments.
        'no-bitwise': [2, { // don't use bitwise operators without some optimizations.
            'allow': [],
            'int32Hint': true,
        }],
        'no-compare-neg-zero': 1,
        'no-continue': 0, // http://eslint.org/docs/rules/no-continue
        'no-inline-comments': 0, // http://eslint.org/docs/rules/no-inline-comments
        'no-lonely-if': 1, // http://eslint.org/docs/rules/no-lonely-if
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 1,
        'no-multiple-empty-lines': 0, // Empty lines somtimes means a section of a program.
        'no-negated-condition': 0, // http://eslint.org/docs/rules/no-negated-condition
        'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
        'no-new-object': 2, // In almost case, we don't have to use `new Object()` without any comments.
        'no-plusplus': 0,
        'no-restricted-syntax': [2,
            'ForInStatement', // We should ban a string reflection style in the environment which ES6 Map is available.
        ],
        'no-tabs': 2, // http://eslint.org/docs/rules/no-tabs
        'no-ternary': 0, // http://eslint.org/docs/rules/no-ternary
        'no-trailing-spaces': 2,
        'no-underscore-dangle': [2, {
            'allowAfterThis': true, // Enable a `private` property convention.
            'allowAfterSuper': true, // Enable a `protected` property convention.
        }],
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 1,
        'nonblock-statement-body-position': 0,
        'object-curly-newline': 0, // http://eslint.org/docs/rules/object-curly-newline
        'object-curly-spacing': 0, // http://eslint.org/docs/rules/object-curly-spacing
        'object-property-newline': 0, // I feel this is a trivial problem.
        'one-var': [2, 'never'], // http://eslint.org/docs/rules/one-var
        'one-var-declaration-per-line': 1, // http://eslint.org/docs/rules/one-var-declaration-per-line
        'operator-assignment': 0, // This is not a problem.
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
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true,
        }],
        'quote-props': 0, // `bar-foo` without quote will be parse error if we disable this rules.
        'require-jsdoc': [0, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true,
                'ArrowFunctionExpression': true,
            }
        }],
        'semi': [2, 'always'],
        'semi-spacing':[2, {
            'before': false,
            'after': true
        }],
        'semi-style': [1, 'last'],
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': 0, // http://eslint.org/docs/rules/space-before-blocks
        'space-before-function-paren': [1, { // http://eslint.org/docs/rules/space-before-function-parentheses
            'anonymous': 'ignore',
            'named': 'never',
            'asyncArrow': 'ignore',
        }],
        'space-in-parens': 0,
        'space-infix-ops': 1,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': 0,
        'switch-colon-spacing': [1, {
            'after': true,
            'before': false,
        }],
        'template-tag-spacing': [1, 'never'],
        'unicode-bom': [2, 'never'],
        'wrap-regex': 0,

        // ECMAScript 6
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [1, 'always'],
        'arrow-spacing': [1, {
            'before': true,
            'after': true
        }],
        'constructor-super': 2,
        'generator-star-spacing': [2, {
            'before': false,
            'after': true
        }],
        'no-class-assign': 2,
        'no-confusing-arrow': [1, {
            'allowParens': true,
        }],
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 1, // http://eslint.org/docs/rules/no-duplicate-imports
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-restricted-imports': 0, // http://eslint.org/docs/rules/no-restricted-imports
        'no-useless-computed-key': 1,
        'no-useless-constructor': 0,
        'no-useless-rename': 2,
        'no-var': 1,
        'object-shorthand': [0, 'consistent'],
        'prefer-arrow-callback': [0, {
            'allowNamedFunctions': true, // for debugging stack trace
        }],
        'prefer-const': [1, {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false,
        }],
        'prefer-destructuring': 0, // It's not always true that to prefer destructuring.
        'prefer-numeric-literals': 2,
        'prefer-rest-params': 1,
        'prefer-spread': 1,
        'prefer-template': 0,
        'require-yield': 2,
        'rest-spread-spacing': [2, 'never'], // clarify 'this is rest/spread operator'.
        'sort-imports': 0,
        'symbol-description': 1, // http://eslint.org/docs/rules/symbol-description
        'template-curly-spacing': [1, 'never'], // http://eslint.org/docs/rules/template-curly-spacing
        'yield-star-spacing': [1, 'after'],
    }
};
