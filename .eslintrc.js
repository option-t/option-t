/**
 * @license MIT License
 *
 * Copyright (c) 2015 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 * Copyright (c) 2015 Yusuke Suzuki <utatane.tea@gmail.com>
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
module.exports = {

    'env': {
        'es6': true,
        'node': true,
    },

    'root': true,

    'rules': {
        // Possible Errors
        'comma-dangle': [0, 'never'],
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
        }],
        'no-extra-semi': 1,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 1,
        'no-unreachable': 1,
        'no-unsafe-finally': 2,
        'use-isnan': 2,
        'valid-jsdoc': [2, {
            'requireReturn': true,
            'requireParamDescription': false,
            'requireReturnDescription': false,
            //'preferType': {
            //    'Boolean': 'boolean',
            //    'Number': 'number',
            //    'String': 'string',
            //    'object': 'Object',
            //},
        }],
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': 0, // Allow only getter or setter to define a "read-only" or "write-only" object
        'array-callback-return': 1,
        'block-scoped-var': 1,
        'complexity': 0, // check a cyclomatic complexity
        'consistent-return': 2,
        'curly': 2,
        'default-case': 0, // http://eslint.org/docs/rules/default-case
        'dot-location': 0, // http://eslint.org/docs/rules/dot-location
        'dot-notation': 2, // http://eslint.org/docs/rules/dot-notation
        'eqeqeq': 2,
        'guard-for-in': 0, // http://eslint.org/docs/rules/guard-for-in
        'no-alert': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-empty-function': 1, // http://eslint.org/docs/rules/no-empty-function
        'no-empty-pattern': 2,
        'no-else-return': 0, // http://eslint.org/docs/rules/no-else-return
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2, // http://eslint.org/docs/rules/no-extend-native
        'no-extra-bind': 1, // http://eslint.org/docs/rules/no-extra-bind
        'no-extra-label': 1, // http://eslint.org/docs/rules/no-extra-label
        'no-fallthrough': 2,
        'no-floating-decimal': 0, // http://eslint.org/docs/rules/no-floating-decimal
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
        'no-native-reassign': 2, // http://eslint.org/docs/rules/no-native-reassign
        'no-new': 1, // http://eslint.org/docs/rules/no-new
        'no-new-func': 1,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2, // http://eslint.org/docs/rules/no-octal-escape
        'no-param-reassign': [1, {
            'props': true
        }],
        'no-process-env': 0, // http://eslint.org/docs/rules/no-process-env
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-assign': 2, // http://eslint.org/docs/rules/no-self-assign
        'no-self-compare': 2, //http://eslint.org/docs/rules/no-self-compare
        'no-sequences': 2, // We're not doing a code golf: http://eslint.org/docs/rules/no-sequences
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 1,
        'no-unused-expressions': 2,
        'no-unused-labels': 2, // http://eslint.org/docs/rules/no-unused-labels
        'no-useless-call': 1,
        'no-useless-concat': 1,
        'no-useless-escape': 1, // http://eslint.org/docs/rules/no-useless-escape
        'no-void': 2, // We live in after ES5 : http://eslint.org/docs/rules/no-void
        'no-warning-comments': 0, // We need not always enable this : http://eslint.org/docs/rules/no-warning-comments
        'no-with': 2,
        'radix': 2,
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
        ],
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
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
        'no-mixed-requires': [2, {
            'grouping': true,
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 0,
        'no-restricted-imports': 0, // http://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-modules': 0, // http://eslint.org/docs/rules/no-restricted-modules
        'no-sync': 1, // Bann to use sync method. FIXME: enable this rules as an error.

        // Stylistic Issues
        'array-bracket-spacing': 0, // http://eslint.org/docs/rules/array-bracket-spacing
        'block-spacing': 0, // http://eslint.org/docs/rules/block-spacing
        'brace-style': [0, 'stroustrup', { // http://eslint.org/docs/rules/brace-style
            'allowSingleLine': true
        }],
        'camelcase': [2, {
            'properties': 'always'
        }],
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'that'],
        'eol-last': 0, // we don't have to restrict this.
        'func-names': 0, // we don't have to restrict this in most case.
        'func-style': [0, 'declaration', {
            'allowArrowFunctions': true,
        }], // XXX: a top level functions should be a declaration, but it would be good to allow both forms of declaration/expression.
        'id-length': 0, // http://eslint.org/docs/rules/id-length
        'id-match': 0, // http://eslint.org/docs/rules/id-match
        'id-blacklist': 0, // http://eslint.org/docs/rules/id-blacklist
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'jsx-quotes': [1, 'prefer-single'],
        'keyword-spacing': [1, {
            'before': true,
            'after': true,
        }],
        'key-spacing': 0,
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0, // http://eslint.org/docs/rules/lines-around-comment
        'max-depth': [2, 10], // http://eslint.org/docs/rules/max-depth
        'max-len': [2, 256, 4, { // http://eslint.org/docs/rules/max-len
            'ignoreUrls': true,
        }],
        'max-nested-callback': 0, // http://eslint.org/docs/rules/max-nested-callbacks
        'max-params': 0, // http://eslint.org/docs/rules/max-params
        'max-statements': 0, // http://eslint.org/docs/rules/max-statements
        'max-statements-per-line': [1, { // http://eslint.org/docs/rules/max-statements-per-line
            'max': 1, // In almost case, We don't write 2~ statements in per line.
        }],
        'new-cap': 1,
        'new-parens': 2,
        'newline-after-var': 0, // http://eslint.org/docs/rules/newline-after-var
        'newline-before-return': 0, // This is just miscellaneous stylistic issue.
        'newline-per-chained-call': [0, { // http://eslint.org/docs/rules/newline-per-chained-call
            'ignoreChainWithDepth': 4, // I don't feel this is a really problem at now...
        }],
        'no-array-constructor': 2, // In almost case, we don't have to use `new Array()` without any comments.
        'no-bitwise': [2, { // don't use bitwise operators without some optimizations.
            'allow': [],
            'int32Hint': true,
        }],
        'no-continue': 0, // http://eslint.org/docs/rules/no-continue
        'no-inline-comments': 0, // http://eslint.org/docs/rules/no-inline-comments
        'no-lonely-if': 1, // http://eslint.org/docs/rules/no-lonely-if
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': 0, // Empty lines somtimes means a section of a program.
        'no-negated-condition': 0, // http://eslint.org/docs/rules/no-negated-condition
        'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
        'no-new-object': 2, // In almost case, we don't have to use `new Object()` without any comments.
        'no-plusplus': 0,
        'no-restricted-syntax': [2,
            'ForInStatement', // We should ban a string reflection style in the environment which ES6 Map is available.
        ],
        'no-spaced-func': 2,
        'no-ternary': 0, // http://eslint.org/docs/rules/no-ternary
        'no-trailing-spaces': 2,
        'no-underscore-dangle': [2, {
            'allowAfterThis': true, // Enable a `private` property convention.
        }],
        'no-unneeded-ternary': 2,
        'object-curly-spacing': 0, // http://eslint.org/docs/rules/object-curly-spacing
        'one-var': [2, 'never'], // http://eslint.org/docs/rules/one-var
        'one-var-declaration-per-line': 1, // http://eslint.org/docs/rules/one-var-declaration-per-line
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true,
        }],
        'require-jsdoc': [0, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true
            }
        }],
        'semi': [2, 'always'],
        'semi-spacing':[2, {
            'before': false,
            'after': true
        }],
        'sort-vars': 0,
        'sort-imports': 0,
        'space-before-blocks': 0, // http://eslint.org/docs/rules/space-before-blocks
        'space-before-function-paren': [1, { // http://eslint.org/docs/rules/space-before-function-parentheses
            'anonymous': 'ignore',
            'named': 'never',
        }],
        'space-in-parens': 0,
        'space-infix-ops': 1,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': 0,
        'wrap-regex': 0,

        // ECMAScript 6
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': 1,
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
        'no-useless-computed-key': 1,
        // 'no-useless-constructor': 2, // FIXME: this rule has the bag which deny to call `super()` in a derived class (ESLint v2b1)
        'no-var': 1,
        'no-whitespace-before-property': 1,
        'object-shorthand': 0,
        'prefer-arrow-callback': [0, {
            'allowNamedFunctions': true, // for debugging stack trace
        }],
        'prefer-const': [1, {
            'destructuring': 'any',
        }],
        'prefer-reflect': 1,
        'prefer-rest-params': 1,
        'prefer-spread': 1,
        'prefer-template': 0,
        'require-yield': 2,
        'template-curly-spacing': [1, 'never'], // http://eslint.org/docs/rules/template-curly-spacing
        'yield-star-spacing': [1, 'after'],
    }
};
