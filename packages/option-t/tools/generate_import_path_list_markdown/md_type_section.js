/**
 *  @typedef {import('./md_list_item.js').MarkdownListItem} MarkdownListItem
 */

export class MarkdownTypeSection {
    /**
     *  @type   {string}
     */
    #headlineTypeName;
    /**
     *  @type   {Array<MarkdownListItem>}
     */
    #list;

    constructor(headline, list) {
        this.#headlineTypeName = headline;
        this.#list = list;
        Object.freeze(this);
    }

    #getTypeRootPath() {
        const list = this.#list;
        const targetItems = list.filter((item) => item.isTypeRootPath);
        const str = targetItems.map(String).join('\n');
        return str;
    }

    toString() {
        const list = this.#list;
        const experimental = buildExperimentalSection(list);
        const typeRoot = this.#getTypeRootPath();

        const str = list
            .filter((item) => {
                const isExperimental = item.isExperimental;
                const isTypeRootPath = item.isTypeRootPath;
                const ok = !isExperimental && !isTypeRootPath;
                return ok;
            })
            .map(String)
            .join('\n');

        return `
## ${this.#headlineTypeName}

Basic APIs are exported here:

${typeRoot}

### Operators

${str}

${experimental}
`;
    }
}

/**
 *  @param   {Array<MarkdownListItem>}  list
 */
function buildExperimentalSection(list) {
    const targetItems = list.filter((item) => {
        return item.isExperimental;
    });
    if (targetItems.length === 0) {
        return '';
    }

    const str = targetItems.map(String).join('\n');

    return `
### Experimental

These paths are experimental. We might cause a breaking change without any major version up.

${str}
`;
}
