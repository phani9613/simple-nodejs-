'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.send_messagePOST = function send_messagePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Message.send_messagePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
