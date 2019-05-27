let router = require('express').Router();

var channelController = require('../controllers/Channel');
var authController= require('../controllers/Auth')
router.route('/create_join_channel')
    .post(channelController.new)

router.route('/auth')
    .get(authController.getToken)

    router.get('/', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        message: "working properly"
    }));
    });
module.exports = router;