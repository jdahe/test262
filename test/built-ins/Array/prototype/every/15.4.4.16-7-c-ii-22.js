// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-22
description: >
    Array.prototype.every - callbackfn called with correct parameters
    (the index k is correct)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            if (val === 11) {
                return idx === 0;
            }

            if (val === 12) {
                return idx === 1;
            }

        }

        var obj = { 0: 11, 1: 12, length: 2 };

        return Array.prototype.every.call(obj, callbackfn) && accessed;
    }
runTestCase(testcase);
