/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */
/**
 * Regular expressions to test seeds and hashes
 */
const CHARS_TESTER = /^[a-zA-Z0-9]+$/;
const SEEDS_TESTER = /^[a-zA-Z0-9]{62}$/;
/**
 * Characters to be used bu seed generator
 */
const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * IDs hasher
 */
export class IdHash {
    /**
     * Create a new ID hasher
     * @param {?} seed Set to String to use a predefined seed and TRUE to generate a new one
     */
    constructor(seed) {
        if (!!seed) {
            if (true === seed) {
                this.useRandomSeed();
            }
            else {
                this.setSeed(seed);
            }
        }
    }
    /**
     * Generates a random seed
     */
    static generateSeed() {
        const chars = DEFAULT_CHARS.split('');
        /* Shuffle */
        chars.sort(() => 0.5 - Math.random());
        return chars.join('');
    }
    /**
     * Get seed
     */
    getSeed() {
        if (!this.seed) {
            /* Clone DEFAULT_CHARS */
            this.seed = String(DEFAULT_CHARS);
        }
        return this.seed;
    }
    /**
     * Set seed
     */
    setSeed(seed) {
        seed = String(seed).substring(0, 62);
        if (!SEEDS_TESTER.test(seed)) {
            throw new Error(`The given seed (${seed}) is not valid, it must be an
         alphanumeric string with at least 62 characters`);
        }
        this.seed = seed;
        return this;
    }
    /**
     * Equivalent to: `hasher.setSeed(IdHash.generateSeed());`
     */
    useRandomSeed() {
        return this.setSeed(IdHash.generateSeed());
    }
    /**
     * Encode the given ID
     */
    encode(id) {
        if ('number' !== typeof id) {
            id = parseInt(String(id), 10);
        }
        if (isNaN(id)) {
            throw new Error(`The given ID (${id}) is not valid, it must be a valid integer`);
        }
        id = Math.abs(id);
        let ret = '';
        const seed = this.getSeed();
        const radix = seed.length;
        while (true) {
            const r = id % radix;
            ret = seed.substr(r, 1) + ret;
            id = Math.ceil((id - r) / radix);
            if (0 === id) {
                break;
            }
        }
        return ret;
    }
    /**
     * Decode the given hash
     */
    decode(hash) {
        hash = String(hash);
        if (!CHARS_TESTER.test(hash)) {
            throw new Error(`The given hash (${hash}) is not valid, it must be an
         alphanumeric string with at least 1 character`);
        }
        let ret = 0;
        const seed = this.getSeed();
        const radix = seed.length;
        for (let i = 0, l = hash.length; i < l; i++) {
            ret += seed.indexOf(hash.substr(i, 1)) * Math.pow(radix, l - i - 1);
        }
        if (isNaN(ret)) {
            throw new Error(`Unknown error: Can not decode '${hash}'`);
        }
        return ret;
    }
}
//# sourceMappingURL=idhash.class.js.map