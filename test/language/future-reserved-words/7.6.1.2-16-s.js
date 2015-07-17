// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-16-s
description: >
    SyntaxError isn't thrown when '_implements' occurs
includes: [runTestCase.js]
---*/

function testcase() {
        var _implements = 1;
        return _implements === 1;
    }
runTestCase(testcase);
