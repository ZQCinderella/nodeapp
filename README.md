
## 一、项目如何开发
  * 1 文件目录结构

    > npm start 会每次执行server/setup-env.js 文件，用于根据运行环境生成相应的配置文件

    > bin 目录下为启动文件

    > server/config 下为各运行环境的配置文件

    > server/helper 是工具方法等

    > server/routes 下是用来监听routes改变 和 rest请求的文件

    > server/service 下是一些服务，如checkLogin

    > server/views 下是配置的模板   hbs模板中的内容最后都会拼装到 layout.hbs的 {{{body}}} 变量中

    > public为静态文件的目录

  * 2 rest请求如何拼装数据
    
    > 为了方便监听请求， 避免node监听过多的api， 所以统一监听一个api路径，真实api路径放置在请求参数中， routes/api.js会做拆解

    > 数据格式  
    url: /query
    data: {
      module: 'xxxx',
      path: '真实的接口路径',
      filter: '所需的请求参数'
    }

  * 3 如何监听并向服务器发送请求

    > app.use('/query', (req, res, next) => {}) 监听服务器发来的rest请求 

    > server/config/index.js 中会配置各个项目的请求地址如process.env.finance = http://10.56.22.44/

    > api.js 根据客户端发来的module, 在config/index.js中匹配到运行环境的地址，再拼接真实的api地址

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
    const url = `${moduleUrls[moduleName].replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

    > 利用request模块发送请求
      request(options, (err, res, data) => {})

## 项目配置及启动
  * 1 nodemon是用来实现代码修改后服务重新启动

    > restartable 设置重启模式

    > ignore设置忽略监听的文件

    > execMap设置运行服务的后缀名以及对应的命令  即在package.json中使用nodemon替换node

    > watch 代表监听的目录和文件

    > ext 是文件的后缀名

  * 2 启动 npm install && npm start  
