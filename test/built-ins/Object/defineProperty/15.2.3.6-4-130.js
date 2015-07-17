// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-130
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', test RangeError exception is not thrown when the
    [[Value]] field of 'desc' is +0 (15.4.5.1 step 3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [0, 1];

        Object.defineProperty(arrObj, "length", {
            value: +0
        });
        return arrObj.length === 0;

    }
runTestCase(testcase);
