// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.2-2-13
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (RangeError)
includes: [runTestCase.js]
---*/

function testcase() {
  if (Object.getPrototypeOf(RangeError) === Error) {
    return true;
  }
 }
runTestCase(testcase);
