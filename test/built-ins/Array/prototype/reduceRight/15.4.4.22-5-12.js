// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-5-12
description: >
    Array.prototype.reduceRight - the exception is not thrown if
    exception was thrown by step 2
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 11, 1: 12 };

        Object.defineProperty(obj, "length", {
            get: function () {
                throw new SyntaxError();
            },
            configurable: true
        });

        try {
            Array.prototype.reduceRight.call(obj, function () { });
            return false;
        } catch (ex) {
            return !(ex instanceof TypeError);
        }
    }
runTestCase(testcase);
