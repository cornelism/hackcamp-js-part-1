var assert = require('assert');

describe("About Regular Expressions (topics/16_about_regular_expressions.js)", function() {
  it("exec", function() {
      var numberFinder = /\d.*\d/;
      var results = numberFinder.exec("what if 6 turned out to be 9?");
      assert.deepEqual(results[0],'__', 'what is the value of results?');
  });

  it("test", function() {
      var containsSelect = /select/.test("  select * from users ");
      assert.equal(__, containsSelect, 'does the string provided contain "select"?');
  });

  it("match", function() {
      var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
      assert.deepEqual(matches,[__, __], 'what is the value of matches?');
  });

  it("replace", function() {
      var pie = "apple pie".replace("apple", "strawberry");
      assert.equal(__, pie, 'what is the value of pie?');

      pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) { // the second parameter can be a string or a function
          var map = {'6': 'six','9': 'nine'};
          return map[number];
      });
      assert.equal(__, pie, 'what is the value of pie?');
  });
});
