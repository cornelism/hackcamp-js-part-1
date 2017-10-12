var assert = require('assert');

describe("About Arrays (topics/09_about_arrays.js)", function () {

    it("array literal syntax and indexing", function () {
        var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
        assert.equal(__, favouriteThings[0], 'what is in the first position of the array?');
        assert.equal(__, favouriteThings[1], 'what is in the second position of the array?');
        assert.equal(__, favouriteThings[2], 'what is in the third position of the array?');
    });

    it("array type", function () {
        assert.equal(__, typeof ([]), 'what is the type of an array?');
    });

    it("length", function () {
        var collection = ['a', 'b', 'c'];
        assert.equal(__, collection.length, 'what is the length of the collection array?');
    });

    it("splice", function () {
        var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        var workingWeek = daysOfWeek.splice(__, __);
        assert.deepEqual(workingWeek,[__], 'what is the value of workingWeek?');
        assert.deepEqual(daysOfWeek,[__], 'what is the value of daysOfWeek?');
    });

    it("stack methods", function () {
        var stack = [];
        stack.push("first");
        stack.push("second");

        assert.equal(__, stack.pop(), 'what will be the first value popped off the stack?');
        assert.equal(__, stack.pop(), 'what will be the second value popped off the stack?');
    });

    it("queue methods", function () {
        var queue = [];
        queue.push("first");
        queue.push("second");
        queue.unshift("third");

        assert.equal(__, queue.shift(), 'what will be shifted out first?');
        assert.equal(__, queue.shift(), 'what will be shifted out second?');
    });

});
