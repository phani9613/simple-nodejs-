'use strict';


/**
 * Creating Twilio Channel
 *
 * body Channel_details Send the Required details to  Create the Channel
 * returns String
 **/
exports.create_channelPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Channel Created";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


exports.save=function(body) {
  res.json({
    message: 'New Channel Created!'
});
}

