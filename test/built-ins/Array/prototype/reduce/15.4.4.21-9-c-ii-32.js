// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-32
description: Array.prototype.reduce - RegExp object can be used as accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var objRegExp = new RegExp();

        var accessed = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objRegExp;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduce.call(obj, callbackfn, objRegExp) === true && accessed;
    }
runTestCase(testcase);
