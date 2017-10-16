var assert = require('assert');

describe("About Strings (topics/06_about_strings.js)", function() {
  it("delimiters", function() {
      var singleQuotedString = 'apple';
      var doubleQuotedString = "apple";
      assert.equal(true, singleQuotedString === doubleQuotedString, 'are the two strings equal?');
  });

  it("concatenation", function() {
      var fruit = "apple";
      var dish = "pie";
      assert.equal("apple pie", fruit + " " + dish, 'what is the value of fruit + " " + dish?');
  });

  it("character Type", function() {
      var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
      assert.equal("string", characterType, 'Javascript has no character type');
  });

  it("escape character", function() {
      var stringWithAnEscapedCharacter  = "\u0041pple";
      assert.equal("Apple", stringWithAnEscapedCharacter, 'what  is the value of stringWithAnEscapedCharacter?');
  });

  it("string.length", function() {
      var fruit = "apple";
      assert.equal(5, fruit.length, 'what is the value of fruit.length?');
  });

  it("slice", function() {
      var fruit = "apple pie";
      assert.equal("apple", fruit.slice(0,5), 'what is the value of fruit.slice(0,5)?');
  });
});
