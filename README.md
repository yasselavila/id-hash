@yag/id-hash
=====

[![License](https://img.shields.io/badge/license-BSD%203--Clause-green.svg?style=flat-square)](https://raw.githubusercontent.com/yasselavila/js-id-hash/master/LICENSE.txt)
[![GitHub tag](https://img.shields.io/github/tag/yasselavila/js-id-hash.svg?style=flat-square)](https://github.com/yasselavila/js-id-hash/releases)
[![npm version](http://img.shields.io/npm/v/@yag/js-id-hash.svg?style=flat-square)](https://npmjs.org/package/@yag/id-hash)
[![Build Status](https://img.shields.io/travis/yasselavila/js-id-hash.svg?style=flat-square)](https://travis-ci.org/yasselavila/js-id-hash)
[![Coveralls github](https://img.shields.io/coveralls/github/yasselavila/js-id-hash/master.svg?style=flat-square)](https://coveralls.io/r/yasselavila/js-id-hash?branch=master)
[![Dependencies Status](https://david-dm.org/yasselavila/js-id-hash.svg?style=flat-square)](https://david-dm.org/yasselavila/js-id-hash)
[![Known Vulnerabilities](https://snyk.io/test/github/yasselavila/js-id-hash/badge.svg)](https://snyk.io/test/github/yasselavila/js-id-hash)

Copyright (c) 2016 - 2018, [Yassel Avila Gil](http://yasselavila.com).

### What is this?

A reversible base62 ID obfuscator.

> Idea taken from: [Auto-Incrementing IDs: Giving your Data Away](https://philsturgeon.uk/http/2015/09/03/auto-incrementing-to-destruction/).

> Code initially based on: [Tiny: A reversible base62 ID obfuscater](https://github.com/zackkitzmiller/tiny-php/).

### License

New BSD License. See [LICENSE.txt](./LICENSE.txt).

## Documentation

> This library includes type definitions, I :cupid: **TypeScript**.

### Installation

`@yag/id-hash` is available for [Node.js](http://npmjs.org) on [npm](http://npmjs.org). To install it, type:

```bash
npm install -P @yag/id-hash
```

### Usage

###### TypeScript:
```ts
import IdHash from '@yag/id-hash';

const hasher: IdHash = new IdHash();

// You can set your own seed from configuration, to keep your hashing uniform
// hasher.setSeed('J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX');

// Or you can generate a new one
// hasher.useRandomSeed(); // or...
// hasher.setSeed(IdHash.generateSeed());

// Get the seed, default is: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
console.log('Seed: %s', hasher.getSeed());

for (let id: number = 1001; id <= 1005; id++) {
  const encoded: string = hasher.encode(id);
  const decoded: number = hasher.decode(encoded);

  console.log('Encoded %s=%s / Decoded: %s=%s', id, encoded, encoded, decoded);
}

// Encoded 1001=RT / Decoded: RT=1001
// Encoded 1002=RW / Decoded: RW=1002
// Encoded 1003=RC / Decoded: RC=1003
// Encoded 1004=Rd / Decoded: Rd=1004
// Encoded 1005=RK / Decoded: RK=1005
```

###### JavaScript (ES5 / CommonJS):
```js
var IdHash = require('yag-id-hash').IdHash;

var hasher = new IdHash();

// You can set your own seed from configuration, to keep your hashing uniform
// hasher.setSeed('J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX');

// Or you can generate a new one
// hasher.setSeed(IdHash.generateSeed());

// Get the seed, default is: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
console.log('Seed: %s', hasher.getSeed());

for (var id = 101; id <= 150; id++) {
  var encoded = hasher.encode(id);
  var decoded = hasher.decode(encoded);

  console.log('Encoded %s=%s / Decoded: %s=%s', id, encoded, encoded, decoded);
}
```

###### Directly in (*legacy?*) browsers:
```html
<!-- 1kb gzipped / ~900 bytes if you use Brotli ;-) -->
<script src="/node_modules/@yag/id-hash/bundles/idhash.umd.bundle.js"></script>
<script>

  var PREDEFINED_SEED = 'vMtyxn0apz25ViNZBOJ3SjU8Pgcq6ELGTWCdKfwRe47brk1lIoYA9suhDmFHQX';
  var hasher = new IdHash(PREDEFINED_SEED);

  var m1 = 1000;
  var r1_1 = hasher.encode(m1);
  var r1_2 = hasher.decode(r1_1);

  alert("r1_1 === 'Bp': " + ( r1_1 === 'Bp' )); // true
  alert("r1_2 === 1000: " + ( r1_2 === m1 ));   // true

</script>
```
