/*eslint quote-props: [2, "always"] */

'use strict';

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {

    'root': true,

    'extends': [
        './tools/eslint/eslintrc_core.cjs',
    ],

    'parserOptions': {
        'ecmaVersion': 2020,
    },

    'env': {
        'es6': true,
        'node': true,
    },

    'reportUnusedDisableDirectives': true,

    'rules': {
    },

    'overrides': [
        {
            'files': ['*.cjs'],
            'parserOptions': {
                'sourceType': 'script',
            },

            'rules': {
            },
        },
        {
            'files': ['*.mjs'],
            'parserOptions': {
                'sourceType': 'module',
            },

            'rules': {
            },
        },
    ],
};
