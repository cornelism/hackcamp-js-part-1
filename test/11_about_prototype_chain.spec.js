var assert = require('assert');
// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
describe("About Prototype Chain (topics/11_about_prototype_chain.js)", function () {

  var father = {
    b: 3,
    c: 4
  };

  var child = Object.create(father);
  child.a = 1;
  child.b = 2;

  /*
   * ---------------------- ---- ---- ----
   *                      [a]  [b]  [c]
   * ---------------------- ---- ---- ----
   * [child]               1    2
   * ---------------------- ---- ---- ----
   * [father]                   3    4
   * ---------------------- ---- ---- ----
   * [Object.prototype]
   * ---------------------- ---- ---- ----
   * [null]
   * ---------------------- ---- ---- ----
   * */

  it("Is there an 'a' and 'b' own property on child?", function () {
    assert.equal(true, child.hasOwnProperty('a'), 'child.hasOwnProperty(\'a\')?');
    assert.equal(true, child.hasOwnProperty('b'), 'child.hasOwnProperty(\'b\')?');
  });

  it("Is there an 'a' and 'b' property on child?", function () {
    assert.equal(1, child.a, 'what is \'a\' value?');
    assert.equal(2, child.b, 'what is \'b\' value?');
  });

  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    assert.equal(3, child.b, 'what is \'b\' value now?');
  });


  it("Is there a 'c' own property on child?", function () {
    assert.equal(false, child.hasOwnProperty('c'), 'child.hasOwnProperty(\'c\')?');
  });

  // Is there a 'c' own property on child? No, check its prototype
  // Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
  it("Is there a 'c' property on child?", function () {
    assert.equal(4, child.c, 'what is the value of child.c?');
  });

  // Is there a 'd' own property on child? No, check its prototype
  // Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
  // child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
  it("Is there an 'd' property on child?", function () {
    assert.equal(undefined, child.d, 'what is the value of child.d?');
  });

  it("Who has the masteredJs property?", function() {
    let student = {
      learnJs() {
        this.masteredJs = true
      }
    };

    let hackagesStudent = {
      __proto__ : student
    };

    hackagesStudent.learnJs();
    assert.equal(true,hackagesStudent.masteredJs, "did the hackages student mastered js?");
    assert.equal(undefined ,student.masteredJs, "did the regular student mastered js?");
  });

  it("Separate proto", function() {
    let developer = {
      technologies : [],

      learn(tech){
        this.technologies.push(tech);
      }
    };

    let antonio = {
      __proto__:developer
    };
    let davy = {
      __proto__:developer
    };
    antonio.learn("php");

    assert.equal(antonio.technologies.length,1 , "What has Antonio learned?");
    assert.equal(davy.technologies.length, 1, "Davy should not have learned php");
  })
});

