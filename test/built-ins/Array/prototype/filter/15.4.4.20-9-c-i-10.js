// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-10
description: >
    Array.prototype.filter - element to be retrieved is own accessor
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return idx === 2 && val === 12;
        }

        var arr = [];

        Object.defineProperty(arr, "2", {
            get: function () {
                return 12;
            },
            configurable: true
        });
        var newArr = arr.filter(callbackfn);

        return newArr.length === 1 && newArr[0] === 12;
    }
runTestCase(testcase);
