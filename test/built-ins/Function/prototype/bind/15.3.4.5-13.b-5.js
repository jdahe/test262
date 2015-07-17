// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-13.b-5
description: >
    Function.prototype.bind, 'length' set to remaining number of
    expected args (target provided extra args)
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o, 42);
  if (bf.length === 0) {
    return true;
  }
 }
runTestCase(testcase);
