/* eslint-env node */

'use strict';

const path = require('path');

// ESLint Configuration Files enables to include comments.
// http://eslint.org/docs/configuring/#comments-in-configuration-files
module.exports = {
    extends: ['prettier', 'prettier/@typescript-eslint'],

    env: {
        es6: true,
        node: false,
        commonjs: false,
    },

    rules: {
        'no-magic-numbers': 'off',
    },

    overrides: [
        {
            files: ['*.ts'],

            extends: ['../tools/eslint/eslintrc_typescript.cjs'],

            parserOptions: {
                sourceType: 'module',
                project: path.resolve(__dirname, '../tsconfig_eslint.json'),
            },

            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
            },
        },
    ],
};
