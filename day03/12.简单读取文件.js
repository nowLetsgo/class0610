/* 
    简单读取：
        异步方法：fs.readFile(file, [, options], callback)
            file：要写入的文件地址
            options：文件的配置  权限、字符编码  {encoding:"utf8",flag:"w",mode:0666}
            callback：回调函数
*/

const fs = require("fs");
const path = require("path")

const filePath = path.resolve(__dirname, "./txt/01.txt");

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log("文件读取失败" + err);
        return;
    }
    console.log(data); //读到的是一个buffer
    console.log(data.toString()); //啊，雨下的真大我的衣服没有晾今天晚上有台风啊漂亮
})  