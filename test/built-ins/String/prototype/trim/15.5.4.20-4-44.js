// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-44
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Dabc)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("\u000Dabc".trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);
