/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */

import { expect } from 'chai';
import { decode, encode } from './idhash.functions';

const PREDEFINED_SEED: string = 'J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX';

describe('Functions', () => {
  describe('encode()', () => {
    it('encode(1000) using default seed should be equal to "QI"', () => {
      const encoded = encode(1000);
      expect(encoded).to.equal('QI');
    });

    it('encode(1000) using alternative seed should be equal to "RG"', () => {
      const encoded = encode(1000, PREDEFINED_SEED);
      expect(encoded).to.equal('RG');
    });
  });

  describe('decode()', () => {
    it('decode("QI") using default seed should be equal to "1000"', () => {
      const decoded = decode('QI');
      expect(decoded).to.equal(1000);
    });

    it('decode("RG") using alternative seed should be equal to "1000"', () => {
      const decoded = decode('RG', PREDEFINED_SEED);
      expect(decoded).to.equal(1000);
    });
  });
});
