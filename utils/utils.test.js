const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should add the two numbers asynchronously', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    })
  })

  describe('#square', () => {
    it('should square the number', () => {
      var res = utils.square(2);

      expect(res).toBe(4).toBeA('number');
    })

    it('should square the number asynchronously', (done) => {
      utils.asyncSquare(4, (sum) => {
        expect(sum).toBe(16).toBeA('number');
        done();
      })
    })
  })

})


it('should split the Full Name', () => {
  // user = {location: 'Indonesia', age: 25};
  // var name = utils.nameSplit(user, 'Andrew Wijaya'); /** the function's property will be inserted to user obj */

  // expect(user).toEqual(name);

  var name = utils.nameSplit({}, 'Andrew Wijaya');

  expect(name).toInclude({
    firstName: 'Andrew',
    lastName: 'Wijaya'
  })
})

// it('should expect something values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Indonesia'
//   }).toInclude({
//     age: 25
//   })
// })