// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-15
description: Array.prototype.reduce applied to the Arguments object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return ('[object Arguments]' === Object.prototype.toString.call(obj));
        }

        var obj = (function () {
            return arguments;
        }("a", "b"));

        return Array.prototype.reduce.call(obj, callbackfn, 1);
    }
runTestCase(testcase);
