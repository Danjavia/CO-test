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

});
