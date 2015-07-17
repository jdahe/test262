// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-3-22
description: >
    Array.prototype.map throws TypeError exception when 'length' is an
    object with toString and valueOf methods that don�t return
    primitive values
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = {
            1: 11,
            2: 12,

            length: {
                valueOf: function () {
                    return {};
                },
                toString: function () {
                    return {};
                }
            }
        };

        try {
            Array.prototype.map.call(obj, callbackfn);
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
