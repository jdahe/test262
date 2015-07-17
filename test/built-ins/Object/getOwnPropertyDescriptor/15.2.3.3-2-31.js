// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-31
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 123.1234567)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "123.1234567": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 123.1234567);

        return desc.value === 1;
    }
runTestCase(testcase);
