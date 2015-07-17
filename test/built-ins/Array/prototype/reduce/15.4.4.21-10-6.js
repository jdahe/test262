// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-10-6
description: >
    Array.prototype.reduce - subclassed array when initialvalue
    provided
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = [1,2,3,4];
  function foo() {}
  var f = new foo();
  
  function cb(prevVal, curVal, idx, obj){return prevVal + curVal;}
  if(f.reduce(cb,-1) === 9)
    return true;
 }
runTestCase(testcase);
