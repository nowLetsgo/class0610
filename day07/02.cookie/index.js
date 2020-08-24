const http = require("http");
/*
    客户端查看cookie使用：document.cookie
*/

http.createServer((req, res) => {
        //服务端设置cookie，cookie会随着响应发送给客户端，客户端把cookie保存起来
        //cookie是一个 key-value键值对的值
        //如果不设置时间，则代表临时存储，当浏览器关闭后，就会消失
        //设置事件可以通过expires或max-age（推荐） max-age的时间单位是秒
        //httpOnly是设置仅仅对服务端可见，仅仅服务端可以操作
        res.setHeader("Set-Cookie", "username=lily;max-age=3600;httpOnly=true");
        res.setHeader("Set-Cookie", "password=xiaowang;max-age=3600;httpOnly=true");



        //使用req.headers.cookie可以获取cookie 获取的cookie是`username=lily; password=xiaowang`;
        //但是我们最终需要的是一个对象，里边的cookie是key-value形式 {username:lily,password:xiaowang}
        const reqCookie = req.headers.cookie;
        console.log(reqCookie);
        //把获取到的cookie转为对象形式
        //['username=lily','password=xiaowang']
        /*
            //forEach写法
            const cookieResult = {};
            const arr = reqCookie.split("; ")
            arr.forEach((item,index)=>{
                const newArr = item.split("=");//['username','lily']
                const [key,value] = newArr;
                cookieResult[key] = value;
            })
            console.log(cookieResult);
        */

        //reduce
        const cookieResult = reqCookie.split("; ").reduce((p, c) => {
            const [key, value] = c.split("="); //["username","lily"]
            p[key] = value;
            return p;
        }, {});
        console.log(cookieResult);


        //删除cookie 
        //给cookie设置一个过期的时间 或是设置max-age = 0;
        res.setHeader("Set-Cookie","username=;max-age=0")


        res.end("success");
    })
    .listen(3000, "localhost", (err) => {
        console.log("请访问 http://localhost:3000")
    })