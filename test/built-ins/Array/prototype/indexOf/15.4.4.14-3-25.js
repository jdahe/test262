// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-25
description: >
    Array.prototype.indexOf - value of 'length' is a negative
    non-integer
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: true, 2: false, length: -4294967294.5 }; //length will be 0 finally

        return Array.prototype.indexOf.call(obj, true) === -1 &&
        Array.prototype.indexOf.call(obj, false) === -1;
    }
runTestCase(testcase);
