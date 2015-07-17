// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-28-s
description: >
    Strict Mode - checking 'this' (FunctionExpression defined within a
    FunctionDeclaration inside strict mode)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
function f1() {
    var f = function () {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
return f1();
}
runTestCase(testcase);
