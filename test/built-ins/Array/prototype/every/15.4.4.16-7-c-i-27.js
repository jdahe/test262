// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-i-27
description: >
    Array.prototype.every - This object is the Arguments object which
    implements its own property get method (number of arguments is
    greater than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;

        function callbackfn(val, idx, obj) {
            called++;
            if (idx < 2) {
                return val > 10;
            } else if (idx === 2) {
                return val < 10;
            } else {
                return false;
            }
        }

        var func = function (a, b) {
            return Array.prototype.every.call(arguments, callbackfn);
        };

        return func(11, 12, 9) && called === 3;
    }
runTestCase(testcase);
