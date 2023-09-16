describe('If statement', function () {
  it('should support in typescript', function () {
    const examValue = 90;
    if (examValue > 80) {
      console.log('Good');
    } else if (examValue > 60) {
      console.log('Not Bad');
    } else {
      console.log('Try Again');
    }
  });

  it('should support ternary operator', function () {
    const value = 80;
    const say = value > 75 ? 'Congratulation' : 'Try Again';
    console.log(say);
  });

  it('should support switch statement', function () {
    function sayHello(name: string): string {
      switch (name) {
        case 'Eko':
          return 'Hi Eko';
        case 'Budi':
          return 'Hi Budi';
        default:
          return 'Hi';
      }
    }

    console.log(sayHello('Eko'));
    console.log(sayHello('Budi'));
    console.log(sayHello('Iksan'));
  });
});
