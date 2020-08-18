/* 
    简单写入：
        异步方法：fs.writeFile(file, data[, options], callback)
            file：要写入的文件地址
            data：写入的内容
            options：文件的配置  权限、字符编码  {encoding:"utf8",flag:"w",mode:0666}
            callback：回调函数

*/

const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./txt/01.txt");

//简单写入
fs.writeFile(filePath, "今天天气真好~", {
    encoding: "utf-8",
    flag: "a",
}, (err, data) => {
    if (err) {
        console.log("文件写入失败" + err);
        return;
    }
    console.log("文件写入成功")
})