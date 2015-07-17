// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-1-12
description: Array.prototype.every applied to RegExp object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return !(obj instanceof RegExp);
        }

        var obj = new RegExp();
        obj.length = 1;
        obj[0] = 1;

        return !Array.prototype.every.call(obj, callbackfn);
    }
runTestCase(testcase);
