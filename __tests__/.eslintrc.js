/* eslint-env node */
/*eslint quote-props: [2, "always"] */

'use strict'; // eslint-disable-line strict

const path = require('path');

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    'parserOptions': {
        'sourceType': 'module',
    },

    'env': {
        'es6': true,
        'node': false,
        'commonjs': false,
    },

    'rules': {
        'no-magic-numbers': 'off',
    },

    'overrides': [
        {
            'files': ['*.ts'],

            'extends': [
                '../tools/eslint/eslintrc_typescript.js',
            ],

            'parserOptions': {
                'sourceType': 'module',
                'project': path.resolve(__dirname, '../tsconfig_eslint.json'),
            },

            'rules': {
                '@typescript-eslint/no-magic-numbers': 'off',
            },
        },
    ],
};
