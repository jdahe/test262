// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-11
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property that overrides an inherited data property on an
    Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];
        try {
            Array.prototype[0] = false;
            Object.defineProperty(arr, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

            return 0 === arr.lastIndexOf(true);
        } finally {
            delete Array.prototype[0]; 
        }
    }
runTestCase(testcase);
