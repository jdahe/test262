// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.1-4-12
description: >
    [[Call]] - length of parameters of 'target' is 1, length of
    'boundArgs' is 0, length of 'ExtraArgs' is 2, and with 'boundThis'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop: "abc" };

        var func = function (x) {
            return this === obj && x === 1 && arguments[1] === 2 &&
                arguments[0] === 1 && arguments.length === 2 && this.prop === "abc";
        };

        var newFunc = Function.prototype.bind.call(func, obj);

        return newFunc(1, 2);
    }
runTestCase(testcase);
