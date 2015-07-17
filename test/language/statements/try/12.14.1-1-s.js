// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.14.1-1-s
description: >
    Strict Mode - SyntaxError is thrown if a TryStatement with a Catch
    occurs within strict code and the Identifier of the Catch
    production is eval
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("\
                   try {} catch (eval) { }\
            ");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
