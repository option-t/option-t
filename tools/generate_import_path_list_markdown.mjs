import * as assert from 'node:assert/strict';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
    generateExposedPathSequence,
} from './public_api/mod.mjs';


const THIS_FILE_NAME = fileURLToPath(import.meta.url);
const THIS_DIR_NAME = path.dirname(THIS_FILE_NAME);

const RELATIVE_PATH_TO_SRC_DIR = '../src';

const FILENAME = 'public_api_list.md';

const PKG_NAME = 'option-t';

class ListItem {
    #key;
    #subpath;
    #extension;

    constructor(key, subpath, extension = 'ts') {
        this.#key = key;
        this.#subpath = subpath;
        this.#extension = extension;
        Object.freeze(this);
    }

    key() {
        return this.#key;
    }

    href() {
        const subpath = this.#subpath;
        if (!subpath) {
            return this.#key;
        }

        return subpath;
    }

    #pathname() {
        const key = this.#key;
        if (key === '.') {
            return PKG_NAME;
        }

        return `${PKG_NAME}/${key}`;
    }

    toString() {
        const name = this.#pathname();
        const href = `${RELATIVE_PATH_TO_SRC_DIR}/${this.href()}.${this.#extension}`;

        return `- [${name}](${href})`;
    }
}

class Section {
    #headline;
    #list;

    constructor(headline, list) {
        this.#headline = headline;
        this.#list = list;
        Object.freeze(this);
    }

    toString() {
        const str = this.#list.map(String).join('\n');

        return `
## ${this.#headline}

${str}
`;
    }
}

function categorize(list) {
    const m = new Map();

    for (const item of list) {
        const key = item.key();
        const [prefix, ] = key.split('/');

        let v = m.get(prefix);
        if (v === undefined) {
            v = [];
            m.set(prefix, v);
        }

        v.push(item);
    }

    const result = [];
    for (const [key, list] of m) {
        const s = new Section(key, list);
        result.push(s);
    }

    return result;
}

function generateText(list) {
    const str = list.map(String).join('\n');

    return `# All public API paths

* you can import these paths from both \`require()\` and \`import()\`.
* To import these, your toolchain must support [conditional exports](https://nodejs.org/api/esm.html#esm_conditional_exports).

${str}
`;
}

(async function main() {
    const OUT_DIR = process.env.OUT_DIR;
    assert.strictEqual(typeof OUT_DIR, 'string', '$OUTDIR envvar should be string');

    const SRC_DIR = process.env.SRC_DIR;
    assert.strictEqual(typeof SRC_DIR, 'string', '$SRC_DIR envvar should be string');

    // check SRC_DIR is src/
    {
        const actual = path.resolve(THIS_DIR_NAME, SRC_DIR);
        const expected = path.resolve(THIS_DIR_NAME, RELATIVE_PATH_TO_SRC_DIR);
        assert.strictEqual(actual, expected, `SRC_DIR (${actual}) should be ${expected}`);
    }

    const apiList = generateExposedPathSequence();
    const list = Array.from(apiList)
        .map((pathItem) => {
            const key = pathItem.name();
            const path = pathItem.filepath();
            const item = new ListItem(key, path);
            return item;
        });

    const sectionList = categorize(list);

    const text = generateText(sectionList);

    const dest = path.resolve(OUT_DIR, FILENAME);

    await fs.writeFile(dest, text);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});
