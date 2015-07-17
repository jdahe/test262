// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-10
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is positive number)
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        return [0, targetObj, 2].indexOf(targetObj, 2) === -1 &&
            [0, 1, targetObj].indexOf(targetObj, 2) === 2;
    }
runTestCase(testcase);
