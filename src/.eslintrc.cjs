/* eslint-env node */

'use strict'; // eslint-disable-line strict

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { rules } = require('../tools/eslint/eslintrc_typescript.cjs');
const KEY_NAMING_CONVENTION = '@typescript-eslint/naming-convention';

// We allow `K` or `V` forms to avoid to rewrite type parameters.
const newNamingConventionRule = [...rules[KEY_NAMING_CONVENTION]].map((item) => {
    if (typeof item === 'string') {
        return item;
    }

    if (item.selector !== 'typeParameter') {
        return item;
    }

    return {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
            regex: '(^[A-Z]\\d?$|^T[A-Z][a-zA-Z]+\\d?$)',
            match: true,
        },
    };
});

// ESLint Configuration Files enables to include comments.
// https://eslint.org/docs/user-guide/configuring/
module.exports = {
    extends: ['../tools/eslint/eslintrc_typescript.cjs', 'prettier'],

    parserOptions: {
        sourceType: 'module',
        project: path.resolve(__dirname, '../tsconfig.eslint.json'),
        extraFileExtensions: ['.cjs'],
    },

    env: {
        es6: false,
        node: false,
        commonjs: false,
    },

    rules: {
        [KEY_NAMING_CONVENTION]: newNamingConventionRule,
    },
};
