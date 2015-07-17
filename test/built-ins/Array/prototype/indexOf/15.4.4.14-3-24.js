// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-24
description: >
    Array.prototype.indexOf - value of 'length' is a positive
    non-integer, ensure truncation occurs in the proper direction
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 122: true, 123: false, length: 123.321 }; //length will be 123 finally

        return Array.prototype.indexOf.call(obj, true) === 122 &&
        Array.prototype.indexOf.call(obj, false) === -1;
    }
runTestCase(testcase);
