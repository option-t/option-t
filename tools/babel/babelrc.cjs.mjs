import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { babelEnvPresetConfig } from './babelconfig.mjs';

const THIS_FILENAME = fileURLToPath(import.meta.url);
const THIS_DIRNAME = path.dirname(THIS_FILENAME);
const pathResolve = path.resolve.bind(undefined, THIS_DIRNAME);

export default {
    'presets': [
        ['@babel/preset-env', {
            ...babelEnvPresetConfig,
            'modules': false,
        }],
    ],
    'plugins': [
        [pathResolve('./babel-plugin-modify-ext.mjs'), {
            extension: '.cjs',
        }],
        ['@babel/plugin-transform-modules-commonjs', {
            importInterop: 'none',
        }]
    ],
};
