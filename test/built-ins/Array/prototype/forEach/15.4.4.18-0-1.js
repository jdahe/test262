// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-0-1
description: Array.prototype.forEach must exist as a function
includes: [runTestCase.js]
---*/

function testcase() {
  var f = Array.prototype.forEach;
  if (typeof(f) === "function") {
    return true;
  }
 }
runTestCase(testcase);
