'use strict';


/**
 * Sending Message in a Channel
 *
 * body Message_details Send the Required details to  deliver the Message
 * returns String
 **/
exports.send_messagePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Message has been sent";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

