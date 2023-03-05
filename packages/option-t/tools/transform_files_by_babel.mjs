import * as assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

import * as babel from '@babel/core';

import { getAllGlobMatchedFiles } from './glob.mjs';
import { createSourceToDestinationMapList, prepareToCreateFile } from './fs_helper.mjs';

async function transformFile(config, source, dest, { isDebug: _isDebug, isVerbose: _isVerbose }) {
    const transformed = await babel.transformFileAsync(source, {
        babelrc: false,
        ...config,
    });
    assert.ok(!!transformed, `fail to transform ${source}`);

    await prepareToCreateFile(dest);
    await fs.writeFile(dest, transformed.code);
}

function parseCliOptions() {
    const options = {
        verbose: {
            type: 'boolean',
        },
        debug: {
            type: 'boolean',
        },
        basedir: {
            type: 'string',
        },
        source: {
            type: 'string',
        },
        destination: {
            type: 'string',
        },
        config: {
            type: 'string',
        },
    };

    const { values } = parseArgs({
        options,
        strict: true,
    });

    const isVerbose = !!values.verbose;
    const isDebug = !!values.debug;

    const baseDir = values.basedir;
    assert.ok(!!baseDir, 'no baseDir');

    const source = values.source;
    assert.ok(!!source, 'no source');

    const destinationDir = values.destination;
    assert.ok(!!destinationDir, 'no destinationDir');

    const configPath = values.config;
    assert.ok(!!configPath, 'no destinationDir');

    return {
        isVerbose,
        isDebug,
        baseDir,
        source,
        destinationDir,
        configPath,
    };
}

(async function main() {
    const { isVerbose, isDebug, baseDir, source, destinationDir, configPath } = parseCliOptions();

    const cwd = process.cwd();
    const configFullPath = path.resolve(cwd, configPath);
    const loadingConfig = import(configFullPath);

    const baseDirFullPath = path.resolve(cwd, baseDir);
    const sourceList = await getAllGlobMatchedFiles(baseDirFullPath, source);
    if (isDebug) {
        console.dir(sourceList);
    }

    const pairList = await createSourceToDestinationMapList(baseDir, sourceList, destinationDir);
    if (isVerbose) {
        const debug = pairList.map(({ source, dest }) => {
            return `${source} -> ${dest}`;
        });
        console.log(debug.join('\n'));
    }
    if (isVerbose) {
        const debug = pairList.map(({ source, dest }) => {
            return `${source} -> ${dest}`;
        });
        console.log(debug.join('\n'));
    }

    const { default: config } = await loadingConfig;
    const result = [];
    for (const { source, dest } of pairList) {
        const processing = transformFile(config, source, dest, {
            isDebug,
            isVerbose,
        });
        result.push(processing);
    }

    await Promise.all(result);
})();
