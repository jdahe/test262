// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-b-10
description: >
    Array.prototype.every - deleting property of prototype causes
    prototype index property not to be visited on an Array-like Object
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return idx !== 1;
        }
        var arr = { 2: 2, length: 20 };

        Object.defineProperty(arr, "0", {
            get: function () {
                delete Object.prototype[1];
                return 0;
            },
            configurable: true
        });

        try {
            Object.prototype[1] = 1;
            return Array.prototype.every.call(arr, callbackfn) && accessed;
        } finally {
            delete Object.prototype[1];
        }
    }
runTestCase(testcase);
