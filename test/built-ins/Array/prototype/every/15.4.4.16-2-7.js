// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-7
description: >
    Array.prototype.every applied to Array-like object, 'length' is an
    own accessor property
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var obj = { };

        Object.defineProperty(obj, "length", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        obj[0] = 12;
        obj[1] = 11;
        obj[2] = 9;

        return Array.prototype.every.call(obj, callbackfn1) &&
            !Array.prototype.every.call(obj, callbackfn2);
    }
runTestCase(testcase);
