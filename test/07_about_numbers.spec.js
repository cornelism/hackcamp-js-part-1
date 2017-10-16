var assert = require('assert');

describe("About Numbers (topics/07_about_numbers.js)", function () {

    it("types", function () {
        var typeOfIntegers = typeof (6);
        var typeOfFloats = typeof (3.14159);
        assert.equal(true, typeOfIntegers === typeOfFloats, 'are ints and floats the same type?');
        assert.equal("number", typeOfIntegers, 'what is the javascript numeric type?');
        assert.equal(1, 1.0, 'what is a integer number equivalent to 1.0?');
    });

    it("NaN", function () {
        var resultOfFailedOperations = 7 / 'apple';
        assert.equal(true, isNaN(resultOfFailedOperations), 'what will satisfy the equals assertion?');
        assert.equal(false, resultOfFailedOperations == NaN, 'is NaN == NaN?');
    });

});
