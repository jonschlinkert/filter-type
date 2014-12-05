/*!
 * filter-type <https://github.com/jonschlinkert/filter-type>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var filter = require('./');

var arr = [1, 'a', {aaa: 'bbb'}, 3, 'b', 'c', 7, ['foo', 'bar'], {ccc: 'ddd'}, function one(){}];

describe('filter', function () {
  it('should filter objects:', function () {
    filter(arr, 'object').should.eql([{aaa: 'bbb'}, {ccc: 'ddd'}]);
  });

  it('should filter arrays:', function () {
    filter(arr, 'array').should.eql([['foo', 'bar']]);
  });

  it('should filter numbers:', function () {
    filter(arr, 'number').should.eql([1, 3, 7]);
  });

  it('should filter strings:', function () {
    filter(arr, 'string').should.eql(['a', 'b', 'c']);
  });

  it('should filter functions:', function () {
    filter(arr, 'function').should.eql([function one(){}]);
  });
});
