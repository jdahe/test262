// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-50
description: >
    String.prototype.trim - 'this' is a Error Object that converts to
    a string
includes: [runTestCase.js]
---*/

function testcase() {
        var errObj = new Error("test");
        return String.prototype.trim.call(errObj) === "Error: test";
    }
runTestCase(testcase);
