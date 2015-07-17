// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-30-s
description: >
    Strict Mode - Function code of built-in Function constructor
    contains Use Strict Directive which appears at the start of the
    block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            var funObj = new Function("a", "'use strict'; eval('public = 1;');");
            funObj();
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
