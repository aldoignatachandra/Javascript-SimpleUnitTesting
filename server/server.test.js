const request = require("supertest");
const app = require("./server").app;
const expect = require("chai").expect;

describe("Server", () => {
  //Unit Testing End Point '/'
  it("Should Return Testing Server Response", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Testing Server")
      .end(done);
  });

  // Unit Testing End Point '/user'
  it("Should Return Property Name With Spesific Value", done => {
    request(app)
      .get("/user")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body).to.have.property("name", "Aldo");
      })
      .end(done);
  });

  // Unit Testing End Point '/users'
  it("Should Return Value Name In Array", done => {
    request(app)
      .get("/users")
      .expect(res => {
        var members = [];
        res.body.forEach(function(e) {
          members.push(e.name);
        });
        expect(members).to.include.members(["Aldo", "Ignata"]);
      })
      .end(done);
  });
});
