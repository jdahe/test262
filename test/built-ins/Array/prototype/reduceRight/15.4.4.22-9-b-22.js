// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-22
description: >
    Array.prototype.reduceRight - deleting own property causes deleted
    index property not to be visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            if (idx === 1) {
                testResult = false;
            }
        }

        var arr = [1, 2, 4];

        Object.defineProperty(arr, "1", {
            get: function () {
                return "6.99";
            },
            configurable: true
        });

        Object.defineProperty(arr, "2", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn, "initialValue");
        return testResult && accessed;
    }
runTestCase(testcase);
