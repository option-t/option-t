/* eslint-env commonjs */
/*eslint quote-props: [2, "always"] */

'use strict'; // eslint-disable-line strict

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
    ],

    'parserOptions': {
        'ecmaVersion': 5,
        'sourceType': 'module',
    },

    'env': {
        'es6': false,
        'node': false,
        'commonjs': false,
    },

    'rules': {
        // See https://eslint.org/blog/2018/11/jsdoc-end-of-life
        'valid-jsdoc': 'off',

        // the default `no-unused-vars` is not support type annotations.
        '@typescript-eslint/no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'argsIgnorePattern': '^_', // Sort with TypeScript compiler's builtin linter.
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^_', // Allow `catch (_e) {...}`
        }],

        // Sort with TypeScript's `let a: A;` pattern.
        'init-declarations': 'off',
    }
};
