// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-3-6
description: >
    Object.keys - returns the standard built-in Array (instanceof
    Array)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var arr = Object.keys(obj);

        return arr instanceof Array;
    }
runTestCase(testcase);
