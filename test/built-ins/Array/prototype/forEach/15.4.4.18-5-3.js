// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-3
description: Array.prototype.forEach - thisArg is Array
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  var a = new Array();
  a.res = true;
  var result;
  function callbackfn(val, idx, obj)
  {
    result = this.res;
  }

  var arr = [1];
  arr.forEach(callbackfn,a)
  if( result === true)
    return true;    

 }
runTestCase(testcase);
