// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-0-4
description: Array.isArray return false if its argument is not an Array
includes: [runTestCase.js]
---*/

function testcase() {
  var b_num   = Array.isArray(42);
  var b_undef = Array.isArray(undefined);
  var b_bool  = Array.isArray(true);
  var b_str   = Array.isArray("abc");
  var b_obj   = Array.isArray({});
  var b_null  = Array.isArray(null);
  
  if (b_num === false &&
      b_undef === false &&
      b_bool === false &&
      b_str === false &&
      b_obj === false &&
      b_null === false) {
    return true;
  }
 }
runTestCase(testcase);
