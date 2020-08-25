const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/login'){
        res.setHeader("Content-Type","text/plain;charset=utf-8")
        res.end("hello 你的ajax成功了");
        return;
    }


    //直接访问http://192.168.16.38:3000 可以得到主页
    const filePath = path.resolve(__dirname,"./index.html");
    const rs = fs.createReadStream(filePath)
    res.setHeader("Content-Type","text/html;charset=utf-8")
    rs.pipe(res);
    // res.end("success~");
})
.listen(3001,"192.168.16.38",()=>{
    console.log("http://192.168.16.38:3001")
})