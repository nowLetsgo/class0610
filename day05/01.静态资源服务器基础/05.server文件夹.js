//静态资源服务器

//引入http模块
const http = require("http");
//引入fs模块
const fs = require("fs");
// 引入path模块
const path = require("path");

//util包中有一个promisify的方法，可以把一个方法转换成一个返回promise状态的方法
const {promisify}  = require("util");

//封装promise，解决回调问题
const readDir = promisify(fs.readdir)

//创建一个服务
const server = http.createServer(async (req, res) => {

    try {
        //获取读取的文件的路径
        const filePath = path.resolve(__dirname)
        //封返回promise对象的readFile方法，书写await等待promise返回值
        const files = await readDir(filePath);
        //readdir方法读取的是文件夹，会返回一个包含当前文件夹内所有文件的目录组成的数组
        console.log(files);//['01.server.js','02.server.js']
        //如果读取的是文件夹，那么把文件夹的内容放在一个个的li中 返回出去
        /*
            //forEach写法
            let htmlstr = '';
            files.forEach((item,index)=>{
                htmlstr += `<li>${item}</li>`;
            })
            console.log(htmlstr);
        */

        //reduce写法
        const htmlstr = files.reduce((p,c)=>{
            return p + `<li>${c}</li>`;
        },"")
        console.log(htmlstr);

        //如果promise返回成功状态，则继续向下执行
        //在响应头设置相应内容的contentType  修改为html的响应类型
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        //设置响应状态码
        res.statusCode = 200;
        //响应内容
        res.end(htmlstr);
    } catch (err) {
        console.log("服务器配置出错" + err);
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