describe('Loop', function () {
  it('Should support in typescript', function () {
    const names: string[] = ['Eko', 'Budi', 'Iksan'];
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }

    for (const name of names) {
      console.log(name);
    }

    for (const index in names) {
      console.log(names[index]);
    }
  });

  it('should support while loop', function () {
    let counter: number = 0;

    while (counter < 10) {
      console.log(counter);
      counter++;
    }
  });

  it('should support do while loop', function () {
    let counter: number = 0;
    do {
      console.log(counter);
      counter++;
    } while (counter < 10);
  });

  it('should support break and continue', function(){
    let counter : number = 0;
    do {
        counter++;
        if(counter == 10) {
            break;
        }

        if(counter % 2 == 0) {
            continue;
        }

        console.log(counter)
    } while (true)
  })
});
