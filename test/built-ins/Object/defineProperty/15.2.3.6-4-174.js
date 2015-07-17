// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-174
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Configurable]] attribute of
    own accessor property with large index named in 'O' can stop
    deleting index named properties (15.4.5.1 step 3.l.ii)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [0, 1];

        try {
            Object.defineProperty(arrObj, "1", {
                get: function () {
                    return 1;
                },
                configurable: false
            });

            Object.defineProperty(arrObj, "length", {
                value: 1
            });

            return false;
        } catch (e) {
            return e instanceof TypeError && arrObj.length === 2 && arrObj.hasOwnProperty("1");
        }
    }
runTestCase(testcase);
