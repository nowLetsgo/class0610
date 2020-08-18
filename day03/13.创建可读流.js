/* 
    fs.createReadStream(path[, options])
        创建可读流
            - path 被读取文件
            - options  配置
*/

const fs = require("fs");
const path = require("path")

const filePath = path.resolve(__dirname, "./txt/01.mp4");

//创建可写流  
const rs = fs.createReadStream(filePath);
// console.log(rs); //返回的是一个ReadStream对象 里边包含对当前流文件的操作方法和属性

//事件驱动
let num = 0;
//每次读取事件
rs.on("data", (chunk) => {
    //流式读取的话，是每次读取64kb
    //data事件就是消费每一次的读取 
    // chunk就是每次读取的数据
    console.log(chunk);
    num++; //计数器，检测读取次数
    console.log(num)
})

//可读流关闭事件
rs.on("end", () => {
    console.log("可读流关闭")
})