// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-35gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (Anonymous FunctionExpression defined within a
    FunctionExpression with a strict directive prologue)
flags: [noStrict]
---*/

var f1 = function () {
    "use strict";
    return (function () {
        return gNonStrict();
    })();
}

assert.throws(TypeError, function() {
    f1();
});

function gNonStrict() {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
