yag-id-hash
=====

Version 0.0.1, Copyright (c) 2016-2017, [Yassel Avila Gil](http://yasselavila.com)

[![License](https://img.shields.io/badge/license-BSD%203--Clause-green.svg?style=flat-square)](https://raw.githubusercontent.com/yasselavila/id-hash/master/LICENSE.txt)
[![GitHub tag](https://img.shields.io/github/tag/yasselavila/id-hash.svg?style=flat-square)](https://github.com/yasselavila/id-hash/releases)
[![Travis](https://img.shields.io/travis/yasselavila/id-hash.svg?style=flat-square)](https://travis-ci.org/yasselavila/id-hash)

### What is this?

A reversible base62 ID obfuscator.

### License

[BSD 3 Clause](./LICENSE.txt)

## Documentation

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

for (let id: number = 101; id <= 150; id++) {
  let encoded: string = hasher.encode(id);
  let decoded: number = hasher.decode(encoded);

  console.log('%s: %s (%s)', id, encoded, decoded);
}
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

  console.log('%s: %s (%s)', id, encoded, decoded);
}
```
