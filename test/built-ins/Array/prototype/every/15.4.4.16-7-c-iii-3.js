// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-iii-3
description: >
    Array.prototype.every - return value of callbackfn is a boolean
    (value is false)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var obj = { 0: 11, length: 1 };

        function callbackfn(val, idx, obj) {
            accessed = true;
            return false;
        }

        return !Array.prototype.every.call(obj, callbackfn) && accessed;
    }
runTestCase(testcase);
