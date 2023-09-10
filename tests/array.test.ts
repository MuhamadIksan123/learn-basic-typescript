describe('Array', function () {
  it('Should same ini typescript', function () {
    const names: string[] = ['eko', 'budi', 'joko'];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it('Should support readonly array', function () {
    const hobbies: ReadonlyArray<string> = ['Makanan', 'Minuman'];
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    //   hobbies[0] = "Main Game";
  });

  it('Should support tupple', function () {
    const person: readonly [string, string, number] = ['Eko', 'Khannedy', 30];
    console.info(person[0]);
    console.info(person[1]);

    // person[0] = 'Budi';
  });
});
