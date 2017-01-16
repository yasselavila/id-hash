/**
 * yag-id-hash
 *
 * @copyright Copyright (c) 2016-2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/id-hash
 */

const defaultChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export class IdHash {
  /**
   * The seed
   */
  protected seed: string;

  /**
   * Generates a random seed
   */
  public static generateSeed(): string {
    let chars: string[] = defaultChars.split('');

    /* Shuffle */
    chars.sort(() => 0.5 - Math.random());

    return chars.join('');
  }

  /**
   * Constructor
   */
  public constructor(seed?: string) {
    if (seed) {
      this.setSeed(seed);
    }
  }

  /**
   * Get seed
   */
  public getSeed(): string {
    if (!this.seed) {
      this.seed = String(defaultChars);
    }

    return this.seed;
  }

  /**
   * Set seed
   */
  public setSeed(seed: string): IdHash {
    seed = String(seed).substring(0, 62);

    if (62 != seed.length) {
      throw new Error(
        'The given seed is not valid, it must be string with at least 62 characters'
      );
    }

    this.seed = seed;

    return this;
  }

  /**
   * Encode the given ID
   */
  public encode(id: number): string {
    if ('number' != typeof id) {
      id = parseInt(String(id), 10);
    }

    if (isNaN(id)) {
      throw new Error('The given ID is not valid, it must be a number');
    }

    id = Math.abs(id);

    let ret: string = '';
    let seed: string = this.getSeed();
    let radix: number = seed.length;

    while (true) {
      let r: number = id % radix;
      ret = seed.substr(r, 1) + ret;
      id = Math.ceil((id - r) / radix);

      if (0 == id) {
        break;
      }
    }

    return ret;
  }

  /**
   * Decode the given hash
   */
  public decode(hash: string): number|null {
    hash = String(hash);

    let ret: number|null = 0;
    let seed: string = this.getSeed();
    let radix: number = seed.length;

    for (let i: number = 0, l: number = hash.length; i < l; i++) {
      ret += seed.indexOf(hash.substr(i, 1)) * Math.pow(radix, (l - i - 1));
    }

    if (isNaN(ret)) {
      ret = null;
    }

    return ret;
  }
}
