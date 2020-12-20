/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */
/**
 * Encode the given ID
 */
export declare function encode(id: number, seed?: string): string;
/**
 * Decode the given hash
 */
export declare function decode(hash: string, seed?: string): number;
