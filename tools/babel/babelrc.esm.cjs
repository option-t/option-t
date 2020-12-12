'use strict';

const { babelEnvPresetConfig } = require('./babelconfig.cjs');

module.exports = {
    'presets': [
        ['@babel/preset-env', {
            ...babelEnvPresetConfig,
            'modules': false,
        }],
    ]
};
