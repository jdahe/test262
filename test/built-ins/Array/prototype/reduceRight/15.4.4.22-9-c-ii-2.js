// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-2
description: >
    Array.prototype.reduceRight - callbackfn called with correct
    parameters (initialvalue passed)
includes: [runTestCase.js]
---*/

function testcase() {
        var bParCorrect = false;
        var arr = [0, 1, true, null, new Object(), "five"];
        var initialValue = 5.5;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === obj.length - 1 && obj[idx] === curVal && prevVal === initialValue)
                return curVal;
            else if (idx + 1 < obj.length && obj[idx] === curVal && obj[idx + 1] === prevVal)
                return curVal;
            else
                return false;
        }
        return arr.reduceRight(callbackfn, initialValue) === 0;
    }
runTestCase(testcase);
