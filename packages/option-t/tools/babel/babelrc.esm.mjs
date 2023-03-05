import { babelEnvPresetConfig } from './babelconfig.mjs';

export default {
    presets: [
        [
            '@babel/preset-env',
            {
                ...babelEnvPresetConfig,
                modules: false,
            },
        ],
    ],
};
