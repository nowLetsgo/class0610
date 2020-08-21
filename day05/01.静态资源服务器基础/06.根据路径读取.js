//静态资源服务器
//1.需要把fs.stat变成返回promise状态的方法
//2.获取当前的url路径  拼接到filePath上
//3.先用stat检测路径得到一个stats对象
//4.stats对象有两个方法可以检测是字符串还是文件
//5.在两个判断中 分写写入字符串和文件的代码



//引入http模块
const http = require("http");
//引入fs模块
const fs = require("fs");
// 引入path模块
const path = require("path");

//util包中有一个promisify的方法，可以把一个方法转换成一个返回promise状态的方法
const {
    promisify
} = require("util");

//封装promise，解决回调问题
const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
//fs的stat方法 返回一个stats对象，对象中有isFile() isDir()两个方法，用来判断是文件还是文件夹
//因为fs.stat是有回调函数的，为了解决回调问题，可以使用promisif封装，得到一个返回promise状态的stat方法
const stats = promisify(fs.stat)

//创建一个服务
const server = http.createServer(async (req, res) => {
    //根据路径来判断式文件还是文件夹，所以需要获取请求的路径
    console.log(req.url);
    //如果路径有中文，则回去的url是浏览器的编码，需要使用decodeURI编码给转义回来，才可以正常使用
    const url = decodeURI(req.url);
    console.log(url)
    try {
        //获取读取的文件的路径 把当前请求的路径拼接绝对路径上，但是url得到的路径是/开头的，代表绝对路径，这样resolve合并不了，需要使用slice截取掉前边的/
        const filePath = path.resolve(__dirname,url.slice(1));
        console.log(filePath)
        //使用stats方法 把路径传入，返回一个stats对象，我们根据stats对象的isFile和isDir方法判断
        const stat = await stats(filePath);
        //stat中 有两个方法可以判断是文件还是文件夹
        if (stat.isFile()) { 
            //封返回promise对象的readFile方法，书写await等待promise返回值
            const data = await readFile(filePath);
            //如果promise返回成功状态，则继续向下执行
            //在响应头设置相应内容的contentType 
            res.setHeader("Content-Type", "application/javascript;charset=utf-8");
            //设置响应状态码
            res.statusCode = 200;
            //响应内容
            res.end(data);
        }

        if (stat.isDirectory()) {
            //如果读取的是文件夹，那么把文件夹的内容放在一个个的li中 返回出去
            const files = await readDir(filePath);
            //reduce累加写法
            const htmlstr = files.reduce((p, c) => {
                return p + `<li><a href=${c}>${c}</a></li>`;
            }, "")
            console.log(htmlstr);

            //如果promise返回成功状态，则继续向下执行
            //在响应头设置相应内容的contentType  修改为html的响应类型
            res.setHeader("Content-Type", "text/html;charset=utf-8");
            //设置响应状态码
            res.statusCode = 200;
            //响应内容
            res.end(htmlstr);
        }


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