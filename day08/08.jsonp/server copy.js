const http = require("http");
const fs = require("fs");
const path = require("path");
const {
    url
} = require("inspector");
http.createServer((req, res) => {
    if (req.method === "GET") {
        
        // res.setHeader();
        res.end("success");
    }

    if (req.method === "POST") {

    }

    //localhost:3000/login
    if (req.url === "/login") {
        //获取到url的查询字符串
        //把url变成对象
        //把对象的值拿出来和数据库的对比
        //如果相同 则返回成功  否则失败
    }
    //localhost:3000/register
    if (req.url === "/register") {
        //获取用户的查询字符串   根据data事件获取用户发送信息
        //把用户信息变成对象
        //把用户信息进行和数据的信息比对，查看是否有重复用户名
        //如果有 则end一个重名
        //否则 end一个 注册成功
    }
    //localhost:3000/student
    if (req.url === "/student") {
        const data = [
            {
                name:"xiaowang",
                age:"18"
            },
            {
                name:"xiaowang",
                age:"18"
            },
            {
                name:"xiaowang",
                age:"18"
            }
        ]
        //获取用户的查询字符串 
        //去数据库中查询所有的学生名单
        //把所有的学生姓名放在一个数组中，放在一个对象中
        //返回
    }

    if (req.url === "/hot") {
        //
    }
})

.listen(3001, "192.168.16.38", () => {
    console.log("http://192.168.16.38:3001")
})