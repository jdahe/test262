// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-8-s
description: Strict Mode - SyntaxError is thrown when deleting a function object
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var funObj = function () { };

        try {
            eval("delete funObj;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
