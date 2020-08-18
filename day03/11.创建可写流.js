/* 
    fs.createWriteStream(path[, options])
        创建可写流
            - path 被写入的文件
            - options  配置
*/

const fs = require("fs");
const path = require("path")

const filePath = path.resolve(__dirname, "./txt/01.txt");

//创建可写流  
const ws = fs.createWriteStream(filePath);
// console.log(ws); //返回的是一个WriteStream对象 里边包含对当前流文件的操作方法和属性

//在nodejs中使用on或者once来绑定事件
//流是支持事件的，可以通过事件来知道流的状态
//WriteStream 有open事件，当流打开的时候触发，有一个close方法,当流关闭的时候触发
ws.once("open", () => {
    console.log("开始写入文件.....")
})

ws.once("close", () => {
    console.log("写入文件结束，文件关闭")
})


//write方法 向可写流中书写内容  可以书写1次或多次
ws.write("啊，雨下的真大");
ws.write("我的衣服没有晾");
ws.write("今天晚上有台风啊");
ws.write("漂亮");


ws.close(); //关闭可写流 但是关闭的是末尾（可能造成数据丢失）
ws.end(); //关闭可写流，关闭的是开始，数据是完整的