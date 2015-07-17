// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-12
description: Array.prototype.map - Boolean object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objBoolean = new Boolean();

        function callbackfn(val, idx, obj) {
            return this === objBoolean;
        }

        var testResult = [11].map(callbackfn, objBoolean);
        return testResult[0] === true;
    }
runTestCase(testcase);
