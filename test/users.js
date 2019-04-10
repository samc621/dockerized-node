import User from "../api/users/model";
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";
import mongoose from "mongoose";
const expect = chai.expect;

chai.use(chaiHttp);
chai.should();

describe("Users", () => {
  before(async () => {
    await mongoose.connect("mongodb://mongo:27017/dbname-test", {
      useNewUrlParser: true
    });
    await User.deleteMany({});
  });

  describe("POST /register", () => {
    it("Creates a new user", async () => {
      let user = {
        first_name: "Samuel",
        last_name: "Corso",
        phone_number: 3473082597
      };

      let response = await chai
        .request(server)
        .post("/api/users/register")
        .send(user);

      expect(response.statusCode).to.equal(200);
      expect(response.body).should.be.a("object");
    });
  });

  after(async () => {
    await User.deleteMany({});
  });
});
