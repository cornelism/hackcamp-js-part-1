module.exports = function (wallaby) {
  return {
    files: [
      'src/index.js'
    ],

    tests: [
      'test/*spec.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
