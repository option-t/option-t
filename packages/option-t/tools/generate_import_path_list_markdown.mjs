import * as assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { parseArgs } from 'node:util';

import { MarkdownListItem } from './generate_import_path_list_markdown/md_list_item.js';
import { MarkdownTypeSection } from './generate_import_path_list_markdown/md_type_section.js';
import { generateExposedPathSequence } from './public_api/mod.mjs';

const THIS_DIR_NAME = import.meta.dirname;

const RELATIVE_PATH_TO_SRC_DIR = '../src';

const FILENAME = 'public_api_list.md';

function categorizeByType(list) {
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
                prefix = 'PlainOption (deprecated)';
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
        const s = new MarkdownTypeSection(key, list);
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
            const publicApiPath = pathItem.resolvedName();
            const hrefFromDocsDir = pathItem.hrefFromDocsDir();
            const isDeprecated = pathItem.isDeprecated();
            const message = pathItem.message();
            const isExperimental = pathItem.isExperimental();
            const isTypeRootPath = pathItem.isTypeRootPath();
            const isCorePrimitive = pathItem.isCorePrimitive();
            const item = new MarkdownListItem(
                key,
                publicApiPath,
                hrefFromDocsDir,
                isDeprecated,
                message,
                isExperimental,
                isTypeRootPath,
                isCorePrimitive,
            );
            return item;
        });

    const sectionList = categorizeByType(list);

    const text = generateText(sectionList);

    const dest = path.resolve(OUT_DIR, FILENAME);

    await fs.writeFile(dest, text);
})().catch((e) => {
    console.error(e);
    process.exit(1);
});
