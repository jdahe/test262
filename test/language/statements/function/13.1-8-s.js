// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 13.1; 
    It is a SyntaxError if any Identifier value occurs more than once within a FormalParameterList of a strict mode
    FunctionDeclaration or FunctionExpression.
es5id: 13.1-8-s
description: >
    Strict Mode - SyntaxError is thrown if a function is created in
    'strict mode' using a FunctionExpression and the function has two
    identical parameters
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var _13_1_8_fun = function (param, param) { };");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
