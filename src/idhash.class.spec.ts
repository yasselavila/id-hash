/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */

import { expect } from 'chai';
import { IdHash } from './idhash.class';

const DEFAULT_SEED: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const PREDEFINED_SEED: string = 'J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX';

describe('IdHash class', () => {
  describe(`Using default seed (${DEFAULT_SEED})`, () => {
    it('Seed must be valid', () => {
      const hasher: IdHash = new IdHash();
      const seed: string = hasher.getSeed();

      expect(seed).to.equal(DEFAULT_SEED);
    });

    it('encode(1000) should be equal to "QI"', () => {
      const hasher: IdHash = new IdHash();
      const encoded: string = hasher.encode(1000);

      expect(encoded).to.equal('QI');
    });

    it('decode("QI") should be equal to "1000"', () => {
      const hasher: IdHash = new IdHash();
      const encoded: string = hasher.encode(1000);
      const decoded: number = hasher.decode(encoded);

      expect(decoded).to.equal(1000);
    });
  });

  describe(`Using a predefined seed (${PREDEFINED_SEED})`, () => {
    it('Seed must be valid', () => {
      const hasher: IdHash = new IdHash(PREDEFINED_SEED);
      const seed: string = hasher.getSeed();

      expect(seed).to.equal(PREDEFINED_SEED);
    });

    it('encode(1000) should be equal to "RG"', () => {
      /* Manually using 'setSeed()' on purpose */
      const hasher: IdHash = new IdHash();
      hasher.setSeed(PREDEFINED_SEED);

      const encoded: string = hasher.encode(1000);

      expect(encoded).to.equal('RG');
    });

    it('decode("RG") should be equal to "1000"', () => {
      const hasher: IdHash = new IdHash(PREDEFINED_SEED);
      const encoded: string = hasher.encode(1000);
      const decoded: number = hasher.decode(encoded);

      expect(decoded).to.equal(1000);
    });
  });

  describe('Random seeds', () => {
    it('Via constructor', () => {
      const hasher: IdHash = new IdHash(true);
      const test: boolean = DEFAULT_SEED === hasher.getSeed();

      expect(test).to.equal(false);
    });

    it('Using useRandomSeed()', () => {
      const hasher: IdHash = new IdHash(true);
      hasher.useRandomSeed();

      const test: boolean = DEFAULT_SEED === hasher.getSeed();

      expect(test).to.equal(false);
    });
  });
});
