// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-3
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (subclassed Array, length overridden to false (type conversion))
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = false;

  var callCnt = 0;
  function cb(){callCnt++}
  var i = f.forEach(cb);  
  if (callCnt === 0) {
    return true;
  }
 }
runTestCase(testcase);
