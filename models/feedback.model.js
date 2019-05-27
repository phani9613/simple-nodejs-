// feedback.model.js
var mongoose = require('mongoose');
// Setup schema
var feedbackSchema = mongoose.Schema({
    comments: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
});
// Export Feedback model
var Feedback = module.exports = mongoose.model('feedback', feedbackSchema);
module.exports.get = function (callback, limit) {
    Feedback.find(callback).limit(limit);
}