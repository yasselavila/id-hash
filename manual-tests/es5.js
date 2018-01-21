var IdHash = require('../dist').IdHash;

var PREDEFINED_SEED = 'vMtyxn0apz25ViNZBOJ3SjU8Pgcq6ELGTWCdKfwRe47brk1lIoYA9suhDmFHQX';

var hasher = new IdHash();
hasher.setSeed(PREDEFINED_SEED);

var m1 = 1000;
var r1_1 = hasher.encode(m1);
var r1_2 = hasher.decode(r1_1);

console.log(m1, r1_1, ( r1_1 === 'Bp' )); // true
console.log(r1_1, r1_2, ( r1_2 === m1 )); // true
