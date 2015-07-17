// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-107
description: >
    Object.defineProperties - value of 'configurable' property of
    'descObj' is the Argument object (8.10.5 step 4.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var func = function (a, b, c) {
            return arguments;
        };

        var args = func(1, true, "a");

        Object.defineProperties(obj, {
            property: {
                configurable: args
            }
        });
        var preCheck = obj.hasOwnProperty("property");
        delete obj.property;

        return preCheck && !obj.hasOwnProperty("property");

    }
runTestCase(testcase);
