/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */

import { expect } from 'chai';
import IdHashDefaultExport, { decode, encode, IdHash } from './index';

describe('Public API', () => {
  it('default', () => {
    expect(IdHashDefaultExport).to.be.an('function');
  });

  it('IdHash class', () => {
    expect(IdHash).to.be.an('function');
  });

  it('encode()', () => {
    expect(encode).to.be.an('function');
  });

  it('decode()', () => {
    expect(decode).to.be.an('function');
  });
});
