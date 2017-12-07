var assert = require('assert');
var hello = require('../src/').hello;
var fib = require('../src/').fib;
describe('project', function () {

  it('has hello', function () {
    assert.equal('Hello World', hello);
  });
  it('fib test 1', function () {
    assert.equal(1, fib(0));
    assert.equal(1, fib(1));
    assert.equal(2, fib(2));
    assert.equal(3, fib(3));
    assert.equal(5, fib(4));
  });
  it('fib test 1', function () {
    try {
      fib(-1);
    } catch (e) {
      e;
    }
  });
  // it('fib test error',function(){
  //     assert.equal('error input', fib(-100));
  // })

});
