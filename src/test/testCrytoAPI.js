import supertest from "supertest";
import {app} from "../index.js";
import should from "should";

describe("Crytos API unit test", function () {
    this.timeout(120000);

    it("should add a cryto", function (done) {
        supertest(app)
            .post("/api/crytos")
            .set("Authorization", "BEARER eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M")
            .send({
                name: "TEST",
                symbol: "XYP",
                username: "Username 1",
                price: "100",
                market_cap_eur: "200",
                percent_change_24h: "10",
                amount_purchased: "10",
                quantity_purchased: "20"
            })
            .expect("Content-type", /json/)
            .expect(201)
            .end(function (err, res) {
                res.status.should.equal(201);
                done();
            });
    });

    it("should return collection of JSON documents", function (done) {
        supertest(app)
            .get("/api/crytos")
            .set('Authorization', "BEARER eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M")
            .expect("Content-type", /json/)
            .expect(200) // This is the HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                done();
            });
    });

});
