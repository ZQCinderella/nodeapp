var promise = require('bluebird');


function checkLogin(req) {
  return new Promise(function(resolve, reject) {
    resolve(req.body);
  });
}
module.exports = {
  checkLogin
}