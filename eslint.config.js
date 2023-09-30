import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import globals from 'globals';

import {
    rules as rulesForJavaScript,
    createLanguageOptionsForModule,
    createLanguageOptionsForCommonJS,
} from './tools/eslint/javascript.js';
import { linterOptions } from './tools/eslint/linter_option.js';
import {
    createlanguageOptionsForTypeScript,
    config as configForTypeScript,
} from './tools/eslint/typescript.js';

const THIS_FILE_NAME = fileURLToPath(import.meta.url);
const THIS_DIR_NAME = path.dirname(THIS_FILE_NAME);

const ecmaVersion = 2022;

const languageOptionsForModule = createLanguageOptionsForModule(ecmaVersion, {
    ...globals.nodeBuiltin,
});

const languageOptionsForCommonJS = createLanguageOptionsForCommonJS(ecmaVersion, {
    ...globals.node,
    ...globals.commonjs,
});

// https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
export default [
    js.configs.recommended,
    {
        linterOptions,
        rules: {
            ...rulesForJavaScript,
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
            '**/lib/**/*',
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
            path.resolve(THIS_DIR_NAME, 'packages/option-t/'),
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
