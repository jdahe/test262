// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.7.2-4-s
description: >
    Strict Mode - TypeError is thrown if LeftHandSide is a reference
    to an accessor property with no setter
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var _8_7_2_4 = {};
        var _8_7_2_4_bValue = 1;
        Object.defineProperty(_8_7_2_4, "b", {
            get: function () { return _8_7_2_4_bValue; }
        });

        try {
            _8_7_2_4.b = 11;
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
