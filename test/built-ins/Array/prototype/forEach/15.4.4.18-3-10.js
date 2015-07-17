// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-3-10
description: >
    Array.prototype.forEach - value of 'length' is a number (value is
    NaN)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
        }

        var obj = { 0: 9, length: NaN };

        Array.prototype.forEach.call(obj, callbackfn);

        return !accessed;
    }
runTestCase(testcase);
