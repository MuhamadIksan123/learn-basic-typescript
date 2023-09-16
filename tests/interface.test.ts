import { Seller } from '../src/seller';
import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';

describe('Interface', function () {
  it('Should support in typescript', function () {
    const seller: Seller = {
      id: 1,
      name: 'Toko Iksan',
      nib: '123123123',
      npwp: '321321321',
    };

    seller.name = 'Muhamad Iksan';

    console.log(seller);
  });

  it('Should support interface', function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it('Should support indexable interface', function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ['Eko', 'Kurniawan', 'Khannedy'];
    console.log(names);
  });

  it('Should support indexable interface non number', function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Muhamad Iksan',
      address: 'Cirebon',
    };

    expect(dictionary['name']).toBe('Muhamad Iksan');
    expect(dictionary['address']).toBe('Cirebon');
  });

  it('Should support extends interface', function () {
    const employee: Employee = {
      id: '1',
      name: 'Eko',
      division: 'IT',
    };

    console.log(employee);

    const manager: Manager = {
      id: '2',
      name: 'Muhamad Iksan',
      division: 'Manager',
      numberOfEmployee: 10,
    };

    console.log(manager);
  });

  it('Should support function in interface', function () {
    const person: Person = {
      name: 'Eko',
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.log(person.sayHello('Iksan'));
  });

  it('Should support intersection types', function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: '1',
      name: 'Muhamad Iksan',
    };

    console.log(domain);
  });

  it('Should support type assertions', function () {
    const person: any = {
      name: 'Eko',
      age: '30',
    };

    const person2: Person = person as Person;
    // person2.sayHello('Budi')
    console.log(person2);
  });
});
