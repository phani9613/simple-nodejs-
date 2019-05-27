// Import contact model
Feedback = require('../models/feedback.model');
const feedbackController = {};
// Handle index actions
feedbackController.index = function (req, res) {
    Feedback.get(function (err, feedbacks) {

        res.json({
            status: "success",
            message: "Feedbacks retrieved successfully",
            data: feedbacks
        });
    });

};
// Handle create feedback actions
feedbackController.new = function (req, res) {
    var feedback = new Feedback();
    feedback.comments = req.body.comments;
    feedback.rating = parseInt(req.body.rating,10);
    
    var rating=feedback.rating;      
    // if(rating > 5){
    //     res.json({
    //         message: 'Rating Must be in Number 1-5',
    //     });
    // } else
     if (isNaN(feedback.rating) ) {
       
        res.json({
            message: 'Rating Must be in Number',
        });
    }
    
    else {
        feedback.save(function (err) {
            res.json({
                message: 'New Feedback Saved!',
                data: feedback
            });
        });
    }
    
};

module.exports = feedbackController;