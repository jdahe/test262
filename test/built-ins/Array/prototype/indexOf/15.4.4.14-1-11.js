// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-11
description: Array.prototype.indexOf applied to Date object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new Date();
        obj.length = 2;
        obj[1] = true;

        return Array.prototype.indexOf.call(obj, true) === 1;
    }
runTestCase(testcase);
