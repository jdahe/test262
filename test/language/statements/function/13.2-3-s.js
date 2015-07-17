// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-3-s
description: >
    StrictMode - Writing or reading from a property named 'arguments'
    of function objects is allowed under both strict and normal modes.
includes: [runTestCase.js]
---*/

function testcase() {
        var foo = function () {
            this.arguments = 12;
        } 
        var obj = new foo();
        return obj.arguments === 12;
    }
runTestCase(testcase);
