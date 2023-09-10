describe('type alias', function () {
    it('should suppor in typescript', function () {
        const category = {
            id: "1",
            name: "Muhamad Iksan"
        };
        const product = {
            id: "2",
            name: "Eko Kurniawan",
            price: 10000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
