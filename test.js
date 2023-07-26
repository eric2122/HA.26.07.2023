const chai = require('chai');
const { toCelsius, toFahrenheit } = require('./app');

describe('toCelsius', function() {
  it('should correctly convert positive numbers', function() {
    chai.expect(toCelsius(100)).to.be.closeTo(37.78, 0.01);
  });

  it('should correctly convert negative numbers', function() {
    chai.expect(toCelsius(-40)).to.equal(-40);
  });

  it('should correctly convert zero', function() {
    chai.expect(toCelsius(32)).to.equal(0);
  });
});

describe('toFahrenheit', function() {
  it('should correctly convert positive numbers', function() {
    chai.expect(toFahrenheit(100)).to.equal(212);
  });

  it('should correctly convert negative numbers', function() {
    chai.expect(toFahrenheit(-40)).to.equal(-40);
  });

  it('should correctly convert zero', function() {
    chai.expect(toFahrenheit(0)).to.equal(32);
  });
});
