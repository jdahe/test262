// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.2-4-11
description: >
    [[Construct]] - length of parameters of 'target' is 1, length of
    'boundArgs' is 0, length of 'ExtraArgs' is 2
includes: [runTestCase.js]
---*/

function testcase() {
        var func = function (x) {
            return new Boolean(arguments.length === 2 && x === 1 && arguments[1] === 2 && arguments[0] === 1);
        };

        var NewFunc = Function.prototype.bind.call(func, {});

        var newInstance = new NewFunc(1, 2);

        return newInstance.valueOf() === true;
    }
runTestCase(testcase);
