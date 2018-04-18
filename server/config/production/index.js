/**
* 开发环境配置
*/

module.exports.port = process.env.PORT = 8888;
module.exports.NODE_ENV = process.env.NODE_ENV = 'production';


/**
* 全量的系统id
*/
const appId_one = ['1', '2'];
const appId_two = ['3'];
module.exports.APPIDS = process.env.APPIDS = appId_one.concat(appId_two);

/**
* 系统项目配置 ( 链接分别对应不同环境的接口地址 )
*/

//支付系统
module.exports.FINANCE = process.env.FINANCE = 'http://xxxxxx';           //appId=1

//订单系统
module.exports.ORDER_SYS = process.env.ORDER_SYS = 'http://xxxxx';         //appId=2

//售后系统
module.exports.CUSTOM_SERVICE = process.env.CUSTOM_SERVICE = 'http://xxxxx';  //appId=3
