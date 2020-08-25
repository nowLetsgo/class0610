const http = require("http");
const fs = require("fs");
const path = require("path");
const {
    url
} = require("inspector");
http.createServer((req, res) => {
        console.log(req.url);
        if (req.url.startsWith('/login')) {
            //req.method是判读请求的方式
            if (req.method === 'GET') {
                console.log("GET请求")
                const userSQLMessage = {
                    user: "laoli",
                    pass: "12345"
                }
                const userClientMessage = req.url.split("?")[1].split("&").reduce((p, c) => {
                    const [key, value] = c.split("=");
                    p[key] = value;
                    return p;
                }, {})
                console.log(userClientMessage)
                //判断userClientMessage userSQLMessage时是否一致
                const {
                    user: user1,
                    pass: pass1
                } = userClientMessage;
                const {
                    user: user2,
                    pass: pass2
                } = userSQLMessage;

                if (user1 === user2 && pass1 === pass2) {
                    res.setHeader("Content-Type", "application/json;charset=utf-8")
                    const resMes = {
                        "mes": "登录成功",
                        "code": 200
                    };
                    //只能传输的是字符串
                    res.end(JSON.stringify(resMes));
                    return;
                }

                res.setHeader("Content-Type", "application/json;charset=utf-8")
                const resMes = {
                    "mes": "登录失败",
                    "code": 404
                };
                //只能传输的是字符串
                res.end(JSON.stringify(resMes));
                return;
            }

            if(req.method === "POST"){
                req.on("data",(chunk)=>{
                    console.log(JSON.parse(chunk.toString()))
                })

                res.end("get请求成功");
            }

        }


        //直接访问http://192.168.16.38:3000 可以得到主页
        const filePath = path.resolve(__dirname, "./index.html");
        const rs = fs.createReadStream(filePath)
        res.setHeader("Content-Type", "text/html;charset=utf-8")
        rs.pipe(res);
        // res.end("success~");
    })
    .listen(3001, "192.168.16.38", () => {
        console.log("http://192.168.16.38:3001")
    })