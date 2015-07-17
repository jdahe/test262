// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-16
description: Array.prototype.reduce - non-indexed properties are not called
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var result1 = true;
        var result2 = true;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            if (curVal === 8) {
                result1 = false;
            }

            if (prevVal === 8) {
                result2 = false;
            }
        }

        var obj = { 0: 11, 10: 12, non_index_property: 8, length: 20 };

        Array.prototype.reduce.call(obj, callbackfn, 1);
        return result1 && result2 && accessed;
    }
runTestCase(testcase);
