// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-17
description: >
    Array.prototype.indexOf - 'length' is a string containing a number
    with leading zeros
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: true, 2: "0002.0", length: "0002.0" };

        return Array.prototype.indexOf.call(obj, true) === 1 &&
            Array.prototype.indexOf.call(obj, "0002.0") === -1;
    }
runTestCase(testcase);
