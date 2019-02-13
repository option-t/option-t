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
    }
};
