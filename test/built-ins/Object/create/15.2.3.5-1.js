// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-1
description: Object.create throws TypeError if type of first param is not Object
includes: [runTestCase.js]
---*/

function testcase() {
    try {
      Object.create(0);
    }
    catch (e) {
      if (e instanceof TypeError) {
        return true;
      }
    }
 }
runTestCase(testcase);
