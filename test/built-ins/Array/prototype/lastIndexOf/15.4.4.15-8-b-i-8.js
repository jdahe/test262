// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-8
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    data property on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.prototype[0] = true;
            Object.prototype[1] = false;
            Object.prototype[2] = "true";
            return 0 === Array.prototype.lastIndexOf.call({ length: 3 }, true) &&
                1 === Array.prototype.lastIndexOf.call({ length: 3 }, false) &&
                2 === Array.prototype.lastIndexOf.call({ length: 3 }, "true");
        } finally {
            delete Object.prototype[0];
            delete Object.prototype[1];
            delete Object.prototype[2];
        }
    }
runTestCase(testcase);
