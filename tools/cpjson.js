/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2020, Yassel Avila Gil (https://twitter.com/yasselavila)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */

const path = require('path');
const fs = require('fs');

const src = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json')));

const dist = {
  name: src.name,
  description: src.description,
  version: src.version,
  license: src.license,
  engines: src.engines,
  homepage: src.homepage,
  author: src.author,
  repository: src.repository,
  keywords: src.keywords,
  es2015: src.es2015,
  main: 'index.js',
  typings: 'index.d.ts'
};

fs.writeFileSync(
  path.resolve(__dirname, '..', 'dist', 'package.json'),
  JSON.stringify(dist, null, 2) + '\n'
);
