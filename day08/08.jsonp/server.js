const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer((req, res) => {
        console.log(req.method);
        //把请求的数据变成对象格式
        const userData = req.url.split("?")[1].split("&").reduce((p, c) => {
            const [key, value] = c.split("=");
            p[key] = value;
            return p;
        }, {})

        //解构赋值对象内容
        const {
            user,
            pass,
            cb
        } = userData

        //只要想要向客户端响应  那么需要响应一个 res.end("cb(data)") (js类型)
        if(user === "lily" && pass === "12345"){
            //成功登录响应
            const data = "登录成功";
            res.setHeader("Content-Type","application/javascript");
            res.end(`${cb}('${data}')`)
            return;
        }
        //失败登录响应
        const data = "登录失败";
        res.setHeader("Content-Type","application/javascript");
        res.end(`${cb}('${data}')`)
        return;

    })
    .listen(3001, "192.168.16.38", () => {
        console.log("http://192.168.16.38:3001")
    })