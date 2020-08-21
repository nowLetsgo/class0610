//静态资源服务器

//引入http模块
const http = require("http");
//引入fs模块
const fs = require("fs");
// 引入path模块
const path = require("path");

//手动封装promise，解决回调问题
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const fileContent = data.toString();
            resolve(fileContent);
        })
    })
}

//创建一个服务
const server = http.createServer(async (req, res) => {

    try {
        //获取读取的文件的路径
        const filePath = path.resolve(__dirname, "./02.server.js")
        //封返回promise对象的readFile方法，书写await等待promise返回值
        const data = await readFile(filePath);
        //如果promise返回成功状态，则继续向下执行
        //在响应头设置相应内容的contentType 
        res.setHeader("Content-Type", "application/javascript;charset=utf-8");
        //设置响应状态码
        res.statusCode = 200;
        //响应内容
        res.end(data);
    } catch (err) {
        console.log("读取文件失败" + err);
        //在响应头设置相应内容的contentType 
        res.setHeader("Content-Type", "application/javascript;charset=utf-8");
        //让用户接受到404错误 这样就可以更清楚错误类型
        res.statusCode = 404;
        //响应失败内容
        res.end("文件资源加载失败")
    }

})

//启动服务
const port = "3000";
const host = "localhost";
server.listen(port, host, err => {
    if (err) {
        console.log("服务器启动失败" + err);
        return;
    }
    const url = `http://${host}:${port}`;
    console.log(`服务器启动成功，请访问${url}`)
})