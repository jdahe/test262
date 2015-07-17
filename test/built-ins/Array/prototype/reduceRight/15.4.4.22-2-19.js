// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-19
description: >
    Array.prototype.reduceRight applied to Function object, which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var fun = function (a, b) {
            return a + b;
        };
        fun[0] = 12;
        fun[1] = 11;
        fun[2] = 9;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        return Array.prototype.reduceRight.call(fun, callbackfn, 11) && accessed;
    }
runTestCase(testcase);
