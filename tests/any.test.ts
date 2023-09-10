describe('Any', function () {
  it('Should support in typescript', function () {
    const person: any = {
        id: 1,
        name: "Eko Kurniawan Khannedy",
        age: 30
    };

    person.age = 40;
    person.alamat = 'Indonesia'

    console.info(person);
  });
});