var request = require('request');
var loger = require('../helper/mylogger').Logger;
var AuthService = require('../service/auth');
const {
  FINANCE,
  ORDER_SYS,
  CUSTOM_SERVICE
} = process.env;

console.log(FINANCE);

const moduleUrls = {
  finance: FINANCE,
  orderSys: ORDER_SYS,
  customService: CUSTOM_SERVICE
}

function listenApi(app) {
  app.use('/query', (req, res, next) => {
    //1、检查token是都还生效
    //2、根据moduleName,和node_env 取出对应的接口地址
    //3、向服务器发送请求
    AuthService.checkLogin(req).then(data => {
      console.log(data);
      next();
    }).catch(data => {
      res.json(data);
    })
  }, (req, res, next) => {
    const host = req.headers.origin;
    /* req.body的格式为
    {
      filter: 请求数据,
      path: 请求的真实接口地址,
      module: moduleName
    }
    */
    // res.header('Access-Control-Allow-Origin', host);
    // res.header('Access-Control-Allow-Credentials', 'true');
    // res.header('Access-Control-Allow-Methods', 'POST');
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { filter, module, path } = body;

    //解析出对应的url
    const fullUrl = getUrlByModuleName(module, path);
    res.send({done: true});
  })
}

function getUrlByModuleName (moduleName, path) {
  const url = `${moduleUrls[moduleName].replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  console.log(`使用 ${moduleName} 的地址: ${url}`);
  return url;
}

module.exports = {
  listenApi
}