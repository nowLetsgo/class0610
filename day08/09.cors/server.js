const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
    //得到用户的请求地址
    const userIP = req.headers.origin;

    //设置多个白名单的处理
    const whiteOrder = [
        "http://127.0.0.1:5500",
        "http://127.0.0.1:5501",
        "http://127.0.0.1:5502",
        "http://127.0.0.1:5503",
    ];
    const ip = whiteOrder.find((item) => item === userIP)
    console.log(ip);




    //cors设置，只需要设置响应头Access-Control-Allow-Origin：值为你设置的白名单  白名单可以设置为* 代表所有
    // res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
    // res.setHeader("Access-Control-Allow-Origin","*")


    res.setHeader("Access-Control-Allow-Origin",ip)

    //OPTIONS请求会出现在第一次跨域请求中（预检请求）
    //先携带非常少量的数据去探探路看能不能跨域，如果可以 则在次进行我们需要的请求
    res.setHeader("Access-Control-Allow-Methods",'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader("Access-Control-Max-Age",0)

    
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end("success~~~~");

})
server.listen(3001, "192.168.16.38", () => {
    console.log("http://192.168.16.38:3001")
})