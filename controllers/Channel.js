'use strict';

var utils = require('../utils/writer.js');
var Channel = require('../service/ChannelService');

module.exports.new = function (req, res) {

  res.end(JSON.stringify({
    identity: req.body.friendly_name,
    message: "Channel Created",
    
  }));
  
};
module.exports.create_channelPOST = function create_channelPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Channel.create_channelPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
