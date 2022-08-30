import { babelEnvPresetConfig } from './babelconfig.mjs';

export default {
    'presets': [
        ['@babel/preset-env', {
            ...babelEnvPresetConfig,
            'modules': false,
        }],
    ],
    'plugins': [
        ['./babel-plugin-add-ext-suffix.mjs', {
            extension: '.cjs',
        }],
        ['@babel/plugin-transform-modules-commonjs', {
            importInterop: 'none',
        }]
    ],
};
