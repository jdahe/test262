// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-339-3
description: >
    Object.defineProperty - Updating named data property 'P' with
    attributes [[Writable]]: true, [[Enumerable]]: true,
    [[Configurable]]: false to an accessor property does not succeed,
    'A' is an Array object (8.12.9 - step 9.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = [];

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        });
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        function getFunc() {
            return 20;
        }
        try {
            Object.defineProperty(obj, "prop", {
                get: getFunc
            });
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            return propertyDefineCorrect && desc1.value === 2010 && obj.prop === 2010 &&
                typeof desc2.get === "undefined" && e instanceof TypeError;
        }
    }
runTestCase(testcase);
