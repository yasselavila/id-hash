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
     * Constructor
     */
    constructor(seed?: string);
    /**
     * Get seed
     */
    getSeed(): string;
    /**
     * Set seed
     */
    setSeed(seed: string): IdHash;
    /**
     * Encode the given ID
     */
    encode(id: number): string;
    /**
     * Decode the given hash
     */
    decode(hash: string): number | null;
}
