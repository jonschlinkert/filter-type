/*!
 * filter-type <https://github.com/jonschlinkert/filter-type>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var typeOf = require('kind-of');
var filter = require('arr-filter');

module.exports = function filterType(arr, type) {
  return filter(arr, function (ele) {
    return typeOf(ele) === type;
  });
};
