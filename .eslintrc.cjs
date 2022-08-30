/*eslint quote-props: [2, "always"] */

'use strict';

// ESLint Configuration Files enables to include comments.
// https://eslint.org/docs/user-guide/configuring/
module.exports = {

    'root': true,

    'extends': [
        './tools/eslint/eslintrc_core.cjs',
    ],

    'parserOptions': {
        'ecmaVersion': 2022,
    },

    'env': {
        'es2021': true,
        'node': true,
    },

    'reportUnusedDisableDirectives': true,

    'rules': {
        'no-unused-private-class-members': 'warn',
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
            'files': ['*.js', '*.mjs'],
            'parserOptions': {
                'sourceType': 'module',
            },

            'rules': {
            },
        },
        {
            'files': ['./__tests__/**/*'],
            'rules': {
                'no-magic-numbers': 'off',
            },
        }
    ],
};
