var assert = require('assert');

describe("About Functions And Closure (topics/13_about_functions_and_closure.js)", function () {

  it("defining functions directly", function () {
    var result = "a";

    function changeResult() {
      // the ability to access a variables defined in the same scope as the function is known as 'closure'
      result = "b";
    };
    changeResult();
    assert.equal(__, result, 'what is the value of result?');
  });

  it("assigning functions to variables", function () {
    var triple = function (input) {
      return input * 3;
    };
    assert.equal(__, triple(4), 'what is triple 4?');
  });

  it("arguments array", function () {
    var add = function () {
      var total = 0;
      for (var i = 0; i < arguments.length; i++) {
        // complete the implementation of this method so that it returns the sum of its arguments
        // __
      }
      // __
    };

    assert.equal(15, add(1, 2, 3, 4, 5), "add 1,2,3,4,5");
    assert.equal(9, add(4, 7, -2), "add 4,7,-2");
  });

  it("using call to invoke function", function () {
    var invokee = function (message) {
      return this + message;
    };

    //another way to invoke a function is to use the call function which allows
    //you to set the callers "this" context.  Call can take any number of arguments:
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
    var result = invokee.call("I am this!", " Where did it come from?");

    assert.equal(__, result, "what will the value of invokee's this be?");
  });

  it("using apply to invoke function", function () {
    var invokee = function (message1, message2) {
      return this + message1 + message2;
    };

    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and the second is the array of arguments to be passed into the called function.
    var result = invokee.apply("I am this!", [" I am arg1", " I am arg2"]);

    assert.equal(__, result, "what will the value of invokee's this be?");
  });
});
