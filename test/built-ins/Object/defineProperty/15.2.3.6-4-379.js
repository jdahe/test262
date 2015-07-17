// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-379
description: >
    ES5 Attributes - fail to update [[Enumerable]] attribute of data
    property ([[Writable]] is false, [[Enumerable]] is false,
    [[Configurable]] is false) to different value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: false,
            enumerable: false,
            configurable: false
        });
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        try {
            Object.defineProperty(obj, "prop", {
                enumerable: true
            });

            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

            return propertyDefineCorrect && desc1.enumerable === false && obj.prop === 2010 && desc2.enumerable === false && e instanceof TypeError;
        }
    }
runTestCase(testcase);
