// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-3-17
description: >
    Array.prototype.every - 'length' is a string containing a number
    with leading zeros
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var obj = { 0: 12, 1: 11, 2: 9, length: "0002.00" };

        return Array.prototype.every.call(obj, callbackfn1) &&
            !Array.prototype.every.call(obj, callbackfn2);
    }
runTestCase(testcase);
