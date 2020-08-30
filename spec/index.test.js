import {CarInsurance} from '../src/carInsurance';
import {Product} from '../src/product';
import {describe} from 'mocha';

const expect = require('chai').expect;

describe("Co Test", function() {

    it("should foo", function() {
        const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
        const products = coTest.updatePrice();
        expect(products[0].name).equal("foo");
    });

    it("should no products", function() {
        const coTest = new CarInsurance();
        const products = coTest.updatePrice();
        expect(products.length).equal(0);
    });

    it("should Full Coverage", function() {
        const coTest = new CarInsurance([ new Product("Full Coverage", 10, 20) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(21);
    });

    it("should New Product", function() {
        const coTest = new CarInsurance([ new Product("New Product", 10, 52) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(51);
    });

    it("should Full Coverage negative", function() {
        const coTest = new CarInsurance([ new Product("Full Coverage", 10, -4) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(-3);
    });

    it("should Special Full Coverage and sellIn < 11", function() {
        const coTest = new CarInsurance([ new Product("Special Full Coverage", 9, 20) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(8);
    });

    it("should Special Full Coverage and sellIn > 11", function() {
        const coTest = new CarInsurance([ new Product("Special Full Coverage", 12, 20) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(11);
    });

    it("should Special Full Coverage and sellIn < 6 and price < 50 ", function() {
        const coTest = new CarInsurance([ new Product("Special Full Coverage", 5, 49) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(50);
    });

    it("should sellIn < 0 and price > 0 and is a new product", function() {
        const coTest = new CarInsurance([ new Product("Other product", -4, 30) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(28);
    });

    it("should Special Full Coverage sellIn < 0", function() {
        const coTest = new CarInsurance([ new Product("Special Full Coverage", -4, 30) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(0);
    });

    it("should Full Coverage sellIn < 0", function() {
        const coTest = new CarInsurance([ new Product("Full Coverage", -4, 30) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(32);
    });

    it("should Mega Coverage sellIn < 0 and price > 0", function() {
        const coTest = new CarInsurance([ new Product("Mega Coverage", -4, 30) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(30);
    });

    it("should Full Coverage sellIn < 0 and price > 50", function() {
        const coTest = new CarInsurance([ new Product("Full Coverage", -4, 60) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(60);
    });

    it("should Super Sale product and price > 0", function() {
        const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
        const products = coTest.updatePrice();
        expect(products[0].price).equal(4);
    });

});
