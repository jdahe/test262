// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-2
description: >
    Array.prototype.reduce - callbackfn called with correct parameters
    (initialvalue passed)
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var bParCorrect = false;
  function callbackfn(prevVal, curVal, idx, obj)
  {
    if(idx === 0 && obj[idx] === curVal && prevVal === initialValue)
      return curVal;
    else if(idx > 0 && obj[idx] === curVal && obj[idx-1] === prevVal)
      return curVal;
    else
      return false;
  }

  var arr = [0,1,true,null,new Object(),"five"];
  var initialValue = 5.5;
  if( arr.reduce(callbackfn,initialValue) === "five") 
    return true;
 }
runTestCase(testcase);
