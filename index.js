/*!
 * filter-type <https://github.com/jonschlinkert/filter-type>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var typeOf = require('kind-of');

module.exports = function filterType(arr, type) {
  var len = arr.length;
  var res = [];
  var i = 0;

  while (len--) {
    var ele = arr[i++];
    if (typeOf(ele) === type) {
      res.push(ele);
    }
  }
  return res;
};
