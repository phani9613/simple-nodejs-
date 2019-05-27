// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to Xerox Feedback crafted with love!',
    });
});

var feedbackController = require('../controllers/feedbackController');

router.route('/feedback')
    .get(feedbackController.index)
    .post(feedbackController.new);



// Export API routes
module.exports = router;