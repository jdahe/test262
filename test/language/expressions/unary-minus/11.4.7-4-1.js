// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.7-4-1
description: -"" should be zero
includes: [runTestCase.js]
---*/

function testcase() {
  return -"" === 0;
 }
runTestCase(testcase);
