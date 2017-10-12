var assert = require('assert');

describe("About Numbers (topics/07_about_numbers.js)", function () {

    it("types", function () {
        var typeOfIntegers = typeof (6);
        var typeOfFloats = typeof (3.14159);
        assert.equal(__, typeOfIntegers === typeOfFloats, 'are ints and floats the same type?');
        assert.equal(__, typeOfIntegers, 'what is the javascript numeric type?');
        assert.equal(__, 1.0, 'what is a integer number equivalent to 1.0?');
    });

    it("NaN", function () {
        var resultOfFailedOperations = 7 / 'apple';
        assert.equal(__, isNaN(resultOfFailedOperations), 'what will satisfy the equals assertion?');
        assert.equal(__, resultOfFailedOperations == NaN, 'is NaN == NaN?');
    });

});
