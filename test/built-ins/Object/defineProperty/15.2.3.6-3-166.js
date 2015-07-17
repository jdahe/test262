// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-166
description: >
    Object.defineProperty - 'Attributes' is an Array object that uses
    Object's [[Get]] method to access the 'writable' property  (8.10.5
    step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var arrObj = [1, 2, 3];

        arrObj.writable = true;

        Object.defineProperty(obj, "property", arrObj);

        var beforeWrite = obj.hasOwnProperty("property");

        obj.property = "isWritable";

        var afterWrite = (obj.property === "isWritable");

        return beforeWrite === true && afterWrite === true;
    }
runTestCase(testcase);
