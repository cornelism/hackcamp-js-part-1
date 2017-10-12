var assert = require('assert');

describe("About Assignment (topics/04_about_assignment.js)", function() {
  it("local variables", function() {
      var temp = __;
      assert.equal(temp, 1, "Assign a value to the variable temp");
  });

  it("global variables", function() {
      temp = 1; // Not using var is an example. Always use let/const in practise.
      assert.equal(window.__, temp, 'global variables are assigned to the window object');
  });
});