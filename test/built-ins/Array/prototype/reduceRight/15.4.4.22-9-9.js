// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-9
description: >
    Array.prototype.reduceRight - modifications to length will change
    number of iterations
includes: [runTestCase.js]
---*/

function testcase() {
        var called = 0;
        function callbackfn(preVal, val, idx, obj) {
            called++;
        }

        var arr = [0, 1, 2, 3];
        Object.defineProperty(arr, "4", {
            get: function () {
                arr.length = 2;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn, "initialValue");

        return called === 3;
    }
runTestCase(testcase);
