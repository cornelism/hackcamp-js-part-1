var assert = require('assert');

describe("About Arrays (topics/09_about_arrays.js)", function () {

    it("array literal syntax and indexing", function () {
        var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
        assert.equal("cellar door", favouriteThings[0], 'what is in the first position of the array?');
        assert.equal(42, favouriteThings[1], 'what is in the second position of the array?');
        assert.equal(true, favouriteThings[2], 'what is in the third position of the array?');
    });

    it("array type", function () {
        assert.equal("object", typeof ([]), 'what is the type of an array?');
    });

    it("length", function () {
        var collection = ['a', 'b', 'c'];
        assert.equal(3, collection.length, 'what is the length of the collection array?');
    });

    it("splice", function () {
        var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        var workingWeek = daysOfWeek.splice(0, 5);
        assert.deepEqual(workingWeek,['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
        assert.deepEqual(daysOfWeek,['Saturday', 'Sunday'], 'what is the value of daysOfWeek?');
    });

    it("stack methods", function () {
        var stack = [];
        stack.push("first");
        stack.push("second");

        assert.equal("second", stack.pop(), 'what will be the first value popped off the stack?');
        assert.equal("first", stack.pop(), 'what will be the second value popped off the stack?');
    });

    it("queue methods", function () {
        var queue = [];
        queue.push("first");
        queue.push("second");
        queue.unshift("third");

        assert.equal("third", queue.shift(), 'what will be shifted out first?');
        assert.equal("first", queue.shift(), 'what will be shifted out second?');
    });

});
