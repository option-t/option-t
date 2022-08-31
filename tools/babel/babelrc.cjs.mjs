import { babelEnvPresetConfig } from './babelconfig.mjs';

export default {
    'presets': [
        ['@babel/preset-env', {
            ...babelEnvPresetConfig,
            'modules': false,
        }],
    ],
    'plugins': [
        ['./babel-plugin-modify-ext.mjs', {
            extension: '.cjs',
        }],
        ['@babel/plugin-transform-modules-commonjs', {
            importInterop: 'none',
        }]
    ],
};
