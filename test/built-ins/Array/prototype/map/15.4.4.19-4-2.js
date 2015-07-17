// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-2
description: >
    Array.prototype.map throws ReferenceError if callbackfn is
    unreferenced
includes: [runTestCase.js]
---*/

function testcase() {

  var arr = new Array(10);
  try {
    arr.map(foo);    
  }
  catch(e) {
    if(e instanceof ReferenceError)
      return true;  
  }

 }
runTestCase(testcase);
