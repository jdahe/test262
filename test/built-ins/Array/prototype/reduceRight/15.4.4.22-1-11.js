// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-11
description: Array.prototype.reduceRight applied to Date object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new Date();
        obj.length = 1;
        obj[0] = 1;
        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj instanceof Date;
        }

        return Array.prototype.reduceRight.call(obj, callbackfn, 1) && accessed;
    }
runTestCase(testcase);
