// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-13
description: >
    Array.prototype.some - return value of callbackfn is an empty
    string
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return "";
        }

        return ![11].some(callbackfn) && accessed;
    }
runTestCase(testcase);
