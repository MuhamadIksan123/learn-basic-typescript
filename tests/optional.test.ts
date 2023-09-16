describe('Optional Paramter', function () {
  it('Should support null and undefined', function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.log(`Hello ${name}`);
      } else {
        console.log('Hello');
      }
    }

    sayHello('Iksan');

    const name: string | undefined = undefined;

    sayHello(name);

    sayHello(null);
  });
});
