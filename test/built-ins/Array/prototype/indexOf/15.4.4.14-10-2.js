// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-10-2
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 and does not
    access any other properties
includes: [runTestCase.js]
---*/

function testcase() {
  var accessed = false;
  var f = {length: 0};
  Object.defineProperty(f,"0",{get: function () {accessed = true; return 1;}});

  
  var i = Array.prototype.indexOf.call(f,1);
  
  if (i === -1 && accessed==false) {
    return true;
  }
 }
runTestCase(testcase);
