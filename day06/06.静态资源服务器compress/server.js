//引入http模块
const http = require("http");

//如果引入模块时候，只写文件夹的名字，则默认引入文件夹中的index.js
const {port,host} = require("./config");

const middleWare = require("./middleware")


//创建一个服务
const server = http.createServer(middleWare)

//启动服务
server.listen(port, host, err => {
    if (err) {
        console.log("服务器启动失败" + err);
        return;
    }
    const url = `http://${host}:${port}`;
    console.log(`服务器启动成功，请访问${url}`)
})