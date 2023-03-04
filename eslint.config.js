import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import globals from 'globals';

import coreConfig from './tools/eslint/vendor/eslintrc_core.cjs';
import * as prettierConfig from './tools/eslint/prettier.js';
import {
    createlanguageOptionsForTypeScript,
    config as configForTypeScript,
} from './tools/eslint/typescript.js';

const THIS_FILE_NAME = fileURLToPath(import.meta.url);
const THIS_DIR_NAME = path.dirname(THIS_FILE_NAME);

const reportUnusedDisableDirectives = true;
const ecmaVersion = 2022;

const linterOptions = Object.freeze({
    reportUnusedDisableDirectives,
});

const languageOptionsForModule = Object.freeze({
    ecmaVersion,
    sourceType: 'module',
    globals: {
        ...globals.nodeBuiltin,
    },
});

const languageOptionsForCommonJS = Object.freeze({
    ecmaVersion,
    sourceType: 'commonjs',
    globals: {
        ...globals.node,
        ...globals.commonjs,
    },
});

// https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
export default [
    js.configs.recommended,
    {
        linterOptions,
        rules: {
            ...coreConfig.rules,
            ...prettierConfig.rules,

            'no-unused-private-class-members': 'warn',
        },
    },
    {
        ignores: [
            // @prettier-ignore

            // Project-specific generated files
            '**/__dist/**/*',
            '**/__tmp_base/**/*',
            '**/__tmp_mjs/**/*',
            '**/__tmp_cjs/**/*',
            '**/cjs/**/*',
            '**/esm/**/*',
        ],
    },
    {
        files: ['**/*.mjs', '**/*.js'],
        languageOptions: languageOptionsForModule,
    },
    {
        files: ['**/*.cjs'],
        languageOptions: languageOptionsForCommonJS,
    },
    {
        files: ['**/__tests__/**/*'],
        languageOptions: languageOptionsForModule,
        rules: {
            'no-magic-numbers': 'off',
        },
    },
    {
        files: [
            // @prettier-ignore
            'packages/option-t/**/*.ts',
            'packages/option-t/**/*.mts',
            'packages/option-t/**/*.cts',
        ],
        languageOptions: createlanguageOptionsForTypeScript(
            path.resolve(THIS_DIR_NAME, 'packages/option-t/')
        ),
        ...configForTypeScript,
    },
    {
        files: [
            // @prettier-ignore
            '**/*.ts',
            '**/*.mts',
            '**/*.cts',
        ],
        languageOptions: createlanguageOptionsForTypeScript(THIS_DIR_NAME),
        ...configForTypeScript,
    },
];
