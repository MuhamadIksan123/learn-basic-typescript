describe('Function', function () {
  it('Should support function in typescript', function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Iksan')).toBe('Hello Iksan');

    function printHello(name: string): void {
      console.log(`Hello ${name}`);
    }

    printHello('Muhamad iksan');
  });

  it('Should support default value', function () {
    function sayHello(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe('Hello Guest');
    expect(sayHello('Iksan')).toBe('Hello Iksan');
  });

  it('Should support rest parameter', function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it('Should support optional parameter', function () {
    function sayHello(firsName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firsName} ${lastName}`;
      } else {
        return `Hello ${firsName}`;
      }
    }

    expect(sayHello('Muhamad')).toBe('Hello Muhamad');
    expect(sayHello('Muhamad', 'Iksan')).toBe('Hello Muhamad Iksan');
  });

  it('Should support function overloading', function () {
    function callMe(value: string): string;
    function callMe(value: number): number;
    function callMe(value: any): any {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe('Iksan')).toBe(`IKSAN`);
  });

  it('should support function as paramater', function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('Iksan', toUpper)).toBe('Hello IKSAN');

    expect(
      sayHello('Iksan', function (name: string): string {
        return name.toUpperCase();
      })
    );

    expect(sayHello('Iksan', (name: string): string => name.toUpperCase()));
  });
});
