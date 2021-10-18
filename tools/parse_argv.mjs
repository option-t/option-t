import * as assert from 'assert';

function isFlagKey(str) {
    return str.startsWith('--');
}

class SimpleArgvParser {
    #argv;
    #currentIndex = 0;

    constructor(argv) {
        this.#argv = argv;
        Object.seal(this);
    }

    #get(idx) {
        const item = this.#argv[idx];
        const result = item === undefined ? null : item;
        return result;
    }

    current() {
        const idx = this.#currentIndex;
        const item = this.#get(idx);
        return item;
    }

    lookahead() {
        const idx = this.#currentIndex + 1;
        const item = this.#get(idx);
        return item;
    }

    forwardCurrentIndexTo(num) {
        assert.ok(typeof num === 'number');
        this.#currentIndex = this.#currentIndex + num;
    }

    next() {
        const current = this.current();
        if (current === null) {
            return {
                done: true,
                value: undefined,
            };
        }

        assert.ok(isFlagKey(current), `current should always starts with \`--\` but the actual is ${current}`);

        const next = this.lookahead();
        if (next === null || isFlagKey(next)) {
            this.forwardCurrentIndexTo(1);
            return {
                done: false,
                value: [current, undefined],
            };
        }

        // eslint-disable-next-line no-magic-numbers
        this.forwardCurrentIndexTo(2);
        return {
            done: false,
            value: [current, next],
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

export function parseArgs(argv) {
    assert.ok(Array.isArray(argv), 'argv must be an array');

    const parser = new SimpleArgvParser(argv);
    const map = new Map(parser);
    return map;
}
