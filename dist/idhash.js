/**
 * yag-id-hash
 *
 * @copyright Copyright (c) 2016-2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/id-hash
 */
"use strict";
/**
 * Characters to be used bu seed generator
 */
var defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * Regular expression to test seeds
 */
var charsTester = /^[a-zA-Z0-9]+$/;
/**
 * IDs hasher
 */
var IdHash = (function () {
    /**
     * Constructor
     */
    function IdHash(seed) {
        if (seed) {
            this.setSeed(seed);
        }
    }
    /**
     * Generates a random seed
     */
    IdHash.generateSeed = function () {
        var chars = defaultChars.split('');
        /* Shuffle */
        chars.sort(function () { return 0.5 - Math.random(); });
        return chars.join('');
    };
    /**
     * Get seed
     */
    IdHash.prototype.getSeed = function () {
        if (!this.seed) {
            /* Clone defaultChars */
            this.seed = String(defaultChars);
        }
        return this.seed;
    };
    /**
     * Set seed
     */
    IdHash.prototype.setSeed = function (seed) {
        seed = String(seed).substring(0, 62);
        if ((62 != seed.length) || !charsTester.test(seed)) {
            throw new Error('The given seed is not valid, it must be an ' +
                'alphanumeric string with at least 62 characters');
        }
        this.seed = seed;
        return this;
    };
    /**
     * Encode the given ID
     */
    IdHash.prototype.encode = function (id) {
        if ('number' != typeof id) {
            id = parseInt(String(id), 10);
        }
        if (isNaN(id)) {
            throw new Error('The given ID is not valid, it must be a number');
        }
        id = Math.abs(id);
        var ret = '';
        var seed = this.getSeed();
        var radix = seed.length;
        while (true) {
            var r = id % radix;
            ret = seed.substr(r, 1) + ret;
            id = Math.ceil((id - r) / radix);
            if (0 == id) {
                break;
            }
        }
        return ret;
    };
    /**
     * Decode the given hash
     */
    IdHash.prototype.decode = function (hash) {
        hash = String(hash);
        if (!charsTester.test(hash)) {
            throw new Error('The given hash is not valid, it must be an ' +
                'alphanumeric string with at least 1 character');
        }
        var ret = 0;
        var seed = this.getSeed();
        var radix = seed.length;
        for (var i = 0, l = hash.length; i < l; i++) {
            ret += seed.indexOf(hash.substr(i, 1)) * Math.pow(radix, (l - i - 1));
        }
        if (isNaN(ret)) {
            throw new Error("Unknown error: Can not decode '" + hash + "'");
        }
        return ret;
    };
    return IdHash;
}());
exports.IdHash = IdHash;
//# sourceMappingURL=idhash.js.map