// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-ii-7
description: >
    Array.prototype.map - unhandled exceptions happened in callbackfn
    terminate iteration
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            if (idx > 0) {
                accessed = true;
            }
            if (idx === 0) {
                throw new Error("Exception occurred in callbackfn");
            }
        }

        var obj = { 0: 11, 4: 10, 10: 8, length: 20 };

        try {
            Array.prototype.map.call(obj, callbackfn);
            return false;
        } catch (ex) {
            return ex instanceof Error && !accessed;
        }
    }
runTestCase(testcase);
