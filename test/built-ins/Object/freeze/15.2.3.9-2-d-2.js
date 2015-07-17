// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-2
description: Object.freeze - 'O' is an Array object
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [0, 1];

        Object.freeze(arrObj);

        return Object.isFrozen(arrObj);
    }
runTestCase(testcase);
