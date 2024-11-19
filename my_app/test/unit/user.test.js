const userModel = require('../../models/user');


describe('User Model Test', () => {
  it('should be able to return wether the user is an adult or not', () => {
    const user = new userModel({username: 'Hiram', age: 20});
    expect(user.isAdult()).toBeTruthy();
    });

    it('should be able to return wether the user is not an adult', () => {
        const user = new userModel({username: 'Diego', age: 17});
        expect(user.isAdult()).toBeFalsy();
    });



});