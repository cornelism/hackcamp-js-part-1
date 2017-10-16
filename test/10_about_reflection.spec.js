var assert = require('assert');

var A = function() {
    this.aprop = "A";
};

var B = function() {
    this.bprop = "B";
};

B.prototype = new A();

describe("About Reflection (topics/10_about_reflection.js)", function() {
  it("typeof", function() {
      assert.equal("object", typeof({}), 'what is the type of an empty object?');
      assert.equal("string", typeof('apple'), 'what is the type of a string?');
      assert.equal("number", typeof(-5), 'what is the type of -5?');
      assert.equal("boolean", typeof(false), 'what is the type of false?');
  });

  it("property enumeration", function() {
      var keys = [];
      var values = [];
      var person = {name: 'Amory Blaine', age: 102, unemployed: true};
      for(var propertyName in person) {
          keys.push(propertyName);
          values.push(person[propertyName]);
      }
      assert.deepEqual(keys,["name","age","unemployed"], 'what are the property names of the object?');
      assert.deepEqual(values,["Amory Blaine",102,true], 'what are the property values of the object?');
  });

  it("hasOwnProperty", function() {
      var b = new B();
      var propertyName;

      var keys = [];
      for (propertyName in b) {
          keys.push(propertyName);
      }
      assert.equal(2, keys.length, 'how many elements are in the keys array?');
      assert.deepEqual(["bprop", "aprop"], keys, 'what are the properties of the array?');

      // hasOwnProperty returns true if the parameter is a property directly on the object,
      // but not if it is a property accessible via the prototype chain.
      var ownKeys = [];
      for(propertyName in b) {
          if (b.hasOwnProperty(propertyName)) {
              ownKeys.push(propertyName);
          }
      }
      assert.equal(1, ownKeys.length, 'how many elements are in the ownKeys array?');
      assert.deepEqual(["bprop"], ownKeys, 'what are the own properties of the array?');
  });

  it("constructor property", function () {
      var a = new A();
      var b = new B();
      assert.equal("function", typeof(a.constructor), "what is the type of a's constructor?");
      assert.equal("A", a.constructor.name, "what is the name of a's constructor?");
      assert.equal("A", b.constructor.name, "what is the name of b's constructor?");
  });

  it("eval", function() {
      // eval executes a string
      var result = "";
      eval("result = 'apple' + ' ' + 'pie'");
      assert.equal("apple pie", result, 'what is the value of result?');
  });
});
