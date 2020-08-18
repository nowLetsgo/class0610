//流式读写.js

const fs = require("fs");
const path = require("path");
const {
    pipeline
} = require("stream");

const filePath1 = path.resolve(__dirname, "./txt/01.mp4");
const filePath2 = path.resolve(__dirname, "./txt/02.mp4");

//创建可读流
const rs = fs.createReadStream(filePath1);
//创建可写流
const ws = fs.createWriteStream(filePath2);

/* //读写
rs.on("data", (chunk) => {
    //chunk就是每次读取的64kb的数据
    ws.write(chunk);
})
rs.on("close", () => {
    console.log("读取完成")
}) */

// pipe()方法是可读流的一个方法，可以持续的消费可读流的内容，并直接写入可写流
//读写完成自动关闭
rs.pipe(ws);