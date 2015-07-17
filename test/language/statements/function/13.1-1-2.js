// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1-1-2
description: >
    Duplicate identifier allowed in non-strict function expression
    parameter list
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase()
{
  try 
  {
    eval('(function foo(a,a){})');
    return true;
  }
  catch (e) { return false }
  }
runTestCase(testcase);
