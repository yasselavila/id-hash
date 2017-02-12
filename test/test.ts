/**
 * yag-id-hash
 *
 * @copyright Copyright (c) 2016-2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/id-hash
 */

import { expect } from 'chai';

import IdHash from '../src';

describe('With default seed', () => {
  const defaultSeed: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  it(`Seed must be valid: "${defaultSeed}"`, () => {
    let hasher: IdHash = new IdHash();

    const result: string = hasher.getSeed();
    expect(result).to.equal(defaultSeed);
  });

  it(`Using the default seed ("${defaultSeed}"); "1000" should be equal to "QI"`, () => {
    let hasher: IdHash = new IdHash();

    const result: string = hasher.encode(1000);
    expect(result).to.equal('QI');
  });
});

describe('With a different seed', () => {
  const seed: string = 'J3ViNZBOGTWCdKfwReSjU8Pgcq6ELvMtyxn0apz2547brk1lIoYA9suhDmFHQX';

  it(`Seed must be valid: "${seed}"`, () => {
    let hasher: IdHash = new IdHash();
    hasher.setSeed(seed);

    const result: string = hasher.getSeed();
    expect(result).to.equal(seed);
  });

  it(`Using "${seed}" as seed; "1000" should be equal to "RG"`, () => {
    let hasher: IdHash = new IdHash();
    hasher.setSeed(seed);

    const result: string = hasher.encode(1000);
    expect(result).to.equal('RG');
  });
});