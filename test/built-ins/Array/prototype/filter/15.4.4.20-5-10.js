// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-10
description: Array.prototype.filter - Array Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objArray = new Array(10);

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === objArray;
        }


        var newArr = [11].filter(callbackfn, objArray);

        return newArr[0] === 11 && accessed;
    }
runTestCase(testcase);
