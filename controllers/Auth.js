'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authGET = function authGET (req, res, next) {
  Auth.authGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.token_authPOST = function token_authPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.token_authPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getToken = function getToken(req, res) {
  
  //  Auth.find(req, res);

  res.end(JSON.stringify({
    identity: 'New Token Generated!',
    token:"dadafasdfawueitnwakefnjlgueiabgkvfboawbge"
  }));

 
};

module.exports.getEmail = function getEmail(req, res) {
  
  //  Auth.find(req, res);

  res.end(JSON.stringify({
    email: 'phani@gmail.com',
  }));

 
};