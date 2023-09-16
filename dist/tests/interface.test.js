describe('Interface', function () {
    it('Should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko Iksan',
            nib: '123123123',
            npwp: '321321321',
        };
        seller.name = 'Muhamad Iksan';
        console.log(seller);
    });
    it('Should support interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('Should support indexable interface', function () {
        const names = ['Eko', 'Kurniawan', 'Khannedy'];
        console.log(names);
    });
    it('Should support indexable interface non number', function () {
        const dictionary = {
            name: 'Muhamad Iksan',
            address: 'Cirebon',
        };
        expect(dictionary['name']).toBe('Muhamad Iksan');
        expect(dictionary['address']).toBe('Cirebon');
    });
    it('Should support extends interface', function () {
        const employee = {
            id: '1',
            name: 'Eko',
            division: 'IT',
        };
        console.log(employee);
        const manager = {
            id: '2',
            name: 'Muhamad Iksan',
            division: 'Manager',
            numberOfEmployee: 10,
        };
        console.log(manager);
    });
    it('Should support function in interface', function () {
        const person = {
            name: 'Eko',
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.log(person.sayHello('Iksan'));
    });
    it('Should support intersection types', function () {
        const domain = {
            id: '1',
            name: 'Muhamad Iksan'
        };
        console.log(domain);
    });
});
export {};
