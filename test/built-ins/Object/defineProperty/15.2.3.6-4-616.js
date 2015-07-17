// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-616
description: >
    ES5 Attributes - all attributes in Array.prototype.forEach are
    correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Array.prototype, "forEach");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Array.prototype.forEach;

        try {
            Array.prototype.forEach = "2010";

            var isWritable = (Array.prototype.forEach === "2010");

            var isEnumerable = false;

            for (var prop in Array.prototype) {
                if (prop === "forEach") {
                    isEnumerable = true;
                }
            }

            delete Array.prototype.forEach;

            var isConfigurable = !Array.prototype.hasOwnProperty("forEach");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Array.prototype, "forEach", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
