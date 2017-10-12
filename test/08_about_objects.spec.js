var assert = require('assert');

describe("About Objects (topics/08_about_objects.js)", function() {
  it("object type", function() {
      var empty_object = {};
      assert.equal(__, typeof(empty_object), 'what is the type of an object?');
  });

  it("object literal notation", function() {
      var person = {
          __:__,
          __:__
      };
      assert.equal("Amory Blaine", person.name, "what is the person's name?");
      assert.equal(102, person.age, "what is the person's age?");
  });

  it("dynamically adding properties", function() {
      var person = {};
      person.__ = "Amory Blaine";
      person.__ = 102;
      assert.equal("Amory Blaine", person.name, "what is the person's name?");
      assert.equal(102, person.age, "what is the person's age?");
  });

  it("adding properties from strings", function() {
      var person = {};
      person["__"] = "Amory Blaine";
      person["__"] = 102;
      assert.equal("Amory Blaine", person.name, "what is the person's name?");
      assert.equal(102, person.age, "what is the person's age?");
  });

  it("adding functions", function() {
      var person = {
          name: "Amory Blaine",
          age: 102,
          toString: function() {
              return __;  // HINT: use the 'this' keyword to refer to the person object.
          }
      };
      assert.equal("I Amory Blaine am 102 years old.", person.toString(), "what should the toString function be?");
  });
});
