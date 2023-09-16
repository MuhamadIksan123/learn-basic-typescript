"use strict";
describe('Optional Paramter', function () {
    it('Should support null and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
            }
            else {
                console.log('Hello');
            }
        }
        sayHello('Iksan');
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
