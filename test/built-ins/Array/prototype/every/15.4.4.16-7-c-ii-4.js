// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-4
description: >
    Array.prototype.every - k values are passed in ascending numeric
    order
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1, 2, 3, 4, 5];
        var lastIdx = 0;
        var called = 0;
        function callbackfn(val, idx, o) {
            called++;
            if (lastIdx !== idx) {
                return false;
            } else {
                lastIdx++;
                return true;
            }
        }

        return arr.every(callbackfn) &&  arr.length === called;
    }
runTestCase(testcase);
