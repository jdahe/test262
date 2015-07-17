// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.2.1.1.3-4-18-s
description: >
    Strict Mode - TypeError is thrown when changing the value of a
    Value Property of the Global Object under strict mode (undefined)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            undefined = 12;
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
