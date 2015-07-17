// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-234
description: >
    Object.defineProperties - 'set' property of 'descObj' is own
    accessor property that overrides an inherited data property
    (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var data1 = "data";
        var data2 = "data";

        var proto = {};
        proto.set = function (value) {
            data1 = value;
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        Object.defineProperty(child, "set", {
            get: function () {
                return function (value) {
                    data2 = value;
                };
            }
        });

        var obj = {};

        Object.defineProperties(obj, {
            prop: child
        });
        obj.prop = "overrideData";

        return obj.hasOwnProperty("prop") && data2 === "overrideData" && data1 === "data";

    }
runTestCase(testcase);
