// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-2
description: >
    Array.prototype.reduceRight - added properties in step 2 are
    visible here
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 2 && curVal === "2") {
                testResult = true;
            }
        }

        var obj = {};

        Object.defineProperty(obj, "length", {
            get: function () {
                obj[2] = "2";
                return 3;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, callbackfn, "initialValue");

        return testResult;
    }
runTestCase(testcase);
