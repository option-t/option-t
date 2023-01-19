import * as assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import test from 'node:test';

function parseJSON(text) {
    try {
        const o = JSON.parse(text);
        return o;
    }
    catch (_e) {
        return null;
    }
}

async function loadJSON(cwd, dir) {
    const relativePath = path.join(dir, './package.json');
    const absPath = path.resolve(cwd, relativePath);
    const content = await fs.readFile(absPath, {
        encoding: 'utf8',
        flag: 'r',
    });
    const parsed = parseJSON(content);
    assert.notStrictEqual(parsed, null, `could not load ${absPath}`);
    return parsed;
}

function getExportsField(obj) {
    const exports = obj.exports;
    assert.strictEqual(typeof exports, 'object', 'exports field must be object');
    assert.ok(!!exports, 'exports field is nothing');
    return exports;
}

function* iterateKeysOfExportsFieldDeeply(obj, prefix) {
    assert.strictEqual(typeof prefix, 'string');

    for (const [key, value] of Object.entries(obj)) {
        const route = `${prefix}::${key}`;

        if (typeof value === 'object') {
            assert.notStrictEqual(value, null, `${route}'s value is null`);
            yield* iterateKeysOfExportsFieldDeeply(value, route);
            continue;
        }

        assert.strictEqual(typeof value, 'string', `${route} is not string`);

        yield Object.freeze({
            route,
            key,
            value,
        });
    }
}

async function checkWhetherFileExist(parentDir, filename) {
    assert.strictEqual(typeof parentDir, 'string', `should set parentDir`);
    assert.strictEqual(typeof filename, 'string', `should set filename`);

    const filepath = path.resolve(parentDir, filename);
    const stat = await fs.stat(filepath);
    assert.ok(stat.isFile(), `${filename} must be file`);
}

await test(`Check package.json's 'exports' field format`, async (t) => {
    const targetDir = process.env.TARGET_DIR;
    assert.ok(!!targetDir, 'TARGET_DIR envvar should be set');

    const json = await loadJSON(process.cwd(), targetDir);
    const exports = getExportsField(json);

    await t.test(`This script tests whether the file specied in \`exports\` field in package.json exist`, async (t) => {
        const assetion = checkWhetherFileExist.bind(null, targetDir);

        const runningTests = [];
        for (const { route, value } of iterateKeysOfExportsFieldDeeply(exports, '')) {
            const running = t.test(route, async (_t) => {
                await assetion(value);
            });
            runningTests.push(running);
        }
        await Promise.all(runningTests);
    });
});
