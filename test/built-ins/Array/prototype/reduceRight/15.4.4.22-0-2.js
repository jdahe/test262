// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-0-2
description: Array.prototype.reduceRight.length must be 1
includes: [runTestCase.js]
---*/

function testcase() {
  if (Array.prototype.reduceRight.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
