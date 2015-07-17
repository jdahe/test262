// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-37
description: >
    Array.prototype.reduce - the global object can be used as
    accumulator
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var accessed = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === fnGlobalObject();
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduce.call(obj, callbackfn, fnGlobalObject()) === true && accessed;
    }
runTestCase(testcase);
