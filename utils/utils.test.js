const { add, asyncAdd, square, asyncSquare } = require("./utils");
const expect = require("chai").expect;

describe("Utils", () => {
  describe("Add Function", () => {
    //Unit Test Add Function
    it("Should Add Two Numbers", () => {
      let res = add(11, 33);
      expect(res).to.be.a("number");
      expect(res).to.equal(44);
    });

    //Unit Test Async Add Function
    it("Should Add Two Numbers, Async", done => {
      asyncAdd(4, 8, sum => {
        expect(sum).to.be.a("number");
        expect(sum).to.equal(12);
        done();
      });
    });
  });
  describe("Square Function", () => {
    //Unit Test Square Function
    it("Should Square a Number", () => {
      let res = square(4);
      expect(res).to.be.a("number");
      expect(res).to.equal(16);
    });

    //Unit Test Async Add Function
    it("Should Square a Number, Async", done => {
      asyncSquare(8, 8, square => {
        expect(square).to.be.a("number");
        expect(square).to.equal(64);
        done();
      });
    });
  });
});
