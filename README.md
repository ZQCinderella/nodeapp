## bin/www 是项目启动的执行文件，可以在里面require app对象 或者 config配置等

## views/下的其他hbs最终都会render到 layout.hbs的body变量上

## nodemon是用来实现代码修改后服务重新启动
1、restartable 设置重启模式
2、ignore设置忽略监听的文件
3、execMap设置运行服务的后缀名以及对应的命令  即在package.json中使用nodemon替换node
4、watch 代表监听的目录和文件
5、ext 是文件的后缀名