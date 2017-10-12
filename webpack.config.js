var path = require('path');

module.exports = {
  entry: {
    '00_about_asserts': './test/00_about_asserts.spec.js',
    '01_about_operators': './test/01_about_operators.spec.js',
    '02_about_equality': './test/02_about_equality.spec.js',
    '03_about_truthyness': './test/03_about_truthyness.spec.js',
    '04_about_assignment': './test/04_about_assignment.spec.js',
    '05_about_control_structures': './test/05_about_control_structures.spec.js',
    '06_about_strings': './test/06_about_strings.spec.js',
    '07_about_numbers': './test/07_about_numbers.spec.js',
    '08_about_objects': './test/08_about_objects.spec.js',
    '09_about_arrays': './test/09_about_arrays.spec.js',
    '10_about_reflection': './test/10_about_reflection.spec.js',
    '11_about_prototype_chain': './test/11_about_prototype_chain.spec.js',
    '12_about_prototypal_inheritance': './test/12_about_prototypal_inheritance.spec.js',
    '13_about_functions_and_closure': './test/13_about_functions_and_closure.spec.js',
    '14_about_this': './test/14_about_this.spec.js',
    '15_about_scope': './test/15_about_scope.spec.js',
    '16_about_regular_expressions': './test/16_about_regular_expressions.spec.js',
    '17_about_callbacks': './test/17_about_callbacks.spec.js',
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [{
      test: /\.js$/, loader: 'babel-loader', exclude: /node_module/
    }]
  }
};
