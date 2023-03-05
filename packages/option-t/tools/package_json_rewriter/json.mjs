import * as fs from 'node:fs/promises';
import * as path from 'node:path';

async function loadFileAsText(baseDir, filepath) {
    const p = path.resolve(baseDir, filepath);
    const content = await fs.readFile(p, {
        encoding: 'utf8',
        flag: 'r',
    });
    return content;
}

function parseJSON(text) {
    try {
        const o = JSON.parse(text);
        return o;
    } catch (_e) {
        return null;
    }
}

export async function loadJSON(baseDir, filepath) {
    const text = await loadFileAsText(baseDir, filepath);
    const json = parseJSON(text);
    return json;
}
