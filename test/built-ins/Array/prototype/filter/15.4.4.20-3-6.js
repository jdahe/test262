// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-3-6
description: >
    Array.prototype.filter - value of 'length' is a number (value is
    positive)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = { 1: 11, 2: 9, length: 2 };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 1 && newArr[0] === 11;
    }
runTestCase(testcase);
