/* eslint-env node */
/*eslint quote-props: [2, "always"] */

'use strict'; // eslint-disable-line strict

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    'extends': [
        '../tools/eslint/eslintrc_typescript.js',
    ],

    'parserOptions': {
        'sourceType': 'module',
        'project': path.resolve(__dirname, '../tsconfig_eslint.json'),
    },

    'env': {
        'es6': true,
        'node': false,
        'commonjs': false,
    },

    'rules': {
        '@typescript-eslint/no-magic-numbers': 'off',
    }
};
