import { Category, Product } from '../src/type-alias';

describe('type alias', function(){
    it('should suppor in typescript', function(){
        const category: Category = {
            id: 1,
            name: "Muhamad Iksan"
        }

        const product: Product = {
            id: "1",
            name: "Eko Kurniawan",
            price: 10000,
            category: category
        };

        console.info(category);
        console.info(product);
    })
})
