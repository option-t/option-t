import importPlugin from 'eslint-plugin-import';

const plugins = {
    import: importPlugin,
};

const rulesForLibaryCode = {
    // Do not import packages that listed in dependencies explicitly.
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: false,
            optionalDependencies: false,
            peerDependencies: false,
            bundledDependencies: false,
        },
    ],

    // Disallow to import Node.js builtin module.
    // It's hurt the portability of this library.
    'import/no-nodejs-modules': 'error',
};

/**
 *  @type   {import('eslint').Linter.FlatConfig}
 */
export const configForLibaryCode = {
    plugins,
    rules: rulesForLibaryCode,
    settings: importPlugin.configs.typescript.settings,
};
