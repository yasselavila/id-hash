"use strict";
/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
var idhash_class_1 = require("./idhash.class");
/**
 * Encode the given ID
 */
function encode(id, seed) {
    var hasher = new idhash_class_1.IdHash(seed);
    return hasher.encode(id);
}
exports.encode = encode;
/**
 * Decode the given hash
 */
function decode(hash, seed) {
    var hasher = new idhash_class_1.IdHash(seed);
    return hasher.decode(hash);
}
exports.decode = decode;
//# sourceMappingURL=idhash.functions.js.map