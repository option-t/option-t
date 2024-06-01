import * as assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { generateExposedPathSequence } from './public_api/mod.mjs';

const THIS_FILE_NAME = fileURLToPath(import.meta.url);
const THIS_DIR_NAME = path.dirname(THIS_FILE_NAME);

const RELATIVE_PATH_TO_SRC_DIR = '../src';
const RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO = '../packages/option-t/src';

const FILENAME = 'public_api_list.md';

const PKG_NAME = 'option-t';

class ListItem {
    #key;
    #subpath;
    #isDeprecated;
    #deprecatedMessage;
    #isExperimental;

    constructor(key, subpath, isDeprecated, deprecatedMessage, isExperimental) {
        this.#key = key;
        this.#subpath = subpath;
        this.#isDeprecated = isDeprecated;
        this.#deprecatedMessage = deprecatedMessage;
        this.#isExperimental = isExperimental;
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
        const isDeprecated = this.#isDeprecated;
        const isExperimental = this.#isExperimental;

        const name = this.#pathname();
        const href = `${RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO}/${this.href()}.ts`;

        const anchor = `[${name}](${href})`;
        let link = '';
        if (isDeprecated) {
            link = `${anchor} (__deprecated__. ${this.#deprecatedMessage})`;
        } else if (isExperimental) {
            link = `${anchor} (__experimental__)`;
        } else {
            link = anchor;
        }
        return `- ${link}`;
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
        let [prefix] = key.split('/');
        switch (prefix) {
            case 'maybe':
                prefix = 'Maybe';
                break;
            case 'nullable':
                prefix = 'Nullable';
                break;
            case 'undefinable':
                prefix = 'Undefinable';
                break;
            case 'plain_option':
                prefix = 'PlainOption';
                break;
            case 'plain_result':
                prefix = 'PlainResult';
                break;
            default:
                break;
        }

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

- You can import these paths from both \`require()\` and \`import()\`.
- To import these, your toolchains must support [package.json's conditional exports](https://nodejs.org/api/esm.html#esm_conditional_exports).
${str}
`;
}

function parseCliOptions() {
    const options = {
        source: {
            type: 'string',
        },
        destination: {
            type: 'string',
        },
    };

    const { values } = parseArgs({
        options,
        strict: true,
    });

    const sourceDir = values.source;
    assert.ok(!!sourceDir, 'no source');

    const destinationDir = values.destination;
    assert.ok(!!destinationDir, 'no destinationDir');

    return {
        sourceDir,
        destinationDir,
    };
}

(async function main() {
    const { destinationDir: OUT_DIR, sourceDir: SRC_DIR } = parseCliOptions();

    // check SRC_DIR is src/
    {
        const actual = path.resolve(THIS_DIR_NAME, SRC_DIR);
        const expected = path.resolve(THIS_DIR_NAME, RELATIVE_PATH_TO_SRC_DIR);
        assert.strictEqual(actual, expected, `SRC_DIR (${actual}) should be ${expected}`);
    }

    const apiList = generateExposedPathSequence();
    const list = Array.from(apiList)
        .filter((pathItem) => {
            const ok = !pathItem.shouldHideInDoc();
            return ok;
        })
        .map((pathItem) => {
            const key = pathItem.name();
            const path = pathItem.filepath();
            const isDeprecated = pathItem.isDeprecated();
            const deprecatedMessage = pathItem.deprecatedPathMessage();
            const isExperimental = pathItem.isExperimental();
            const item = new ListItem(key, path, isDeprecated, deprecatedMessage, isExperimental);
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
