// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-35
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is applied to
    string 'null'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "null": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, "null");

        return desc.value === 1;
    }
runTestCase(testcase);
