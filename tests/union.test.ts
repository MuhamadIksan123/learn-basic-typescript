describe('Union', function () {
  it('Should support in typescript', function () {
    let sample: string | number | boolean = "Eko"
    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = true;
    console.log(sample);
  });
})