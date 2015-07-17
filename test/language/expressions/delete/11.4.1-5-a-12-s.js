// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-12-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable of
    type Boolean
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var boolObj = new Boolean(false);

        try {
            eval("delete boolObj;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
