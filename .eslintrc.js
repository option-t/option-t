/*eslint quote-props: [2, "always"] */

'use strict';

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    // Derive recommended rules to detect bad smells even if eslint added a new recommended one but we forgot to add them to ours.
    'extends': 'eslint:recommended',

    'ecmaFeatures': {
        'arrowFunctions': true,
        'blockBindings': true,
        'classes': true,
        'objectLiteralComputedProperties': true,
        'objectLiteralDuplicateProperties': true,
        'objectLiteralShorthandMethods': true,
        'objectLiteralShorthandProperties': true,
        'spread': true,
        'templateStrings': true,
    },

    'env': {
        'node': true
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
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 0,
        'no-extra-parens': 0,
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
        'use-isnan': 2,
        'valid-jsdoc': [2, {
            'requireReturn': true,
            'requireParamDescription': false,
            'requireReturnDescription': false
        }],
        'valid-typeof': 2,

        // Best Practices
        'block-scoped-var': 1,
        'consistent-return': 2,
        'curly': 2,
        'eqeqeq': 2,
        'no-alert': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-fallthrough': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-new-func': 1,
        'no-new-wrappers': 2,
        'no-param-reassign': [1, {
            'props': true
        }],
        'no-octal': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 1,
        'no-useless-concat': 1,
        'no-with': 2,
        'radix': 2,

        // Strict Mode
        'strict': [2, 'global'],

        // Variables
        'init-declarations': [2, 'always'],
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-shadow': 0,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 0,
        'no-unused-vars': [1, {
            'vars': 'all',
            'args': 'after-used',
        }],
        'no-use-before-define': 0,

        // Node.js
        'global-require': 2,
        'no-mixed-requires': [2, {
            'grouping': true,
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 0,
        'no-sync': 2,

        // Stylistic Issues
        'camelcase': [2, {
            'properties': 'always'
        }],
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'jsx-quotes': [1, 'prefer-single'],
        'key-spacing': 0,
        'linebreak-style': [2, 'unix'],
        'new-cap': 1,
        'new-parens': 2,
        'no-array-constructor': 2, // In almost case, we don't have to use `new Array()` without any comments.
        'no-mixed-spaces-and-tabs': 2,
        'no-new-object': 2, // In almost case, we don't have to use `new Object()` without any comments.
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'operator-linebreak': [2, 'after'],
        'quotes': [2, 'single', 'avoid-escape'],
        'semi': [2, 'always'],
        'semi-spacing':[2, {
            'before': false,
            'after': true
        }],
        'space-after-keywords': 1,
        'space-infix-ops': 1,
        'space-return-throw-case': 1,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': 0,

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
        'no-arrow-condition': 2,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-this-before-super': 2,
        'no-var': 1,
        'object-shorthand': 0,
        'prefer-const': 1,
        'prefer-reflect': 1,
        'prefer-spread': 1,
        'require-yield': 2,
    }
};
