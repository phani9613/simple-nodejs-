var feedbackController = require('../controllers/feedbackController');
var feedback = require('../models/feedback.model');
var newFeedback =
{
    comments: "Problem Resolved",
    rating: "5"
}

describe("Feedback Controller Test", function () {
   
    describe("GET /", function () {
        var request = {};
        var response = {
          
            send: jasmine.createSpy(),
            status: jasmine.createSpy()
        };
        it("returns list of feedbacks", function () {
            spyOn(feedbackController,'index');
            feedbackController.index(request, response);
           
           expect(feedbackController.index).toHaveBeenCalled();
        });

    });
    describe("Post /", function () {
        var request = { 
            body: newFeedback 
        };
     
        var response = {
            json: jasmine.createSpy(),
            send: jasmine.createSpy(),
            status: jasmine.createSpy()
        };
        it("post new feedback", function () {
            spyOn(feedbackController,'new');
            feedbackController.new(request, response);
           expect(feedbackController.new).toHaveBeenCalled();
        });
    });
});