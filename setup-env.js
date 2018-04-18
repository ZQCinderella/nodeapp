/**
* Created by fet
*/
const path = require('path');
const fs = require('fs');

console.log(`process.env.NODE_ENV is ${process.env.NODE_ENV}`);

//根据当前运行环境去读取不同的配置文件
const envConfigFile = path.join(__dirname, 'server/config', process.env.NODE_ENV, 'index.js');

//判断文件路径是否存在
if (!fs.existsSync(envConfigFile)) {
  console.error(`error: 当前环境 ${process.env.NODE_ENV} 中没有找到对应的配置文件: ${envConfigFile}`);  
  process.exit(1);
}

//config中共四个环境配置，但是我们如果根据环境去选择要读取对应的文件会比较麻烦，所以配置统一的出口文件

const validEnvPath = path.join(__dirname, 'server/config/index.js');

//如果server/config/index.js已存在，则删除重新生成
if (fs.existsSync(validEnvPath)) {
  console.log(`${validEnvPath} exist`);
  fs.unlinkSync(validEnvPath);
}

//reader.pipe(writer)
fs.createReadStream(envConfigFile).pipe(fs.createWriteStream(validEnvPath));

