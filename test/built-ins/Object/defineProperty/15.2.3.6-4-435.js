// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-435
description: >
    ES5 Attributes - fail to update [[Get]] attribute of accessor
    property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is false) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: false
        });

        var result1 = typeof obj.prop === "undefined";
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                get: getFunc
            });

            return false;
        } catch (e) {
            var result2 = typeof obj.prop === "undefined";
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            return result1 && result2 && typeof desc1.get === "undefined" && typeof desc2.get === "undefined" && e instanceof TypeError;
        }
    }
runTestCase(testcase);
