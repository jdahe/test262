// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-12
description: >
    Array.prototype.lastIndexOf - deleting own property causes index
    property not to be visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [1, 2, 3, 4];

        Object.defineProperty(arr, "1", {
            get: function () {
                return "6.99";
            },
            configurable: true
        });

        Object.defineProperty(arr, "3", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

        return -1 === arr.lastIndexOf("6.99");
    }
runTestCase(testcase);
