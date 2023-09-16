"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        const person = {
            id: "id",
            name: "Eko"
        };
        console.info(person);
        person.id = "2";
        person.name = "Kurniawan";
        console.info(person);
    });
});
