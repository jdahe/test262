// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-3
description: >
    Function.prototype.bind - F can get own data property that
    overrides an inherited data property
includes: [runTestCase.js]
---*/

function testcase() {

        var foo = function () { };

        var obj = foo.bind({});

        try {
            Function.prototype.property = 3;
            obj.property = 12;
            return obj.property === 12;
        } finally {
            delete Function.prototype.property;
        }
    }
runTestCase(testcase);
