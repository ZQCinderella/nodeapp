/**
 * 做一些检查登录之类的操作
 */

 const fs = require('fs');
 const path = require('path');
 const config = require('./config');
 const { NODE_ENV } = process.env;

function checkLoginStatus (req, res, next) {
  //console.log(666);
  next();
}

 module.exports = function (app) {
  app.use('/', checkLoginStatus);
 }
