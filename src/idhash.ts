/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */

/**
 * Regular expressions to test seeds and hashes
 */
const CHARS_TESTER: RegExp = /^[a-zA-Z0-9]+$/;
const SEEDS_TESTER: RegExp = /^[a-zA-Z0-9]{62}$/;

/**
 * Characters to be used bu seed generator
 */
const DEFAULT_CHARS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * IDs hasher
 */
export class IdHash {
  /**
   * The seed
   */
  protected seed: string;

  /**
   * Generates a random seed
   */
  public static generateSeed(): string {
    const chars: string[] = DEFAULT_CHARS.split('');

    /* Shuffle */
    chars.sort(() => 0.5 - Math.random());

    return chars.join('');
  }

  /**
   * Create a new ID hasher
   * @param {?} seed Set to String to use a predefined seed and TRUE to generate a new one
   */
  public constructor(seed?: string | boolean) {
    if (!!seed) {
      if (true === seed) {
        this.useRandomSeed();
      } else {
        this.setSeed(seed);
      }
    }
  }

  /**
   * Get seed
   */
  public getSeed(): string {
    if (!this.seed) {
      /* Clone DEFAULT_CHARS */
      this.seed = String(DEFAULT_CHARS);
    }

    return this.seed;
  }

  /**
   * Set seed
   */
  public setSeed(seed: string): IdHash {
    seed = String(seed).substring(0, 62);

    if (!SEEDS_TESTER.test(seed)) {
      throw new Error(
        `The given seed (${seed}) is not valid, it must be an
         alphanumeric string with at least 62 characters`
      );
    }

    this.seed = seed;

    return this;
  }

  /**
   * Equivalent to: `hasher.setSeed(IdHash.generateSeed());`
   */
  public useRandomSeed(): IdHash {
    return this.setSeed(IdHash.generateSeed());
  }

  /**
   * Encode the given ID
   */
  public encode(id: number): string {
    if ('number' !== typeof id) {
      id = parseInt(String(id), 10);
    }

    if (isNaN(id)) {
      throw new Error(`The given ID (${id}) is not valid, it must be a valid integer`);
    }

    id = Math.abs(id);

    let ret: string = '';
    const seed: string = this.getSeed();
    const radix: number = seed.length;

    while (true) {
      const r: number = id % radix;
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
  public decode(hash: string): number {
    hash = String(hash);

    if (!CHARS_TESTER.test(hash)) {
      throw new Error(
        `The given hash (${hash}) is not valid, it must be an
         alphanumeric string with at least 1 character`
      );
    }

    let ret: number = 0;
    const seed: string = this.getSeed();
    const radix: number = seed.length;

    for (let i: number = 0, l: number = hash.length; i < l; i++) {
      ret += seed.indexOf(hash.substr(i, 1)) * Math.pow(radix, l - i - 1);
    }

    if (isNaN(ret)) {
      throw new Error(`Unknown error: Can not decode '${hash}'`);
    }

    return ret;
  }
}
