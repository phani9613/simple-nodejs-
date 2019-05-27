'use strict';


/**
 * Authorize the User to Login
 * 
 *
 * returns Auth_Body
 **/
exports.authGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "identity" : "identity",
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Authorize the Existing Token
 *
 * body Token_auth_body Send the Required details to  authenticate
 * returns token_auth_body_success
 **/
exports.token_authPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "identity" : "identity",
  "message" : "authenticated",
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


exports.find=function(req, res) {
  
  res.end(JSON.stringify({
    identity: 'New Channel Created!',
    token:"dadafasdfawueitnwakefnjlgueiabgkvfboawbge"
  }));
 
}
