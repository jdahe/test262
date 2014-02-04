/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.18/15.4.4.18-3-7.js
 * @description Array.prototype.forEach - value of 'length' is a number (value is negative)
 */


function testcase() {

        var testResult1 = false;

        function callbackfn(val, idx, obj) {
            testResult1 = (val > 10);
        }

        var obj = { 1: 11, 2: 9, length: -4294967294 };

        Array.prototype.forEach.call(obj, callbackfn);

        return !testResult1;
    }
runTestCase(testcase);
