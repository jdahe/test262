// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-454
description: >
    ES5 Attributes - fail to update [[Set]] attribute of accessor
    property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is false, [[Configurable]] is false) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: false
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                set: setFunc
            });

            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            return typeof desc1.set === "undefined" && typeof desc2.set === "undefined" && e instanceof TypeError;
        }
    }
runTestCase(testcase);
