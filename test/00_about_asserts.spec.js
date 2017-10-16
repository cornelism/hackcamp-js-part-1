var assert = require('assert');

describe("About Asserts (topics/00_about_asserts.js)", function() {
  it("ok", function() {
    assert(true === true, 'what will satisfy the ok assertion?')
  });

  it("not ok", function() {
    assert(false === false, 'what is a false value?');
  });

  it("equal", function() {
    assert.equal(2, 1 + 1, 'what will satisfy the equal assertion?');
  });
});
