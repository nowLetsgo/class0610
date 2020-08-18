/* 
    异步写入文件
*/

//引入包
const fs = require("fs");
const path = require("path");

//处理路径
const filePath = path.resolve(__dirname, "./txt/01.txt");;

//打开文件 回调函数有两个参数，err,data
const fd = fs.open(filePath, "w", (err, fd) => {
    //err在前，因为nodejs是错误优先处理机制,如果有错误则返回错误对象，否则返回null
    if (err) {
        console.log("文件打开失败");
        return;
    }
    //文件打开成功
    console.log(fd); //当前打开文件的句柄
    console.log("文件打开成功")


    //写入文件
    fs.write(fd, "锄禾日当午~", (err, data) => {
        //错误处理
        if (err) {
            console.log("文件写入失败");
        }
        console.log(data); //写入的字节数量
        console.log("文件写入成功");

        //关闭文件 无论写入成功或者而失败 都要关闭
        fs.close(fd, (err) => {
            if (err) {
                console.log("文件关闭失败")
            }
            console.log("文件关闭");
        })
    })
})
console.log(fd); //undefined 异步得到的结果在回调函数中