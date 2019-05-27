var request = require("request");
var feedBack = require("../index.js")
var base_url = "http://localhost:8080/api"


describe("Feedback Server", function () {
    describe("GET /", function () {

        it("returns welcome", function (done) {
            request.get("http://localhost:8080/", function (error, response, body) {
                expect(body).toBe("Welcome to Feedback System");

                done();
            });
        });

        it("returns status code 200", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);

                done();
            });
        });

        it("returns API is working", function (done) {
            request.get(base_url, function (error, response, body) {
                expect((JSON.parse(body)).status).toBe("API Its Working");

                done();

            });
        });
        it("returns Welcome to Xerox Feedback crafted with love!", function (done) {
            request.get(base_url, function (error, response, body) {
                expect((JSON.parse(body)).message).toBe("Welcome to Xerox Feedback crafted with love!");

                done();

            });
        });

    });
});