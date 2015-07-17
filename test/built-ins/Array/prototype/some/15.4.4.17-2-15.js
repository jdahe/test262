// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-15
description: Array.prototype.some - 'length' is property of the global object
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 9;
            fnGlobalObject()[1] = 11;
            fnGlobalObject()[2] = 12;
            fnGlobalObject().length = 2;
            return Array.prototype.some.call(fnGlobalObject(), callbackfn1) &&
                !Array.prototype.some.call(fnGlobalObject(), callbackfn2);
        } finally {
            delete fnGlobalObject()[0];
            delete fnGlobalObject()[1];
            delete fnGlobalObject()[2];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);
