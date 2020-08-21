//静态资源服务器

//引入http模块
const http = require("http");
//引入fs模块
const fs = require("fs");
// 引入path模块
const path = require("path");

//创建一个服务
const server = http.createServer((req, res) => {
    //获取读取的文件的路径
    const filePath = path.resolve(__dirname,"./01.server.js")
    //快速读取文件
    fs.readFile(filePath,(err,data)=>{
        //读取文件错误处理
        if(err){
            console.log("读取文件失败"+err);
            return;
        }
        //把读取到的文件流转换成内容
        const fileContent = data.toString();

        //在响应头设置相应内容的contentType 
        res.setHeader("Content-Type","application/javascript;charset=utf-8");
        //响应内容
        res.end(fileContent);
    })

})

//启动服务
const port = "3000";
const host = "localhost";
server.listen(port,host,err=>{
    if(err){
        console.log("服务器启动失败"+err);
        return;
    }
    const url = `http://${host}:${port}`;
    console.log(`服务器启动成功，请访问${url}`)
})