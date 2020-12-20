/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */
/**
 * IDs hasher
 */
export declare class IdHash {
    /**
     * The seed
     */
    protected seed: string;
    /**
     * Generates a random seed
     */
    static generateSeed(): string;
    /**
     * Create a new ID hasher
     * @param {?} seed Set to String to use a predefined seed and TRUE to generate a new one
     */
    constructor(seed?: string | boolean);
    /**
     * Get seed
     */
    getSeed(): string;
    /**
     * Set seed
     */
    setSeed(seed: string): IdHash;
    /**
     * Equivalent to: `hasher.setSeed(IdHash.generateSeed());`
     */
    useRandomSeed(): IdHash;
    /**
     * Encode the given ID
     */
    encode(id: number): string;
    /**
     * Decode the given hash
     */
    decode(hash: string): number;
}
