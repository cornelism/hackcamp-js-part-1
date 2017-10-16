const assert = require('assert');

describe("About Callbacks (topics/17_about_callbacks.js)", function () {
  it("Callbacks", function (done) {
    let firstName = "John";

    function changeName(name, callback) {
      callback(name);
    }

    changeName("Doe", function (name) {
      firstName = name;
      assert.deepEqual("Doe", firstName, 'what is the value of the firstName variable?');
      done();
    });
  });

  it("Callbacks with latency", function (done) {
    let firstName = "John";
    let lastName = "Doe";
    const users = [];

    function changeName(userData) {
      lastName = userData.lastName;
      setTimeout(function () {
        firstName = userData.firstName;
        assert.deepEqual("Paul", firstName, 'what is the value of the firstName variable in the callBack?');
        done();
      }, 100);
    }

    function modifyUser(options, callback){
      users.push(options);
      callback(options);
    }

    modifyUser({firstName: 'Paul', lastName: 'Smith'}, changeName);

    assert.deepEqual("John", firstName, 'what is the value of the firstName variable?');
    assert.deepEqual("Smith", lastName, 'what is the value of the lastName variable?');
    assert.deepEqual(1, users.length, 'How much users are in the array?');
  });

});
