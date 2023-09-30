import vendoredCoreConfig from './vendor/eslintrc_core.cjs';
import * as prettierConfig from './prettier.js';

export const rules = Object.freeze({
    ...vendoredCoreConfig.rules,
    ...prettierConfig.rules,
});

export function createLanguageOptionsForModule(ecmaVersion, globals) {
    const option = Object.freeze({
        ecmaVersion,
        sourceType: 'module',
        globals,
    });
    return option;
}

export function createLanguageOptionsForCommonJS(ecmaVersion, globals) {
    const option = Object.freeze({
        ecmaVersion,
        sourceType: 'commonjs',
        globals,
    });
    return option;
}
