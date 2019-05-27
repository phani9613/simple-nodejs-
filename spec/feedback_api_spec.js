var request = require("request");
var feedBack = require("../index.js")
var base_url = "http://localhost:8080/api/feedback"
var newFeedback =
{
    comments: "Problem Resolved",
    rating: "5"
}
var invalidFeedback =
{
    comments: "Problem Resolved",
    rating: "Rating"
}
var options1 = {
    method: 'POST',
    url: base_url,
    headers: {
        accept: 'application/json'
    },
    body: invalidFeedback,
    json: true
};
var options = {
    method: 'POST',
    url: base_url,
    headers: {
        accept: 'application/json'
    },
    body: newFeedback,
    json: true
};

describe("Feedback Server", function () {

    describe("GET /", function () {


        it("returns retrieval status", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(JSON.parse(body).status).toBe("success");
                done();
            });
        });

        it("returns list of feedbacks", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(JSON.parse(body).message).toBe("Feedbacks retrieved successfully");
                done();
            });
        });
    });
        describe("POST /", function () {

        it("returns new Feed back saved", function (done) {

            request(options, function (error, response, body) {

                expect(JSON.stringify(body.message)).toBe("\"New Feedback Saved!\"");

                done();

            });

        });
        it("Rating must in 1-5", function (done) {

            request(options1, function (error, response, body) {
                
                expect(JSON.stringify(body.message)).toBe("\"Rating Must be in Number\"");

                done();

            });

        });


    });
});