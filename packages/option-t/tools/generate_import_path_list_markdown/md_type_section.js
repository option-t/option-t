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

    toString() {
        const list = this.#list;
        const experimental = buildExperimentalSection(list);

        const str = list
            .filter((item) => {
                const isExperimental = item.isExperimental;
                const ok = !isExperimental;
                return ok;
            })
            .map(String)
            .join('\n');

        return `
## ${this.#headlineTypeName}

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
