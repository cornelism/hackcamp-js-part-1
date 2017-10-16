var assert = require('assert');

describe("About Scope (topics/15_about_scope.js)", function () {

  thisIsAGlobalVariable = 77;

  it("global variables", function () {
    assert.equal(77, thisIsAGlobalVariable, 'is thisIsAGlobalVariable defined in this scope?');
  });

  it("variables declared inside of a function", function () {
    var outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
      var innerVariable = "inner";
      assert.equal("outer", outerVariable, 'is outerVariable defined in this scope?');
      assert.equal("inner", innerVariable, 'is innerVariable defined in this scope?');
    })();

    assert.equal("outer", outerVariable, 'is outerVariable defined in this scope?');
    assert.equal("undefined", typeof (innerVariable), 'is innerVariable defined in this scope?');
  });

  it("global variables declared inside of a function", function () {
    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
      innerVariable = "inner";
      assert.equal("string", typeof (innerVariable), 'is innerVariable defined in this scope?');
    })();

    assert.equal("string", typeof(innerVariable), 'is innerVariable defined in this scope?');
  });
});
