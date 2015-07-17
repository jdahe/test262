// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-183
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is boundary value 2^32 - 2 (15.4.5.1 step
    4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, 4294967294, {
            value: 100
        });

        return arrObj.hasOwnProperty("4294967294") && arrObj.length === 4294967295 && arrObj[4294967294] === 100;
    }
runTestCase(testcase);
