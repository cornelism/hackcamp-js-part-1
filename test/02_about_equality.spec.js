var assert = require('assert');

describe("About Equality (topics/02_about_equality.js)", function() {
  it("numeric equality", function() {
      assert.equal(3 + __,  7, "");
  });

  it("string equality", function() {
      assert.equal("3" + __, "37", "concatenate the strings");
  });

  it("equality without type coercion", function() {
      assert(3 === __, 'what is exactly equal to 3?');
  });

  it("equality with type coercion", function() {
      assert(3 == "__", 'what string is equal to 3, with type coercion?');
  });

  it("string literals", function() {
      assert.equal(__, "frankenstein", "quote types are interchangable, but must match.");
      assert.equal(__, 'frankenstein', "quote types can use both single and double quotes.");
  });
});
