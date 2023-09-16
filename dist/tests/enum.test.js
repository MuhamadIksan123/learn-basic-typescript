import { CustomerType } from '../src/enum';
describe('Enum', function () {
    it('Should support type in typescript', function () {
        const customer = {
            id: 1,
            name: "Muhamad Iksan",
            type: CustomerType.PLATINUM
        };
        console.log(customer);
    });
});
