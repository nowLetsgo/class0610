const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
    //只要你请求了192.168.16.38:3000 那么就把当前的chat.html返回给你
    // console.log(req.url);
    if (req.url === "/socket.io.js") {
        const filePath = path.resolve(__dirname, "./socket.io.js");
        const rs = fs.createReadStream(filePath);
        res.setHeader("Content-Type", "application/javascript;charset=utf8");
        rs.pipe(res);
        return;
    }
    const filePath = path.resolve(__dirname, "./chat.html");
    const rs = fs.createReadStream(filePath);
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    rs.pipe(res);

})

//创建一个ws服务器
const io = require("socket.io")(server);

//当有用户连接上当前ws服务器的时候，会自动触发connect事件
//回调函数的参数socket就是当前连接的用户
io.on("connect", (socket) => {
    // console.log(socket)
    //如果客户端想要发送数据给服务端，则直接在客户端调用这个事件即可
    socket.on("client_to_server", (data) => {
        //data就是客户端发消息的时候，发送的数据
        // console.log(data);

        //当服务端收到客户端发来的消息之后，要立马通知其他的客户端
        //通过调用客户端定义的server_to_client事件 传输数据
        //socket.broadcast是除了当前给你发消息的socket客户端的其他所有客户端
        socket.broadcast.emit("server_to_client", data)
    })
})




server.listen(3000, "192.168.16.38");