/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */
import { IdHash } from './idhash.class';
/**
 * Encode the given ID
 */
export function encode(id, seed) {
    const hasher = new IdHash(seed);
    return hasher.encode(id);
}
/**
 * Decode the given hash
 */
export function decode(hash, seed) {
    const hasher = new IdHash(seed);
    return hasher.decode(hash);
}
//# sourceMappingURL=idhash.functions.js.map