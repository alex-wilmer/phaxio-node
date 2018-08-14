const expect = require('expect.js');

const PhaxCode = require('../../src/phax-code');

describe('class: PhaxCode', () => {
  it('should be a class', () => {
    // Classes are just special kinds of functions.
    expect(PhaxCode).to.be.a('function');
  });

  describe('post-instantiation', () => {
    const phaxcode = new PhaxCode('mykey', 'mysecret');
    it('should export appropriate properties and functions', () => {
      expect(phaxcode).to.have.property('apiKey');
      expect(phaxcode).to.have.property('apiSecret');
      expect(phaxcode).to.have.property('create');
      expect(phaxcode).to.have.property('get');
    });

    it('should have a method `create()`', () => {
      expect(phaxcode.create).to.be.a('function');
    });

    it('should have a method `get()`', () => {
      expect(phaxcode.get).to.be.a('function');
    });

    describe('method: create', () => {
      it('should create a new JSON PhaxCode and return appropriate JSON');
      it('should create a new PNG PhaxCode and return a PNG');
    });

    describe('method: get', () => {
      it('should get an existing JSON PhaxCode');
      it('should get an existing PNG PhaxCode');
    });
  });
});