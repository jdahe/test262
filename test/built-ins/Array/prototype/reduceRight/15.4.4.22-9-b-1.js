// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-1
description: >
    Array.prototype.reduceRight returns initialvalue when Array is
    empty and initialValue is not present
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
  }

  var arr = new Array(10);
  
  if(arr.reduceRight(callbackfn,5) === 5)
    return true;  
 }
runTestCase(testcase);
