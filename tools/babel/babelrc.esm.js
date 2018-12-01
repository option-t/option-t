'use strict';

const { babelEnvPresetConfig } = require('./babelconfig');

module.exports = {
    'presets': [
        ['@babel/preset-env', {
            ...babelEnvPresetConfig,
            'modules': false,
        }],
    ]
};
