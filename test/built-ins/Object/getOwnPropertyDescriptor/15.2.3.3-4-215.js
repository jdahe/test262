// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-215
description: >
    Object.getOwnPropertyDescriptor returns accessor desc for
    accessors on built-ins (RegExp.prototype.multiline)
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, "multiline");

  if (desc.hasOwnProperty('writable') === false &&
      desc.enumerable === false &&
      desc.configurable === true &&
      typeof desc.get === 'function' &&
      desc.set === undefined) {
    return true;
  }
 }
runTestCase(testcase);
