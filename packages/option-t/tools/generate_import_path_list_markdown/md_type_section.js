export class MarkdownTypeSection {
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
