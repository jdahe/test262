// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-3-25
description: >
    Array.prototype.reduce - value of 'length' is a negative
    non-integer
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return (curVal === 11 && idx === 1);
        }

        var obj = {
            1: 11,
            2: 9,
            length: -4294967294.5
        };

        return Array.prototype.reduce.call(obj, callbackfn, 1) === 1;
    }
runTestCase(testcase);
