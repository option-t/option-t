const RELATIVE_PATH_TO_SRC_DIR_IN_MONOREPO = '../packages/option-t/src';

const PKG_NAME = 'option-t';

export class MarkdownListItem {
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
