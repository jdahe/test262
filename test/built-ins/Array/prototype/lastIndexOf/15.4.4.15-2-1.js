// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-1
description: >
    Array.prototype.lastIndexOf - 'length' is own data property on an
    Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { 1: null, 2: undefined, length: 2 };

        return Array.prototype.lastIndexOf.call(obj, null) === 1 &&
            Array.prototype.lastIndexOf.call(obj, undefined) === -1;
    }
runTestCase(testcase);
