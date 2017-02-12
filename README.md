yag-id-hash
=====

[![License](https://img.shields.io/badge/license-BSD%203--Clause-green.svg?style=flat-square)](https://raw.githubusercontent.com/yasselavila/id-hash/master/LICENSE.txt)
[![GitHub tag](https://img.shields.io/github/tag/yasselavila/id-hash.svg?style=flat-square)](https://github.com/yasselavila/id-hash/releases)
[![Travis](https://img.shields.io/travis/yasselavila/id-hash.svg?style=flat-square)](https://travis-ci.org/yasselavila/id-hash)

Copyright (c) 2016-2017, [Yassel Avila Gil](http://yasselavila.com). See [LICENSE](./LICENSE.txt) (BSD 3-Clause).

## Documentation

### What is this?

A reversible base62 ID obfuscator.

### Installation

`yag-id-hash` is available [Node.js](http://npmjs.org) on [npm](http://npmjs.org). To install it, type:

    $ npm install yag-id-hash

### Usage

TypeScript:
```ts
import IdHash from 'yag-id-hash';

let hasher: IdHash = new IdHash();

// You can set you own seed from config, to keep your hashing uniform
//hasher.setSeed('J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX');

// Or you can generate a new one
//hasher.setSeed(IdHash.generateSeed());

// Get the seed, default is: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
console.log('Seed: %s', hasher.getSeed());

for (let id: number = 1001; id <= 1005; id++) {
  let encoded: string = hasher.encode(id);
  let decoded: number = hasher.decode(encoded);

  console.log('Encoded %s=%s / Decoded: %s=%s', id, encoded, encoded, decoded);
}

// Encoded 1001=RT / Decoded: RT=1001
// Encoded 1002=RW / Decoded: RW=1002
// Encoded 1003=RC / Decoded: RC=1003
// Encoded 1004=Rd / Decoded: Rd=1004
// Encoded 1005=RK / Decoded: RK=1005
```

JavaScript (CommonJS):
```js
var IdHash = require('yag-id-hash').IdHash;

var hasher = new IdHash();

// You can set you own seed from config, to keep your hashing uniform
//hasher.setSeed('J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX');

// Or you can generate a new one
//hasher.setSeed(IdHash.generateSeed());

// Get the seed, default is: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
console.log('Seed: %s', hasher.getSeed());

for (var id = 101; id <= 150; id++) {
  var encoded = hasher.encode(id);
  var decoded = hasher.decode(encoded);

  console.log('Encoded %s=%s / Decoded: %s=%s', id, encoded, encoded, decoded);
}
```
