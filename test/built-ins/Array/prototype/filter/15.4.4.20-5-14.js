// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-14
description: Array.prototype.filter - the Math object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === Math;
        }

        var newArr = [11].filter(callbackfn, Math);

        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
